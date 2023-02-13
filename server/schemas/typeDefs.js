const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    role: String
    scores: [Score]
  }

  type Quiz {
    _id: ID
    quizTitle: String
    quizAuthor: String
    quiestions: [question]
    answers: [answer]
    createdAt: String
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, role: String!): Auth
    login(email: String!, password: String!): Auth
    addQuiz(quizTitle: String!, gradeLevel: integer, questions: [question: String!, answers [answer: String!, correct: Boolean!]] ): Quiz
    removeQuiz(quizId: ID!): Quiz
  }
`;

module.exports = typeDefs;
