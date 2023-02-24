import React, { useState } from 'react';
import { View, Text, Button , TextInput} from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Configuration, OpenAIApi } from 'openai';
import styles from './styles/styles';

export default function App() {

  // handles change of text inside TextInput element
  const [value, onChangeText] = useState('')

  // function that hides keyboard
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  return (
    // container for everything
    // safeareaview - fixes cover up by iphone notch etc. -> not displayed under it
    <SafeAreaView style={styles.container}>
 
      <View style={styles.contentContainer}>
        
        <Text style={styles.title}>Learn-Quick</Text>
        
        <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Enter text to be summarized"
              editable
              multiline
              numberOfLines={10}
              onChangeText={text => onChangeText(text)}
              value = {value}
              returnKeyType={'done'}
              onSubmitEditing={dismissKeyboard}
              style={styles.textInput}
            /> 
        </View>
        
        <View style={styles.buttonSummarizeContainer}>
          <Button
            title="Summarize !" 
            color="white"
          />
        </View>
      </View>

    </SafeAreaView>
  );
}

