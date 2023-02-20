import React, { useState } from 'react';
import { View, Text, Button , TextInput} from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {

  // handles change of text inside TextInput element
  const [value, onChangeText] = useState('Placeholder')

  // function that hides keyboard
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    // container for everything
    // safeareaview - fixes cover up by iphone notch etc. -> not displayed under it
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
                returnKeyType="done"
                onSubmitEditing={dismissKeyboard}
                style={styles.textInput}
              /> 
          </View>
          
          <View style={styles.buttonSummarizeContainer}>
            <Button
              title="Summarize !" 
              color="white"
              // fontSize={30} -> cant change fontSize for iOS -> solution: create custom button
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
    marginLeft: -50,
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
    alignItems: 'center'
  },
  buttonSummarizeContainer:{
    borderWidth: 2,
    borderColor: '#0277bd',
    borderRadius: 50,
    width: 140,
    backgroundColor: '#0277bd',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});


