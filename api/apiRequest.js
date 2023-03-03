import { Configuration, OpenAIApi } from "openai";
const config = require("../components/config");

// function that handles API request
export default async function onSubmit(value, setResult) {

  try {

    // creates new configuration with user defined api key
    const configuration = new Configuration({
      apiKey: config.OPENAI_API_KEY, //from ./components/config.js
    });

    const openai = new OpenAIApi(configuration);

    // api request response with parameters
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePromptFromInput(value.trimEnd()),
      temperature: 0,
      max_tokens: 256,

    });

    // returned response converted to string
    const txt = response.data.choices[0].text;
    
    // insert '\n\ before every '#'
    const prettyString = txt.trimStart().replace(/#/g, "\n-");

    // sets API response into variable that gets displayed into result field
    setResult(prettyString.trimStart());
    
  } catch(error) {
    // Consider implementing your own error handling logic here
    console.error(error);
    alert(error.message);
  }
};

// function that creates a prompt
function generatePromptFromInput(input){
  return `Summarize this text into bulletpoints, but every bulletpoint MUST start with '#':

  ${input}`
};