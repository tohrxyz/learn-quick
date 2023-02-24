import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function (request, response) {
  if(!configuration.apiKey){
    response.status(500).json({
      error:{
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const textInput = request.body.textInput || '';
  if(textInput.trim().lenght === 0){
    response.status(400).json({
      error: {
        message: "Please enter a valid animal",
      }
    });
    return;
  }

  try{
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(textInput),
      //temperature: 0.6,
    });
    response.status(200).json({ result: completion.data.choices[0].text });
  } 
  
  catch(error){
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(textInput){
  return `Summarize this text into bulletpoints:
  
  ${textInput}`
}