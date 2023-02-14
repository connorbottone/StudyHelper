const db = require('../config/connection');
const { User, Quiz } = require('../models');
const userSeeds = require('./userSeeds.json');
const quizSeeds = require('./quizseeds.json');

db.once('open', async () => {
  try {
    await Quiz.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Quiz.create(quizSeeds);
    // for (let i = 0; i < quizSeeds.length; i++) {
    //   const { _id, quizAuthor } = await Quiz.create(quizSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: quizAuthor },
    //     {
    //       $addToSet: {
    //         quiz: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
