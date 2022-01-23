import { FC } from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

interface IButton {
	onPress: () => void
	title: string
	colors?: [string, string]
}

export const AppButton:FC<IButton> = ({
		onPress, 
		title, 
		colors = ['#f57c00', '#FBBF24']
	}) => {

		
	return (
		<TouchableHighlight 
			onPress={onPress} 
			underlayColor={colors[1]}
			style={{...styles.button, backgroundColor: colors[0]}}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableHighlight>
	)
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
		marginTop: 16,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	text: {
		fontSize: 18
	}
})