import { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import { RootState } from '../../../store/reducers/rootReducer';
import { colors } from '../../../contstants';
import { Tabs } from '../../ui/Tabs';

export const Home: FC = () => {
console.log('home')
	const user = useSelector((state: RootState) => state.user.user);
	console.log(user)

	let content = (
		<View>
			<Text>Error</Text>
		</View>
	);

	if (user) {
		content = (
			<View style={styles.container}>
				<View style={{ marginTop: 15 }}>
					<View style={styles.topSection}>
						<View style={styles.topSectionHeader}>
							<Text style={styles.topSectionHeaderText}>
								20 дней до блокоровки
							</Text>
							<Text style={styles.topSectionHeaderText}>188305891</Text>
						</View>
						<View style={styles.balance}>
							<Text style={styles.balanceTotal}>1000.00</Text>
							<Text style={styles.balanceTotalText}>Сумма на счете</Text>
						</View>
						<View style={styles.topSectionFooter}>
							<Text style={styles.topSectionFooterText}>
								Тариф на трафик: Особый
							</Text>
							<TouchableOpacity
								// onPress={() => navigation.navigate('Пополнить счет')}
							>
								<Text style={{ color: colors.MAIN }}>Пополнить</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.secondSection}>
					<View style={styles.secondeSectionIcon}>
						<FontAwesome name="ruble" size={35} color={colors.MAIN} />
					</View>
					<View>
						<Text style={styles.secondTextInfo}>
							Ежемесячный платеж по за услуги
						</Text>
						<Text style={styles.secondTextDetails}>529 руб./мес.</Text>
					</View>
				</View>
				<Tabs />
			</View>
		);
	}

	return content;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: colors.BLACK,
	},
	header: {
		marginTop: 35,
		height: 'auto',
		marginBottom: 25,
	},
	topSectionHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	balance: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 20,
	},
	balanceTotal: {
		fontSize: 30,
		fontWeight: '600',
		color: colors.MAIN,
	},
	topSectionFooter: {
		margin: 0,
		padding: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	topSectionFooterText: {
		fontSize: 12,
		color: colors.WHITESECONDARY,
	},
	topSectionHeaderText: {
		fontSize: 14,
		color: colors.WHITESECONDARY,
	},
	balanceTotalText: {
		fontSize: 12,
		color: colors.WHITESECONDARY,
	},
	topSection: {
		height: 'auto',
		padding: 4,
		minWidth: '95%',
		borderRadius: 4,
		backgroundColor: colors.DARKSECONDARY,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 5,
	},
	secondSection: {
		height: 'auto',
		flexDirection: 'row',
		backgroundColor: colors.DARKSECONDARY,
		marginTop: 10,
		borderRadius: 4,
		width: '95%',
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 5,
	},
	secondeSectionIcon: {
		marginRight: 20,
	},
	secondTextDetails: {
		fontSize: 14,
		color: colors.WHITESECONDARY,
	},
	secondTextInfo: {
		fontSize: 16,
		fontWeight: '500',
		color: colors.WHITESECONDARY,
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
	},
});
