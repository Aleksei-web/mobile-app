import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";


export const ProfileScreen:FC = () => {
	return (<View style={styles.container}>
		<View style={styles.item}>
			<Text style={styles.text}>Изменение пароля</Text>
		</View>
		<View style={styles.item}>
			<Text style={styles.text}>Персональные данные</Text>
		</View>
		<View style={styles.item}>
			<Text style={styles.text}>Настройка быстрой авторизации</Text>
		</View>
		<View style={styles.item}>
			<Text style={styles.text}>Push уведомления</Text>
		</View>
		<View style={styles.item}>
			<Text style={styles.text}>Подписка на новости</Text>
		</View>
	</View>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		padding: 20
	},
	text: {
		fontSize: 18
	}
})