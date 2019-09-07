import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import HomeInput from '../components/HomeInput';

type HomeScreenProps = {
  setHasConfirmed: (hasConfirmed: boolean) => void;
  setSelectedNum: (selectedNum: number) => void;
};

export default ({ setHasConfirmed, setSelectedNum }: HomeScreenProps) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <HomeInput
      setHasConfirmed={setHasConfirmed}
      setSelectedNum={setSelectedNum}
    />
  </TouchableWithoutFeedback>
);
