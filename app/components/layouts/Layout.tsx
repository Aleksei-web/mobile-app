import { FC } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

interface ILayout{
	isScrollView?: boolean
}

export const Layout:FC<ILayout> = ({children, isScrollView = true}) => {
	return (
		<View style={styles.container}>
			{isScrollView ? <ScrollView>{children}</ScrollView> : 
			{children}}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: 'white',
		paddingTop: 16
	}
})
