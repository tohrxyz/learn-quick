import React, { useState, useEffect } from 'react';
import { View, Text, Button , TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native';
import { Keyboard } from 'react-native';
import "react-native-url-polyfill/auto";
import onSubmit from './api/apiRequest';
import * as Clipboard from 'expo-clipboard';
import { ActivityIndicator } from 'react-native';
import { styles, loadFonts } from './styles/styles';

export default function App() {

  useEffect(() => {
    loadFonts();
  }, []);

  // handles change of text inside TextInput element
  const [value, onChangeText] = useState('');

  // handles display result values
  const [result, setResult] = useState('');

  // handles values for when loading spinner is displayed (true/false)
  const [isLoading, setIsLoading] = useState(false);

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

  // function to handle exported function
  const onSubmitHandler = () => {

    // starts loading spinner before api request
    setIsLoading(true);

    // makes api request, then stops loading spinner
    onSubmit(value, setResult).then(() => {
      setIsLoading(false);
    });
  }

  // function to paste clipboard to input field
  const pasteClipboard = async () => {
    const text = await Clipboard.getStringAsync();
    onChangeText(text);
  };

  return (
    // container for everything
    // safeareaview - fixes cover up by iphone notch etc. -> not displayed under it
    <SafeAreaView style={styles.container}>

      {/* makes all content scrollable */}
      <ScrollView>
        <View style={styles.contentContainer}>
          
          {/* title */}
          <Text style={styles.title}>Learn-Quick</Text>
          
          {/* button that pastes clipboard to input field */}
          <View style={styles.btnPaste}>
            <Button
              title='Paste'
              onPress={pasteClipboard}
            />
          </View>

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

            {/* while its waiting for response from api request there is a loading spinner */}
            {isLoading ? (
              <ActivityIndicator size="small" color='white' />
            ) : (
              
              // when its done, there's regular button
              <Button
                title="Summarize !"
                color="white"
                onPress={onSubmitHandler}
              />
            )}
          </View>

          {/* response from server -> result */}
          <View style={styles.resultContainer}>
            {/* when result is empty put a placeholder there */}
            <Text style={styles.resultText}>{result !== '' ? result : "Summarized text" }</Text>
          </View>

           {/* button that clears the input */}
         <View style={styles.btnInputClear}>
            <Button
                  title='Clear'
                  onPress={clearResult}
            />
          </View>

          {/* this functions as a space on the bottom of screen */}
          <View style={styles.spacer}></View>

        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

