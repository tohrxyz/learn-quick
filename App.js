import React, { useState } from 'react';
import { View, Text, Button , TextInput} from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {

  const [value, onChangeText] = useState('Placeholder')
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Learn-Quick</Text>
          <Text style={styles.description}>Enter text to be shortened into bullet points:</Text>
          <View style={styles.textInputContainer}>
              <TextInput
                editable
                multiline
                numberOfLines={4}
                //maxLenght
                onChangeText={text => onChangeText(text)}
                value = {value}
                style={styles.textInput}
              /> 
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // marginTop: 50,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0277bd',
  },
  description:{
    marginTop: 150,
    fontSize: 25,
    maxWidth: 300,
    // color: '#bdbdbd'
    // marginLeft: -50,
  },
  textInput:{
    color: 'black',
    fontSize: 18,
  },
  textInputContainer:{
    borderWidth: 3,
    borderColor: '#0277bd',
    borderRadius: 10,
    marginTop: 30,
    width: 350,
    paddingHorizontal: 20,
    paddingVertical: 15,
    minHeight: 150,
  },
  contentContainer:{
    paddingHorizontal: 20,
    paddingVertical: 15,
  }
});


