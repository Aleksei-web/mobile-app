import { FC } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../../contstants';

export const TvScreen: FC = () => {
	return (
		<View style={styles.container}>
			<View>
				<Image
					source={require('../../../../assets/tv.jpeg')}
					style={{ width: 250, height: 200 }}
				/>
			</View>
			<View
				style={{
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						width: '80%',
						borderWidth: 1,
						borderColor: colors.MAIN,
						marginTop: 20,
					}}
				>
					<TouchableOpacity
						style={{
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							padding: 20,
						}}
					>
						<View style={{ width: '100%' }}>
							<Text style={{ color: colors.MAIN, fontSize: 18 }}>
								Подлючить Интерактивное ТВ
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View
					style={{
						width: '80%',
						borderWidth: 1,
						borderColor: colors.MAIN,
						marginTop: 20,
					}}
				>
					<TouchableOpacity>
						<View
							style={{
								width: '100%',
								justifyContent: 'center',
								alignItems: 'center',
								padding: 20,
							}}
						>
							<Text style={{ color: colors.MAIN, fontSize: 18 }}>
								Подлючить WINK-ТВ-ОНЛАЙН
							</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View
					style={{
						width: '80%',
						borderWidth: 1,
						borderColor: colors.MAIN,
						marginTop: 20,
					}}
				>
					<TouchableOpacity
						style={{
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							padding: 20,
						}}
					>
						<View>
							<Text style={{ color: colors.MAIN, fontSize: 18 }}>
								Подлючить Цифровое ТВ
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
});
