import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { service } from "./moreService";


export const AdditionalServicesScreen:FC = () => {
	return (<View style={styles.container}>
		{service.map(el => (
			<View key={el.title} style={styles.item}>
				<MaterialCommunityIcons style={styles.icon} name={el.icon} size={34} />
				<Text style={styles.text}>{el.title}</Text>
			</View>
		))}
	</View>)
}

const styles = StyleSheet.create({
	container: {
	},
	item: {
		padding: 15,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'gray',
	},
	text: {
		fontSize: 18
	},
	icon: {
		marginRight: 20
	}
})