import React, { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, Button, Platform, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Subscription } from 'expo-modules-core';

import store from './app/store';
import { Navigation } from './app/navigation/Navigation';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: false,
		shouldSetBadge: false,
	}),
});

export default function App() {
	const [isReady, setIsReady] = useState(false);
	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState({});
	const notificationListener = useRef<Subscription>();

	useEffect(() => {
		registerForPushNotificationsAsync().then((token) => {
			if (typeof token === 'string') {
				setExpoPushToken(token);
			}
		});

		notificationListener.current =
			Notifications.addNotificationReceivedListener((notification) => {
				setNotification(notification);
			});
	}, []);

	return (
		<Provider store={store}>
			<View style={styles.container}>
				<Navigation />
			</View>
		</Provider>
	);
}

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},
	button: {
		marginTop: 26,
	},
});
