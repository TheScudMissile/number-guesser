import React from 'react';
import styles from '../styles/HomeInput.style';
import colors from '../constants/colors';
import { Text, TextInput, View, Button } from 'react-native';

export default () => (
  <>
    <Text style={styles.instruction}>Enter a number</Text>
    <TextInput
      style={styles.numberInput}
      autoCorrect={false}
      keyboardType='number-pad'
      maxLength={2}
    />
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button title='Reset' onPress={() => null} color={colors.secondary} />
      </View>
      <View style={styles.button}>
        <Button title='Confirm' onPress={() => null} color={colors.primary} />
      </View>
    </View>
  </>
);
