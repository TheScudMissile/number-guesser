import React, { useState } from 'react';
import colors from '../constants/colors';
import styles from '../styles/GameScreen.style';
import { Text, View, Button, Alert } from 'react-native';

type GameScreenProps = {
  userInput: number;
};

export default ({ userInput }: GameScreenProps) => {
  const getCPUGuess = (min: number, max: number, exclude: number) => {
    const guess = Math.floor(Math.random() * (max - min + 1) + min);

    return guess === exclude ? getCPUGuess(min, max, exclude) : guess;
  };

  const showWarning = (choice: string) =>
    Alert.alert('Invalid choice', `I know your number cannot be ${choice}`, [
      { text: 'OK', style: 'default' }
    ]);

  const [guess, setGuess] = useState<number>(getCPUGuess(1, 99, userInput));
  const [max, setMax] = useState<number>(99);
  const [min, setMin] = useState<number>(1);

  return (
    <>
      <Text style={styles.prompt}>Computer Guess: {guess}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title='-'
            onPress={() => {
              if (guess < userInput) {
                showWarning('lower');
              } else {
                setMax(guess);
                setGuess(getCPUGuess(min, guess, guess));
              }
            }}
            color={colors.primary}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='+'
            onPress={() => {
              if (guess > userInput) {
                showWarning('higher');
              } else {
                setMin(guess);
                setGuess(getCPUGuess(guess, max, guess));
              }
            }}
            color={colors.primary}
          />
        </View>
      </View>
    </>
  );
};
