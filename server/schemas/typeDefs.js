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
    quiestions: [question]
    answers: [answer]
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
    quizs(gradeLevel!): [Quiz]
    quiz(quizId: ID!): Quiz
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeQuiz(quizId: ID!): Quiz
    addQuiz(quizTitle: String!, gradeLevel: integer!): Quiz
    addQuestion(quizId: ID!, questionText: String!): Quiz
    addAnswer(questionId: ID!, answerText: String!, correct: Boolean!): Quiz
  }
`;

module.exports = typeDefs;
