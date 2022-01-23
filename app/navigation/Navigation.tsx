import { FC } from "react";
import { NavigationContainer, useNavigation, useNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View} from 'react-native'

import { LoginScreen } from "../components/screens/login/LoginScreen";
import { Home } from "../components/screens/home/HomeScreen";
import { ProfileScreen } from "../components/screens/profile/Profile";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import {Footer} from '../components/layouts/footer/Footer'
import { useState } from "react";
import { useEffect } from "react";



const Stack = createNativeStackNavigator()

export const Navigation: FC = () => {
	const [name, setName] = useState<string | undefined>(undefined);
	const {user} = useSelector((state: RootState) => state.user);
	console.log(user);
	const ref = useNavigationContainerRef()

	useEffect(() => {
		const timeout = setTimeout(() => {
			setName(ref.getCurrentRoute()?.name)
		}, 100)

		return () => clearTimeout(timeout);
	}, [])
	

	useEffect(() => {
		const listener = ref.addListener('state', () => {
			setName(ref.getCurrentRoute()?.name)
		})

		return () => {
			ref.removeListener('state', listener)
		}
	}, [])

	return (
		<>
		<NavigationContainer ref={ref}>
			<Stack.Navigator screenOptions={{headerShown:false}}>
			{
				user ? (<>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Profile" component={ProfileScreen} />
				</>) : 
				<Stack.Screen name="Login" component={LoginScreen} />
			}
			</Stack.Navigator>
		</NavigationContainer>
		{user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
		</>
	)
}