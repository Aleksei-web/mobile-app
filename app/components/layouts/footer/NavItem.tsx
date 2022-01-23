import { FC } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { IFooterItem } from "./types";
import {AntDesign} from '@expo/vector-icons';
import { TypeRootStackParamList } from "../../../navigation/types";

interface INavItem {
	item: IFooterItem,
	navigate: (screenName:keyof TypeRootStackParamList) => void
	currentRoute: string
}

export const NavItem:FC<INavItem> = ({item, navigate, currentRoute}) => {

	const isActive = currentRoute == item.title;

	return <Pressable style={styles.container} onPress={() => navigate(item.title)}>
		<AntDesign name={item.iconName} size={20} />
		<Text style={!isActive ? styles.text : {...styles.text, ...styles.active} }>{item.title}</Text>
	</Pressable>
}

const styles = StyleSheet.create({
	container: {
		width: '20%',
		justifyContent:'center',
		alignItems: 'center',
		marginBottom: 30
	},
	active:{
		color: 'blue'
	},
	text: {
		fontSize: 18,
	}
})