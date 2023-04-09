import React from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = ({ route }) => {
  const { name } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{name}'s Profile</Text>
    </View>
  );
};

export default ProfileScreen;