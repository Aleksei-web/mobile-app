import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Home } from './app/components/screens/home/HomeScreen';
import { Navigation } from './app/navigation/Navigation';
import { Provider } from 'react-redux';
import store from './app/store'

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
    flex: 1
  }
})