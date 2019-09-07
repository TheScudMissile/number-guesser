import React, { ReactNode } from 'react';
import styles from '../styles/Card.style';
import { View } from 'react-native';

type CardProps = {
  children: ReactNode;
  rest?: object;
};

export default ({ children, rest }: CardProps) => (
  <View style={{ ...styles.card, ...rest }}>{children}</View>
);
