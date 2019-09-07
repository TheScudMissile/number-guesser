import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/Header.style';

export default () => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>Number Guesser</Text>
  </View>
);
