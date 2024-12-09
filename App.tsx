import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOff from './assets/off.jpg'
import symbolOn from './assets/on.jpg'

export default function App() {
  const [isActive, setisActive] = useState(false)
  
  function handleSymbol(){
    setisActive((oldValue:boolean) =>{
      return !oldValue
    })
    console.log(isActive)
  }
  const on = "Ligado!";
  const off = "Desligado!";
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>{isActive ? on : off}</Text>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={isActive ? symbolOn : symbolOff}></Image>
      </TouchableOpacity>
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
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
