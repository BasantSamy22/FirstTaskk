import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.inputbox}>
          <Text style={styles.text1}>Enter your guess between 0 and 99:</Text>
          <View style={styles.viewbox}>
            <TextInput placeholder='Enter your guess' style={styles.input}></TextInput>
            <button title='firstButton' style={styles.button1}><Text>CHECK</Text></button>
          </View>
        </View>
      </View>
      <View style={styles.box2}>
        <Text style={styles.text2}>Your guesses:</Text>
      </View>
      <View style={styles.box3}>
        <Text style={styles.text3}>Lower or higher?</Text>
      </View>
      <View style={styles.box4}>
        <button title='secondbutton' style={styles.button2}><Text>Reset</Text></button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
  inputbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  box1: {
    backgroundColor: '#FF00FF',
    flex: 1,
    marginVertical: 10,
    padding: 10,
  },
  box2: {
    backgroundColor: '#00FFFF',
    marginHorizontal: 10,
    padding: 10,
  },
  box3: {
    backgroundColor: '#FFFF00',
    marginVertical: 10,
    flex: 1,
    padding: 10,
  },
  box4: {
    backgroundColor: '#00FFFF',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text1: {
    textAlign: "center",
    fontSize: 18,
  },
  text2: {
    textAlign: 'center',
    fontSize: 18,
  },
  text3: {
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 50,
  },
  button1: {
    backgroundColor: '#7B68EE',
    padding: 10,
    marginHorizontal: 5,
  },
  button2: {
    backgroundColor: '#7B68EE',
    padding: 10,
  },
  input: {
    width: '50%',
    backgroundColor: '#42e9f5',
    color: '#efefef',
    borderWidth: 1,
    borderColor: '#777',
    marginVertical: 10,
    paddingVertical: 3,
    paddingLeft: 5,
  },
});
