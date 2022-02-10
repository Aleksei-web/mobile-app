import { useState, FC } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { messages } from './messages';
import { colors } from '../../../contstants';
import dayjs from 'dayjs';

export const ChatScreen: FC = () => {
	const [value, setValue] = useState('');
	const [stateMessages, setStateMessages] = useState(messages);

	const handlerMessage = () => {
		if (!value) {
			return;
		}

		setStateMessages((prev) => [
			...prev,
			{
				customerName: '',
				message: value,
				isUser: true,
				date: dayjs().format('HH:mm'),
				id: dayjs().format('HH:mm:ss'),
			},
		]);

		setValue('');
	};

	return (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: colors.MAIN,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text style={{ fontSize: 18, fontWeight: '500', marginVertical: 10 }}>
					Чат со специалистом
				</Text>
			</View>
			<ScrollView style={{ height: '87%', }}>
				{stateMessages.map((message) => (
					<View
						key={message.id}
						style={{
							width: '100%',
							alignItems: message.isUser ? 'flex-end' : 'flex-start',
						}}
					>
						<View
							style={{
								backgroundColor: message.isUser ? '#1e88e5' : '#E0E0E0',
								maxWidth: '80%',
								borderRadius: 4,
								padding: 8,
								marginTop: 10,
								marginLeft: 10,
								marginRight: 10,
								flexDirection: 'row',
							}}
						>
							<Text style={{ fontSize: 16 }}>{message.message}</Text>
							<Text style={{ marginTop: 5, marginLeft: 8 }}>
								{message.date}
							</Text>
						</View>
					</View>
				))}
			</ScrollView>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<TextInput
					value={value}
					multiline={true}
					numberOfLines={1}
					placeholder="Введите текст сообщения"
					onChangeText={(text) => setValue(text)}
					style={{
						borderBottomColor: 'gray',
						borderWidth: 1,
						minHeight: 40,
						width: '90%',
						fontSize: 18,
						backgroundColor: '#E0E0E0',
						borderRadius: 30,
						marginLeft: 8,
						paddingLeft: 8,
					}}
				/>
				<TouchableOpacity onPress={handlerMessage}>
					<MaterialCommunityIcons name="send" color={colors.MAIN} size={24} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});
