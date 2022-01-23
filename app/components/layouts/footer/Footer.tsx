import {FC} from 'react';
import { View, Text, StyleSheet } from "react-native";
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
		flexDirection: 'row',
		borderTopColor: '#e1e1e1',
		borderTopWidth: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 4,
		paddingBottom: 4,
		height: 80
	}
})