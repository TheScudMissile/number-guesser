import React, { useState } from 'react';
import styles from '../styles/HomeInput.style';
import colors from '../constants/colors';
import { Text, TextInput, View, Button, Alert } from 'react-native';

type HomeInputProps = {
  setHasConfirmed: (hasConfirmed: boolean) => void;
  setSelectedNum: (setSelectedNum: number) => void;
};
export default ({ setHasConfirmed, setSelectedNum }: HomeInputProps) => {
  const [enteredValue, setEnteredValue] = useState<string>('');

  const handleChangeText = (text: string) =>
    text === '0'
      ? setEnteredValue('')
      : setEnteredValue(text.replace(/[^0-9]/g, '')); // replace any character that is not a digit 0-9 with ''

  const handleResetPress = () => {
    setEnteredValue('');
    setHasConfirmed(false);
  };

  const handleConfirmPress = () => {
    setEnteredValue('');

    if (enteredValue === '') {
      Alert.alert('Invalid Value', 'Number must be between 1 and 99', [
        { text: 'OK', style: 'default' }
      ]);
    } else {
      setHasConfirmed(true);
      setSelectedNum(parseInt(enteredValue));
    }
  };

  return (
    <>
      <Text style={styles.instruction}>Enter a number 1 - 99</Text>
      <TextInput
        style={styles.numberInput}
        autoCorrect={false}
        keyboardType='number-pad'
        maxLength={2}
        onChangeText={handleChangeText}
        value={enteredValue}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title='Reset'
            onPress={handleResetPress}
            color={colors.secondary}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Confirm'
            onPress={handleConfirmPress}
            color={colors.primary}
          />
        </View>
      </View>
    </>
  );
};
