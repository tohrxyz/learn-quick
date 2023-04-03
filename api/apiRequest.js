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

    // make an api request
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: generatePromptFromInput(value)}],
    });

    // returned response converted to string
    const txt = completion.data.choices[0].message.content;
    
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

  ${input}. Respond in language that you I wrote this text, this is important to recognize language and use it for your response.`
};
