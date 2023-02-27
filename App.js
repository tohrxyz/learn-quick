import React, { useState } from 'react';
import { View, Text, Button , TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import { Keyboard } from 'react-native';
import styles from './styles/styles';

export default function App() {

  // handles change of text inside TextInput element
  const [value, onChangeText] = useState('');

  // handles display result values
  const [result, setResult] = useState();

  // function that hides keyboard
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }

  // function that clears input
  const clearInput = () => {
    onChangeText('');
  }

  // function that handles API request
  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ textInput: value }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      onChangeText("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
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
              onPress={onSubmit}
            />
          </View>

          {/* response from server -> result */}
          <View style={styles.resultContainer}>
            
            <Text style={styles.resultText}>{result}</Text>
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

