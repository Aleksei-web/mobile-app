import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";


export const AdditionalServicesScreen:FC = () => {
	return (<View style={styles.container}>
		<Text>Дополнительные услуги</Text>
	</View>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})