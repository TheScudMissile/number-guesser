import React from 'react';
import styles from './src/styles/App';
import { View } from 'react-native';
import Header from './src/components/Header';

export default () => (
  <View style={styles.container}>
    <Header />
  </View>
);
