const { AuthenticationError } = require('apollo-server-express');
const { User, Quiz } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('Quiz');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('Quiz');
    },
    quizs: async (parent, { gradeLevel }) => {
      const params = gradeLevel ? { gradeLevel } : {};
      return Quiz.find(params)
    },
    quizsbytitle: async (parent, { quizTitle }) => {
      const params = quizTitle ? { quizTitle } : {};
      return Quiz.find(params)
    },
    quiz: async (parent, { quizId }) => {
      return Quiz.findOne({ _id: quizId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('quizs');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addQuiz: async (parent, { quizTitle, gradeLevel, questions, answers }, context) => {
      if (context.user) {
        const quiz = await Quiz.create({
          quizTitle,
          gradeLevel,
          quizAuthor: context.user.username,
          questions,
          answers,
        });

        return quiz;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // addQuestion: async (parent, { quizId, questionText }, context) => {
    //   if (context.user) {
    //     return Quiz.findOneAndUpdate(
    //       { _id: quizId },
    //       {
    //         $addToSet: {
    //           questions: { questionText },
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // addAnswer: async (parent, { quizId, questionId, answerText, correct }, context) => {
    //   if (context.user) {
    //     return Quiz.findOneAndUpdate(
    //       { _id: quizId, questions: { $elemMatch: { _id: questionId } } },
    //       {
    //         $addToSet: {
    //           'questions.$.answers': { answerText, correct },
    //         },
    //       },
    //       {
    //         new: true,
    //         runValidators: true,
    //       }
    //     );
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    removeQuiz: async (parent, { quizId }, context) => {
      if (context.user) {
        const quiz = await Quiz.findOneAndDelete({
          _id: quizId,
          quizAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { quizs: quiz._id } }
        );

        return quiz;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
