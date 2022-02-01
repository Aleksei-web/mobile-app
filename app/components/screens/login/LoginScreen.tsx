import { FC, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Loader } from "../../ui/Loader";
import {AppField} from '../../ui/AppField'
import { AppButton } from "../../ui/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest } from "../../../store/actions/user";
import { RootState } from "../../../store/reducers/rootReducer";
import { colors } from "../../../contstants";

interface IData {
	name: string
	password: string
}

export const LoginScreen:FC = () => {
	const [data, setData] = useState<IData>({name: '188305891'} as IData)

	const pending = useSelector((state: RootState) => state.user.pending)
	const dispatch = useDispatch();

	const loginHandler = () => {
		dispatch(fetchUserRequest(data.name))
	}

	return (
		<View style={styles.container}>
			{
				pending ? (<Loader />) :
			
			(<><View style={styles.box}>
				<Text style={styles.title}>Вход в личный кабинет</Text>
				<AppField 
					val={data.name} 
					placeholder='Введите логин' 
					onChange={val => setData({...data, name: val})} 
				/>
				<AppField 
					val={data.password} 
					placeholder='Введите пароль' 
					onChange={val => setData({...data, password: val})}
					isSecure={true}
				/>

				<AppButton onPress={loginHandler} title='Вход' />

			</View>
			<View style={styles.forgotPassword}>
				<Pressable onPress={() => console.log('press')}>
					<Text style={styles.forgotPasswordText} >Забыли пароль?</Text>
				</Pressable>
			</View></>
			)
		}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.BLACK
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
		color: colors.WHITE
	},
	forgotPassword: {
		marginTop: 16,
		width: '80%',
		alignItems: 'flex-end',
	},
	forgotPasswordText: {
		color: colors.WHITESECONDARY
	}
})