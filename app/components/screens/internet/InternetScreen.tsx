import { FC, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	useWindowDimensions,
	TouchableOpacity,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../../contstants';
import { anotherService } from './anotherServices';

const FirstRoute = () => {
	return (
		<View style={styles.container}>
			<View style={styles.cardBox}>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>100 Мб/с</Text>
					<Text style={styles.cardSubtitle}>Входящая скорость</Text>
				</View>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>100 Мб/с</Text>
					<Text style={styles.cardSubtitle}>Исходящая скорость</Text>
				</View>
			</View>
			<View style={styles.infoBlock}>
				<View style={styles.infoBlockTitle}>
					<Text style={styles.infoBlockTitleText}>Тарифный план</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 20,
					}}
				>
					<Text style={{ fontSize: 18 }}>Технологии доступа 100</Text>
					<Text style={{ fontSize: 18, color: colors.MAIN, fontWeight: '500' }}>
						449 руб./мес.
					</Text>
				</View>
				<TouchableOpacity style={{ marginTop: 20 }}>
					<View>
						<Text style={{ fontSize: 18, color: colors.MAIN }}>
							СМЕНИТЬ ТАРИФ
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const SecondRoute = () => (
	<View>
		{anotherService.map((el) => (
			<View
				key={el.title}
				style={{
					paddingHorizontal: 20,
					flexDirection: 'row',
					alignItems: 'center',
					borderBottomWidth: 1,
					borderBottomColor: 'gray',
					paddingBottom: 25,
					paddingTop: 25,
				}}
			>
				<MaterialCommunityIcons
					name={el.icon}
					size={34}
					color="black"
					style={{ marginRight: 20 }}
				/>
				<Text style={{ fontSize: 18 }}>{el.title}</Text>
			</View>
		))}
	</View>
);

const ThreeRoute = () => (
	<View>
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				marginTop: 30,
				marginBottom: 40,
				paddingLeft: 20,
				borderBottomWidth: 1,
				borderBottomColor: 'gray',
				paddingBottom: 30
			}}
		>
			<MaterialCommunityIcons
				name="router-wireless"
				style={{ marginRight: 20 }}
				size={34}
			/>
			<View>
				<Text style={{ fontSize: 18 }}>Wi-Fi роутер Премиум+</Text>
				<Text style={{color: colors.MAIN, marginTop: 10}}>Аренда 30 руб./мес</Text>
			</View>
		</View>
		<TouchableOpacity style={{paddingLeft: 20}}>
			<View>
				<Text style={{fontSize: 18, color: colors.MAIN}}>Изменить</Text>
			</View>
		</TouchableOpacity>
	</View>
);

const renderTabBar = (props: any) => (
	<TabBar
		{...props}
		indicatorStyle={{ backgroundColor: 'white' }}
		style={{ backgroundColor: colors.MAIN }}
		renderLabel={({ route, focused, color }) => (
			<Text style={{ color: 'black', fontWeight: '500' }}>{route.title}</Text>
		)}
	/>
);

export const InternetScreen: FC = () => {
	const layout = useWindowDimensions();

	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'first', title: 'Тариф' },
		{ key: 'second', title: 'Доп.услуги' },
		{ key: 'three', title: 'Оборудование' },
	]);
	return (
		<TabView
			renderTabBar={renderTabBar}
			navigationState={{ index, routes }}
			renderScene={SceneMap({
				first: FirstRoute,
				second: SecondRoute,
				three: ThreeRoute,
			})}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	cardBox: {
		height: 90,
		flexDirection: 'row',
		marginTop: 10,
	},
	card: {
		flex: 1,
		alignItems: 'center',
		borderRadius: 4,
		backgroundColor: colors.DARKSECONDARY,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 5,
		margin: 5,
		justifyContent: 'center',
	},
	cardTitle: {
		fontSize: 18,
		color: colors.MAIN,
		fontWeight: '500',
	},
	cardSubtitle: {
		color: 'gray',
		marginTop: 3,
	},
	infoBlock: {
		padding: 20,
	},
	infoBlockTitle: {},
	infoBlockTitleText: {
		color: 'gray',
	},
});
