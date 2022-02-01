import { FC } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../contstants';
import { TabInternet } from './TabInternet';
import { useState } from 'react';
import { TabMobile } from './TabMobile';
import { TabPhone } from './TabPhone';
import { TabTV } from './tabTV/TabTV';

type ActiveTab = 'globe' | 'tv' | 'mobile' | 'phone';

export const Tabs: FC = () => {
	const [activeTab, setActiveTab] = useState<ActiveTab>('globe');

	const renderTab = () => {
		switch (activeTab) {
			case 'globe':
				return <TabInternet />;
				break;
			case 'mobile':
				return <TabMobile />;
				break;
			case 'phone':
				return <TabPhone />;
				break;
			case 'tv':
				return <TabTV />;
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.tabsHeader}>
				<TouchableOpacity
					style={
						activeTab === 'globe'
							? { ...styles.item, ...styles.active }
							: { ...styles.item }
					}
					onPress={() => {
						setActiveTab('globe');
					}}
				>
					<FontAwesome
						name="globe"
						color={activeTab === 'globe' ? colors.MAIN : colors.WHITESECONDARY}
						size={24}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={
						activeTab === 'tv'
							? { ...styles.item, ...styles.active }
							: { ...styles.item }
					}
					onPress={() => {
						setActiveTab('tv');
					}}
				>
					<FontAwesome
						name="tv"
						size={24}
						color={activeTab === 'tv' ? colors.MAIN : colors.WHITESECONDARY}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={
						activeTab === 'mobile'
							? { ...styles.item, ...styles.active }
							: { ...styles.item }
					}
					onPress={() => {
						setActiveTab('mobile');
					}}
				>
					<FontAwesome
						name="mobile-phone"
						color={activeTab === 'mobile' ? colors.MAIN : colors.WHITESECONDARY}
						size={24}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={
						activeTab === 'phone'
							? { ...styles.item, ...styles.active }
							: { ...styles.item }
					}
					onPress={() => {
						setActiveTab('phone');
					}}
				>
					<FontAwesome
						name="phone"
						color={activeTab === 'phone' ? colors.MAIN : colors.WHITESECONDARY}
						size={24}
					/>
				</TouchableOpacity>
			</View>
			{renderTab()}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '95%',
		marginTop: 10,
		backgroundColor: colors.DARKSECONDARY,
		borderRadius: 4,
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5
	},
	tabsHeader: {
		flexDirection: 'row',
		height: 50,
		alignItems: 'center',
	},
	item: {
		flex: 0.25,
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		borderStyle: 'solid',
	},
	active: {
		borderStyle: 'solid',
		borderBottomColor: colors.MAIN,
		borderBottomWidth: 3,
	},
	activeIcon: {
		color: colors.MAIN,
	},
});
