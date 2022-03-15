const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const userProfile = { 
  userName: '', 
  activity: '', 
  music: '',
  mealTime: '',
  food: '',
  sport: '',
  superpower: '' 
};

const questions = [
  'What is your name? ',
  'What\'s an activity you like doing? ',
  'What do you listen to while doing that? ',
  'Which meal is your favourite? ',
  'What\'s your favourite thing to eat for that meal? ',
  'Which sport is your absolute favourite? ',
  'What is your superpower? In a few words, tell us what you are amazing at! '
];

for (const question of questions) {
  if (question !== questions[-1]) {
    rl.question(question, (answer) => {
      console.log(`Thanks for your answer: ${answer}!`);
      for (const key in userProfile) {
        userProfile[key] = answer;
      }
      
      // console.log(userProfile);
      rl.close();
    });
  }
}

