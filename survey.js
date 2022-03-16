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

rl.question(questions[0], (answer) => {
  console.log(`Nice to meet you ${answer}!`);
  userProfile.userName = answer;
  rl.question(questions[1], (answer) => {
    console.log(`${answer} sounds fun!`);
    userProfile.activity = answer;
    rl.question(questions[2], (answer) => {
      console.log(`I love ${answer}!`);
      userProfile.music = answer;
      rl.question(questions[3], (answer) => {
        console.log(`I find ${answer} to be the best meal too!`);
        userProfile.mealTime = answer;
        rl.question(questions[4], (answer) => {
          console.log(`Tasty ${answer}!`);
          userProfile.food = answer;
          rl.question(questions[5], (answer) => {
            console.log(`${answer}, eh? To each their own...`);
            userProfile.sport = answer;
            rl.question(questions[6], (answer) => {
              console.log(`${answer} is a great superpower!`);
              userProfile.superpower = answer;
              
              console.log(`${userProfile.userName} loves listening to ${userProfile.music} while ${userProfile.activity}, devouring ${userProfile.food} for ${userProfile.mealTime}, prefers ${userProfile.sport} over any sport, and is amazing at ${userProfile.superpower}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});