import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Card from './Card';
import styles from '../styles/HomeScreen.style';
import HomeInput from './HomeInput';

export default () => {
  const [hasConfirmed, setHasConfirmed] = useState<boolean>(false);
  const [selectedNum, setSelectedNum] = useState<number | null>(null);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Card rest={styles.inputContainer}>
          {hasConfirmed ? (
            <Text>{selectedNum}</Text>
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
