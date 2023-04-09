import React from 'react';
import { StyleSheet, View } from 'react-native';
import MyMap from './MyMap';

export default function App() {
  const location = { latitude: 37.78825, longitude: -122.4324 };

  return (
    <View style={styles.container}>
      <MyMap latitude={location.latitude} longitude={location.longitude} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});