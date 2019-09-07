import React from 'react';
import { Text, View, Button } from 'react-native';
import colors from '../constants/colors';
import styles from '../styles/GameOverScreen.style';

type GameOverScreenProps = {
  selectedNum: number;
  totalRounds: number;
  resetGame: () => void;
};

export default ({
  selectedNum,
  totalRounds,
  resetGame
}: GameOverScreenProps) => (
  <>
    <Text style={styles.title}>Game over!</Text>
    <Text>Your number was {selectedNum}</Text>
    <Text style={styles.totalRounds}>Number of rounds: {totalRounds}</Text>
    <View>
      <Button title='New Game' onPress={resetGame} color={colors.primary} />
    </View>
  </>
);
