import { FC } from 'react';
import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../contstants';
  
export const CustomDrawer: FC<DrawerContentComponentProps> = (
	props: DrawerContentComponentProps
) => {
	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView
				{...props}
				contentContainerStyle={{ backgroundColor: colors.MAIN }}
			>
				<View style={{ paddingLeft: 10 }}>
					<Text style={{ fontSize: 18 }}>Коровяков </Text>
				</View>
				<View style={{ backgroundColor: '#fff', flex: 1, marginTop: 10 }}>
					<DrawerItemList {...props} />
				</View>
			</DrawerContentScrollView>
			<View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
				<TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Ionicons name="share-social-outline" size={22} />
						<Text style={{ fontSize: 15 }}>Our Custom text</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Ionicons name="exit-outline" size={22} />
						<Text style={{ fontSize: 15 }}>Выход</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};
