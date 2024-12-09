
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOff from './assets/off.jpg'
import symbolOn from './assets/on.jpg'

export default function App() {
  
  return (
    <View style={styles.container}>
      <Image source={symbolOn}></Image>
      <Image source={symbolOff}></Image>
      <StatusBar style="auto" />
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
});
