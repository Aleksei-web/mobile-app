import { FC } from "react"
import { View, StyleSheet } from "react-native"
import { colors } from "../../contstants"

export const Card:FC = ({children}) => {

	return <View style={styles.container}>
		{children}
	</View>
}

const styles = StyleSheet.create({
	container: {
		height: 'auto',
    padding: 4,
    minWidth: '95%',
    borderRadius: 8,
    backgroundColor: colors.MAIN
	}
})