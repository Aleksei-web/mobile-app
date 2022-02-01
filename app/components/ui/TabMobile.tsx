import { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HeaderTab } from './HeaderTab';

export const TabMobile: FC = () => {
	return (
		<View style={{padding: 10}}>
			<HeaderTab title="Мобильная связь" />
			<TouchableOpacity>
				<Text style={{ fontSize: 20, marginTop: 5 }}>Подключить</Text>
			</TouchableOpacity>
		</View>
	);
};
