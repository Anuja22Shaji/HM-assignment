import React from 'react';
import { FlatList, Text, View } from 'react-native';

const MyList = (props) => {
  const { backgroundColor } = props;

  const items = [
    { title: 'Item 1', description: 'This is the first item.' },
    { title: 'Item 2', description: 'This is the second item.' },
    { title: 'Item 3', description: 'This is the third item.' },
  ];

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: '#fff', padding: 20, marginVertical: 8, marginHorizontal: 16 }}>
      <Text style={{ fontSize: 16 }}>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
      style={{ backgroundColor }}
    />
  );
};

export default MyList;
