import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import colors from '../constants/colors';

type GameOverScreenProps = {
  selectedNum: number;
  totalRounds: number;
  resetGame: () => void;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  totalRounds: {
    marginBottom: 10
  }
});
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
