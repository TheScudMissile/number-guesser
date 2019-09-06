import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from '../components/Card';
import styles from '../styles/HomeScreen.style';
import HomeInput from '../components/HomeInput';
import GameScreen from '../components/GameScreen';

export default () => {
  const [hasConfirmed, setHasConfirmed] = useState<boolean>(false);
  const [selectedNum, setSelectedNum] = useState<number | null>(null);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Card rest={styles.inputContainer}>
          {hasConfirmed ? (
            <GameScreen userInput={selectedNum} />
          ) : (
            <HomeInput
              setHasConfirmed={setHasConfirmed}
              setSelectedNum={setSelectedNum}
            />
          )}
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};
