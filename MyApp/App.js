import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  MyButton from './MyButton'; 
import  MyList from './MyList'; 



export default function App() {
  const data = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MyButton
        title="Click me"
        color="blue"
        press={() => console.log("Button clicked!")}
      />
     
   
    </View>
 );
 return (
  <View style={styles.container}>
    <MyList data={data} />
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  
  
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
