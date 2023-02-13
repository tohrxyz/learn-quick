import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.row}>
        <Button title="Subtract" onPress={decreaseCount} />
        <Button title="Reset" onPress={resetCount} />
        <Button title="Add" onPress={increaseCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '80%',
  },
  count: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  }
});


