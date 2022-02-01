import { FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../contstants';
import { HeaderTab } from '../HeaderTab';

interface IItemTvService {
	header: string;
}

export const ItemTvService: FC<IItemTvService> = ({
	header,
}: IItemTvService) => {
	return (
		<View style={styles.container}>
			<HeaderTab title={header} />
			<TouchableOpacity onPress={() => {}}>
				<Text style={styles.buttonText}>Подключить</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
	buttonText: {
		fontSize: 20,
		marginTop: 5
	}
})
