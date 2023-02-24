import React, { useState } from 'react';
import { View, Text, Button , TextInput, ScrollView} from 'react-native';
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

  // function that clears input
  const clearInput = () => {
    onChangeText('');
  }

  return (
    // container for everything
    // safeareaview - fixes cover up by iphone notch etc. -> not displayed under it
    <SafeAreaView style={styles.container}>

      {/* makes all content scrollable */}
      <ScrollView>
        <View style={styles.contentContainer}>
          
          {/* title */}
          <Text style={styles.title}>Learn-Quick</Text>
          
          {/* text input field for query */}
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

          {/* button that clears the input */}
          <View style={styles.btnInputClear}>
            <Button
                  title='Clear'
                  onPress={clearInput}
            />
          </View>
          
          {/* button to summarize */}
          <View style={styles.buttonSummarizeContainer}>
            <Button
              title="Summarize !" 
              color="white"
            />
          </View>

          {/* response from server -> result */}
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{value}</Text>
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

