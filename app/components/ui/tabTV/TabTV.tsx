import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../contstants';
import { HeaderTab } from '../HeaderTab';
import { ItemTvService } from './ItemTvSevice';
import { servicesTV } from './servisesTV';

export const TabTV: FC = () => {
	return (
		<View>
			{servicesTV.map((service) => (
				<ItemTvService header={service.header} key={service.header}/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});
