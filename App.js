import React, { useState } from 'react';
import { View, Text, Button , TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import { Keyboard } from 'react-native';
import styles from './styles/styles';
import { Configuration, OpenAIApi } from 'openai';
import "react-native-url-polyfill/auto";

const config = require("./components/config");

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

  // function that clears result
  const clearResult = () => {
    setResult('');
  }

  // function that creates a prompt
  function generatePromptFromInput(input){
    return `Summarize this text into bulletpoints, but every bulletpoint MUST start with '#':
  
    ${input}`
  }

  // function that handles API request
  async function onSubmit(event) {
    event.preventDefault();

    try {

      const configuration = new Configuration({
        apiKey: config.OPENAI_API_KEY,
      });

      const openai = new OpenAIApi(configuration);
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePromptFromInput(value.trimEnd()),
        temperature: 0,
        max_tokens: 256,
      });

      const txt = response.data.choices[0].text;
      console.log(txt);
      const prettyString = txt.trimStart().replace(/#/g, "\n-");
      setResult(prettyString.trimStart());
      
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

           {/* button that clears the input */}
         <View style={styles.btnInputClear}>
            <Button
                  title='Clear'
                  onPress={clearResult}
            />
          </View>
          <View style={styles.spacer}></View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

