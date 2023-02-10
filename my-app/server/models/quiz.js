const { Schema, model } = require('mongoose');

const quizSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    questions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Question',
        },
    ],
    answers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Answer',
        },
    ],
});

const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;