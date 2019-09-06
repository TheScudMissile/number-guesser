import React from 'react';
import styles from './src/styles/App.style';
import { View } from 'react-native';
import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';

export default () => (
  <View style={styles.container}>
    <Header />
    <HomeScreen />
  </View>
);
