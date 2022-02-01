import { FC } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, ScrollView, ScrollViewComponent } from 'react-native';

import { colors } from '../../contstants';

export const TabInternet: FC = () => {
	return (
		<View style={styles.content}>
			<ScrollView>
				<Text style={styles.contentHeader}>Интернет</Text>
				<View style={styles.containerItems}>
					<Text style={styles.containerText}>Тариф "Технология дос...</Text>
					<Text style={styles.containerText}>449 руб./мес</Text>
				</View>
				<Text style={styles.containerText}>Входящая скорость</Text>
				<Text style={styles.speed}>100 Mб/с</Text>
				<View style={styles.containerItems}>
					<Text style={styles.containerText}>Дополнительно</Text>
					<FontAwesome name="arrow-down" />
				</View>
				<View style={styles.containerItems}>
					<Text style={styles.containerText}>Wi-Fi роутер Премиум+</Text>
					<Text style={styles.containerText}>30 руб./мес</Text>
				</View>
				<Text style={styles.containerText}>Подробнее</Text>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		padding: 10,
	},
	contentHeader: {
		fontSize: 18,
		fontWeight: '600',
		color: colors.WHITESECONDARY
	},
	containerItems: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: 15,
		marginBottom: 10,
	},
	speed: {
		fontSize: 25,
	},
	containerText: {
		fontSize: 16,
		color: colors.WHITE
	},
});
