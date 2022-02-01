import {FC} from 'react';
import { View, StyleSheet } from "react-native";

import { colors } from '../../../contstants';
import { TypeRootStackParamList } from '../../../navigation/types';
import { menu } from './menu';
import { NavItem } from './NavItem';

interface IFooter {
	navigate: (screenName:keyof TypeRootStackParamList) => void
	currentRoute: string
}

export const Footer: FC<IFooter> = ({navigate, currentRoute}) => {
	return <View style={styles.container}>
		{menu.map(item => (
			<NavItem key={item.title} item={item} navigate={navigate} currentRoute={currentRoute} />
		))}
	</View>
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		borderTopColor: '#e1e1e1',
		paddingTop: 40,
		borderTopWidth: 1,
		padding: 4,
		height: '100%',
		width: '70%',
		backgroundColor: colors.SECONDARY,
		position: 'absolute'
	}
})