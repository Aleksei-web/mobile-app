import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../../contstants';

interface IHeaderTab {
	title: string;
}

export const HeaderTab: FC<IHeaderTab> = ({ title }: IHeaderTab) => {
	return (
		<View>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		color: colors.WHITESECONDARY,
		fontWeight: '500',
		fontSize: 18,
	},
});
