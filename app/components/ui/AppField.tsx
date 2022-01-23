import { FC } from "react";
import { TextInput, StyleSheet } from "react-native";

interface IField {
	onChange: (val: string) => void
	val: string
	placeholder: string
	isSecure?: boolean
}

export const AppField:FC<IField> = ({onChange, placeholder, val, isSecure}) => {
	return (
		<TextInput 
			placeholder={placeholder}
			onChangeText={onChange}
			value={val}
			secureTextEntry={isSecure}
			autoCapitalize='none'
			style={styles.input}
			/>
	)
}

const styles = StyleSheet.create({
	input: {
		width: '100%',
		marginTop: 16,
		height: 45,
		fontSize: 18,
		padding: 10,
		backgroundColor: '#e0e0e0',
		borderRadius: 8
	}
})