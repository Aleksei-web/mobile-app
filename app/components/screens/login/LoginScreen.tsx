import { FC, useState, useEffect, useRef } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	Pressable,
	Alert,
} from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Subscription } from 'expo-modules-core';

import { Loader } from '../../ui/Loader';
import { AppField } from '../../ui/AppField';
import { AppButton } from '../../ui/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from '../../../store/actions/user';
import { RootState } from '../../../store/reducers/rootReducer';
import { colors } from '../../../contstants';

interface IData {
	login: string;
	password: string;
}

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

export const LoginScreen: FC = () => {
	const [isReady, setIsReady] = useState(false);
	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState({});
	const notificationListener = useRef<Subscription>();

	useEffect(() => {
		registerForPushNotificationsAsync().then((token) => {
			if (token) {
				setExpoPushToken(token.data);
			}
		});

		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				setNotification(notification);
			});
	}, []);

	const [data, setData] = useState<IData>({ login: '', password: '' });

	const pending = useSelector((state: RootState) => state.user.pending);
	const error = useSelector((state: RootState) => state.user.error);
	const dispatch = useDispatch();

	const loginHandler = async () => {
		if (!data.login || !data.password) {
			Alert.alert('Ошибка авторизазии', 'Введите login и пароль');
			return;
		}
		const response = dispatch(
			fetchUserRequest({ ...data, token: expoPushToken })
		);
		if (error) {
			Alert.alert('error', error);
		}
	};

	return (
		<View style={styles.container}>
			{pending ? (
				<Loader />
			) : (
				<>
					<View style={styles.box}>
						<Text style={styles.title}>Вход в личный кабинет</Text>
						<AppField
							val={data.login}
							placeholder="Введите логин"
							onChange={(val) => setData({ ...data, login: val })}
						/>
						<AppField
							val={data.password}
							placeholder="Введите пароль"
							onChange={(val) => setData({ ...data, password: val })}
							isSecure={true}
						/>

						<AppButton onPress={loginHandler} title="Вход" />
					</View>
					<View style={styles.forgotPassword}>
						<Pressable onPress={() => console.log('press')}>
							<Text style={styles.forgotPasswordText}>Забыли пароль?</Text>
						</Pressable>
					</View>
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.BLACK,
	},
	text: {
		textAlign: 'center',
	},
	box: {
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		color: colors.WHITE,
	},
	forgotPassword: {
		marginTop: 16,
		width: '80%',
		alignItems: 'flex-end',
	},
	forgotPasswordText: {
		color: colors.WHITESECONDARY,
	},
});

async function registerForPushNotificationsAsync() {
	let token;
	console.log(Device.isDevice, 'Device.isDevice');

	if (Device.isDevice) {
		const { status: existingStatus } =
			await Notifications.getPermissionsAsync();
		let finalStatus = existingStatus;
		console.log(existingStatus, 'existingStatus');

		if (existingStatus !== 'granted') {
			const { status } = await Notifications.requestPermissionsAsync();
			console.log('status, finalStatus', status);
			finalStatus = status;
		}
		if (finalStatus !== 'granted') {
			alert('Failed to get push token for push notification!');
			return;
		}

		token = await Notifications.getExpoPushTokenAsync();
	} else {
		alert('Must use physical device for Push Notifications');
	}

	if (Platform.OS === 'android') {
		Notifications.setNotificationChannelAsync('default', {
			name: 'default',
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: '#FF231F7C',
		});
	}
	console.log('token', token);

	return token;
}
