import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../../contstants';

export const PayScreen: FC = () => {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<AntDesign name="creditcard" size={28} style={styles.cardIcon}/>
				<View>
					<Text style={styles.cardTitle}>Банковская карта</Text>
					<Text style={styles.cardSubtitle}>Оплата банковскими картами</Text>
				</View>
			</View>
			<View style={styles.card}>
				<FontAwesome5 name="hand-holding-usd" size={28} style={styles.cardIcon}/>
				<View>
					<Text style={styles.cardTitle}>Обещанный платеж</Text>
					<Text style={styles.cardSubtitle}>Автоматическое представление</Text>
				</View>
			</View>
			<View style={styles.card}>
				<AntDesign name="like2" size={28} style={styles.cardIcon}/>
				<View>
					<Text style={styles.cardTitle}>Автоплатеж</Text>
					<Text style={styles.cardSubtitle}>Настройка автопополнения счета</Text>
				</View>
			</View>
			<View style={styles.card}>
				<AntDesign name="infocirlceo" size={28} style={styles.cardIcon}/>
				<View>
					<Text style={styles.cardTitle}>Движение средств</Text>
					<Text style={styles.cardSubtitle}>Информация о движении средств</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		paddingLeft: 20,
		paddingBottom: 30,
		paddingTop: 30,
	},
	cardIcon: {
		marginRight: 20
	},
	cardTitle: {
		fontSize: 18,
		color: '#000',
		fontWeight: '500'
	},
	cardSubtitle: {
		color: 'gray'
	}
});
