import { FC } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { IFooterItem } from './types';
import { TypeRootStackParamList } from '../../../navigation/types';
import { colors } from '../../../contstants';

interface INavItem {
	item: IFooterItem;
	navigate: (screenName: keyof TypeRootStackParamList) => void;
	currentRoute: string;
}

export const NavItem: FC<INavItem> = ({ item, navigate, currentRoute }) => {
	const isActive = currentRoute == item.title;

	return (
		<Pressable style={styles.container} onPress={() => navigate(item.title)}>
			<AntDesign
				style={
					isActive
						? { ...styles.icon }
						: { ...styles.icon, color: colors.WHITESECONDARY }
				}
				name={item.iconName}
				size={20}
			/>
			<Text
				style={
					isActive
						? styles.text
						: { ...styles.text, color: colors.WHITESECONDARY }
				}
			>
				{item.title}
			</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginBottom: 1,
		flexDirection: 'row',
		paddingLeft: 20,
		marginTop: 20
	},
	icon: {
		paddingRight: 20,
	},
	active: {
		color: colors.MAIN,
	},
	text: {
		fontSize: 18,
		color: colors.MAIN,
	},
});
