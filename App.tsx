import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import store from './app/store';
import { Navigation } from './app/navigation/Navigation';

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<Navigation />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
	},
	button: {
		marginTop: 26,
	},
});
