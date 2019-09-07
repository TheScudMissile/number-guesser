import React, { useState } from 'react';
import styles from './src/styles/App.style';
import { View } from 'react-native';
import Header from './src/components/Header';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import Card from './src/components/Card';

export default () => {
  const [hasConfirmed, setHasConfirmed] = useState<boolean>(false);
  const [selectedNum, setSelectedNum] = useState<number | null>(null);
  const [totalRounds, setTotalRounds] = useState<number>(1);
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);

  const resetGame = () => {
    setHasConfirmed(false);
    setSelectedNum(null);
    setTotalRounds(1);
    setGameIsOver(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Card rest={styles.card}>
        {hasConfirmed ? (
          gameIsOver ? (
            <GameOverScreen
              selectedNum={selectedNum}
              totalRounds={totalRounds}
              resetGame={resetGame}
            />
          ) : (
            <GameScreen
              userInput={selectedNum}
              totalRounds={totalRounds}
              setTotalRounds={setTotalRounds}
              setGameIsOver={setGameIsOver}
            />
          )
        ) : (
          <HomeScreen
            setHasConfirmed={setHasConfirmed}
            setSelectedNum={setSelectedNum}
          />
        )}
      </Card>
    </View>
  );
};
