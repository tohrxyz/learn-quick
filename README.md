<h1 align="center">Learn-Quick</h1>

## What's this project about?
It's a smartphone app, that enables you to summarize long text using OpenAI's models into bulletpoints. 

Written in ``React Native`` and currently tested on ``iOS``.

<img src="https://github.com/tohrxyz/learn-quick/blob/master/assets/usage.gif" width="285px">



## How to run it?
1. Clone the repository using ``git clone https://github.com/tohrxyz/learn-quick.git``

2. Go into the folder using ``cd learn-quick``

3. Install npm modules using ``npm install``

4. Create ``config.js`` file in ``/components/`` and put there following code:
  ```
  module.exports = {
    OPENAI_API_KEY: 'put-your-api-key-here'
  };
  ```

5. Run it via Expo Go using ``npx expo start``

## How is it licensed?
This project is developed under MIT [License](https://github.com/tohrxyz/learn-quick/blob/master/License).
