const db = require('../config/connection');
const { User, Quiz} = require('../models');
const userSeeds = require('./userSeeds.json');

const quizSeeds = require('./quizseeds.json');

db.once('open', async () => {
  try {
   
    await User.deleteMany({});
    await Quiz.deleteMany({});

await Quiz.create(quizSeeds);
    await User.create(userSeeds);

    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
