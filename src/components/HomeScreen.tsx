import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from './Card';

const styles = StyleSheet.create({
  button: {
    width: '40%'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  heading: {
    fontSize: 22,
    marginVertical: 20
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  instruction: {
    fontSize: 18
  }
});

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>New Game</Text>
      <Card rest={styles.inputContainer}>
        <Text style={styles.instruction}>Select a number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' onPress={() => null} color='#b5b5b5' />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' onPress={() => null} color='#81d4e3' />
          </View>
        </View>
      </Card>
    </View>
  );
};
