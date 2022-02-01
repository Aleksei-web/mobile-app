import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderTab } from './HeaderTab';

export const TabPhone: FC = () => {
	return (
		<View style={{ padding: 10 }}>
			<HeaderTab title="Домашний телефон" />
			<Text style={styles.textInfo}>
				У вас уже подключен роутер с поддержкой услуги домашний телефон без
				дополнительного оборудования. Подключите услугу самостоятельно в разделе
				"Активация оборудования" в Личном кабинете или в Моильном приложении
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textInfo: {
		fontSize: 16,
		marginTop: 10,
	}
})