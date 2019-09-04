import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import styles from '../styles/HomeScreen.style';
import HomeInput from './HomeInput';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Game</Text>
      <Card rest={styles.inputContainer}>
        <HomeInput />
      </Card>
    </View>
  );
};
