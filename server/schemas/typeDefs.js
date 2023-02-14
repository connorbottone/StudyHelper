const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Quiz {
    _id: ID
    quizTitle: String
    quizAuthor: String
    questions: [Question]
    answers: [Answer]
    createdAt: String
  }

  type Question {
    _id: ID
    questionText: String
    answers: [Answer]
    createdAt: String
  }

  type Answer {
    _id: ID
    answerText: String
    correct: Boolean
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    quizs(gradeLevel: Int!): [Quiz]
    quiz(quizId: ID!): Quiz
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeQuiz(quizId: ID!): Quiz
    addQuiz(quizTitle: String!, gradeLevel: Int!): Quiz
    addQuestion(quizId: ID!, questionText: String!): Quiz
    addAnswer(questionId: ID!, answerText: String!, correct: Boolean!): Quiz
  }
`;

module.exports = typeDefs;
