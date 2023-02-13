const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const quizSchema = new Schema({
  quizTitle: {
    type: String,
    required: 'Quiz title is required!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  gradeLevel: {
    type: Number,
    required: 'Grade level is required!',
    min: 1,
    max: 12,
  },
  quizAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      answers: [
        {
          answer: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          correct: {
            type: Boolean,
            required: true,
          },
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;
