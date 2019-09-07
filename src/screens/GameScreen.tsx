import React, { useState, useEffect } from 'react';
import colors from '../constants/colors';
import styles from '../styles/GameScreen.style';
import { Text, View, Button, Alert } from 'react-native';

type GameScreenProps = {
  userInput: number;
  totalRounds: number;
  setTotalRounds: (totalRounds: number) => void;
  setGameIsOver: (gameIsOver: boolean) => void;
};

export default ({
  userInput,
  totalRounds,
  setTotalRounds,
  setGameIsOver
}: GameScreenProps) => {
  const getCPUGuess = (min: number, max: number, exclude: number) => {
    const guess = Math.floor(Math.random() * (max - min + 1) + min);

    return guess === exclude ? getCPUGuess(min, max, exclude) : guess;
  };

  const showWarning = (choice: string) =>
    Alert.alert('Invalid choice', `I know your number cannot be ${choice}`, [
      { text: 'OK', style: 'default' }
    ]);

  const handleGuess = (direction: string) => {
    const lower = direction === 'lower';
    if (lower ? guess < userInput : guess > userInput) {
      showWarning(direction);
    } else {
      lower ? setMax(guess) : setMin(guess);
      setGuess(
        lower ? getCPUGuess(min, guess, guess) : getCPUGuess(guess, max, guess)
      );
      setTotalRounds(++totalRounds);
    }
  };

  const [guess, setGuess] = useState<number>(getCPUGuess(1, 99, userInput));
  const [max, setMax] = useState<number>(99);
  const [min, setMin] = useState<number>(1);

  useEffect(() => {
    if (guess === userInput) {
      setGameIsOver(true);
    }
  });

  return (
    <>
      <Text style={styles.prompt}>Computer Guess: {guess}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title='-'
            onPress={() => handleGuess('lower')}
            color={colors.primary}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='+'
            onPress={() => handleGuess('higher')}
            color={colors.primary}
          />
        </View>
      </View>
    </>
  );
};
