import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Profile', { name: 'John' });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="View Profile" onPress={handlePress} />
    </View>
  );
};

export default HomeScreen;