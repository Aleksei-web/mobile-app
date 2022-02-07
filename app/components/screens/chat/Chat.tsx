import { useState, FC } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacityBase,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../../contstants';

export const ChatScreen: FC = () => {
	const [value, setValue] = useState('');

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
			<ScrollView style={{ height: '87%' }}>
				<View
					style={{
						width: '80%',
						backgroundColor: '#E0E0E0',
						borderRadius: 4,
						padding: 8,
						marginTop: 10,
						marginLeft: 10
					}}
				>
					<Text style={{ fontSize: 16 }}>tes</Text>
				</View>
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
						paddingLeft: 8
					}}
				/>
				<TouchableOpacity>
					<MaterialCommunityIcons name="send" color={colors.MAIN} size={24} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});
