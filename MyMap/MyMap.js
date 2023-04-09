import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MyMap = ({ latitude, longitude, error }) => {
  const [region, setRegion] = useState({
    latitude: latitude || 37.78825,
    longitude: longitude || -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      {latitude && longitude ? (
        <MapView style={styles.map} region={region}>
          <Marker coordinate={{ latitude, longitude }} />
        </MapView>
      ) : (
        <Text>Loading map...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MyMap;