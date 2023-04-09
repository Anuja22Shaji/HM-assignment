import React from 'react';
import { View, Text } from 'react-native';
import generatePassword from './generatePassword';

export default function App() {
  const password = generatePassword(10, 'medium'); // generate a 10-character password with medium complexity
  return (
    <View>
      <Text>Your password is: {password}</Text>
    </View>
  );
}