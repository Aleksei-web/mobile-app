import { useEffect, useState, FC } from 'react';
import {
	NavigationContainer,
	useNavigationContainerRef,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../components/screens/login/LoginScreen';
import { Home } from '../components/screens/home/HomeScreen';
import { ProfileScreen } from '../components/screens/profile/Profile';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/rootReducer';
import { ChatScreen } from '../components/screens/chat/Chat';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors } from '../contstants';
import { CustomDrawer } from '../components/customDrawer/CustomDrawer';
import { SettingsScreen } from '../components/screens/settings/SettingsScreen';
import { TvScreen } from '../components/screens/TV/TvScreen';
import { PayScreen } from '../components/screens/pay/PayScreen';
import { InternetScreen } from '../components/screens/internet/InternetScreen';
import { AdditionalServicesScreen } from '../components/screens/additionalServices/AdditionalServicesScreen';

const Stack = createDrawerNavigator();
const LoginStack = createStackNavigator();

export const Navigation: FC = () => {
	const [name, setName] = useState<string | undefined>(undefined);
	const { user } = useSelector((state: RootState) => state.user);
	const ref = useNavigationContainerRef();

	console.log('user', user)
	useEffect(() => {
		const timeout = setTimeout(() => {
			setName(ref.getCurrentRoute()?.name);
		}, 100);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const listener = ref.addListener('state', () => {
			setName(ref.getCurrentRoute()?.name);
		});

		return () => {
			ref.removeListener('state', listener);
		};
	}, []);

	return (
		<>
			{user ? (
				<>
					<NavigationContainer ref={ref}>
						<Stack.Navigator
							initialRouteName="Главная"
							drawerContent={(props) => <CustomDrawer {...props} />}
							screenOptions={{
								headerShown: true,
								headerStyle: { backgroundColor: colors.MAIN },
								drawerLabelStyle: { marginLeft: -25 },
								drawerActiveTintColor: colors.MAIN,
								drawerInactiveTintColor: '#333',
							}}
						>
							<>
								<Stack.Screen
									name="Главная"
									component={Home}
									options={{
										drawerIcon: ({ color }) => (
											<Ionicons name="home-outline" size={22} color={color} />
										),
									}}
								/>
								<Stack.Screen
									name="Профиль"
									component={ProfileScreen}
									options={{
										drawerIcon: ({ color }) => (
											<Ionicons name="person-outline" size={22} color={color} />
										),
									}}
								/>
								<Stack.Screen
									name="Интернет"
									component={InternetScreen}
									options={{
										drawerIcon: ({ color }) => (
											<Ionicons name="globe-outline" size={22} color={color} />
										),
									}}
								/>
								<Stack.Screen
									name="Пополнить счет"
									component={PayScreen}
									options={{
										drawerIcon: ({ color }) => (
											<FontAwesome5 name="amazon-pay" size={22} color={color} />
										),
									}}
								/>
								<Stack.Screen
									name="Чат"
									component={ChatScreen}
									options={{
										drawerIcon: ({ color }) => (
											<Ionicons
												name="chatbox-ellipses-outline"
												size={22}
												color={color}
											/>
										),
									}}
								/>
								<Stack.Screen
									name="TV"
									component={TvScreen}
									options={{
										drawerIcon: ({ color }) => (
											<Ionicons name="tv-outline" size={22} color={color} />
										),
									}}
								/>
								<Stack.Screen
									name="Дополнительные услуги"
									component={AdditionalServicesScreen}
									options={{
										drawerIcon: ({ color }) => (
											<Ionicons
												name="ellipsis-vertical-outline"
												size={22}
												color={color}
											/>
										),
									}}
								/>
								<Stack.Screen
									name="Настройки"
									component={SettingsScreen}
									options={{
										drawerIcon: ({ color }) => (
											<Ionicons
												name="settings-outline"
												size={22}
												color={color}
											/>
										),
									}}
								/>
							</>
						</Stack.Navigator>
					</NavigationContainer>
				</>
			) : (
				<>
					<NavigationContainer ref={ref}>
						<LoginStack.Navigator screenOptions={{ headerShown: false }}>
							<LoginStack.Screen name="Login" component={LoginScreen} />
							<LoginStack.Screen name="Главная" component={Home} />
						</LoginStack.Navigator>
					</NavigationContainer>
				</>
			)}

			{/* {user && name && <Footer navigate={ref.navigate} currentRoute={name} />} */}
		</>
	);
};
