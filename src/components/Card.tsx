import React, { ReactNode } from 'react';
import styles from '../styles/Card.style';
import { View } from 'react-native';

type CardProps = {
  children: ReactNode;
};

export default ({ children }: CardProps) => (
  <View style={styles.card}>{children}</View>
);
