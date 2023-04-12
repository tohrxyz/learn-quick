import { StyleSheet } from "react-native";
import * as Font from 'expo-font';

const fontRegular = require('../assets/fonts/PTSerif-Regular.ttf');
const fontBold = require('../assets/fonts/PTSerif-Bold.ttf');

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
    fontFamily: 'fontBold'
  },
  description:{
    marginTop: 50,
    fontSize: 35,
    maxWidth: 300,
    textAlign: 'center',
    // marginLeft: -50,
    fontWeight: 'bold',
    fontFamily: 'fontRegular'
  },
  textInput:{
    color: 'black',
    fontSize: 18,
    fontFamily: 'fontRegular'
  },
  textInputContainer:{
    borderWidth: 3,
    borderColor: '#0277bd',
    borderRadius: 10,
    marginTop: 0,
    width: 350,
    paddingHorizontal: 20,
    paddingVertical: 15,
    maxHeight: 400,
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
    fontFamily: 'fontRegular'
  },
  resultContainer:{
    marginTop: 50,
    // borderWidth: 3,
    // borderColor: '#0277bd',
    width: 350,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 15,
    fontFamily: 'fontRegular'
  },
  resultText:{
    fontSize: 18,
    fontFamily: 'fontRegular'
  },
  btnInputClear:{
    marginLeft: 300,
    marginBottom: -30,
    fontFamily: 'fontRegular'
  },
  spacer:{
    marginVertical: 30,
  },
  btnPaste:{
    marginTop: 50,
    marginLeft: -300,
    fontFamily: 'fontRegular'
  }
});

async function loadFonts() {
  await Font.loadAsync({
    'fontRegular': fontRegular,
    'fontBold': fontBold,
  });
}

export { styles, loadFonts };
