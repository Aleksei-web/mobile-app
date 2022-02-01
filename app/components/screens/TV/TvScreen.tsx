import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";


export const TvScreen:FC = () => {
	return (<View style={styles.container}>
		<Text>TV</Text>
	</View>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})