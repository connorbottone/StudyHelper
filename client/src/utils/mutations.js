import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_QUIZ = gql`
  mutation addQuiz($quizTitle: String!, $gradeLevel: Int!) {
    addQuiz(quizTitle: $quizTitle) {
      _id
      quizTitle
      quizAuthor
      createdAt
    }
  }
`;

export const ADD_QUESTION = gql`
  mutation addQuestion($quizId: ID!, $questionText: String!) {
    addQuestion(quizId: $quizId, question: $question) {
      _id
      quizTitle
      quizAuthor
      createdAt
      questions {
        _id
        question
        createdAt
      }
    }
  }
`;

export const ADD_ANSWER = gql`
  mutation addAnswer($questionId: ID!, $answer: String!, $correct: Boolean!) {
    addAnswer(questionId: $questionId, answer: $answer, correct: $correct) {
      _id
      quizTitle
      quizAuthor
      createdAt
      questions {
        _id
        question
        createdAt
        answers {
          _id
          answer
          correct
          createdAt
        }
      }
    }
  }
`;

export const REMOVE_QUIZ = gql`
  mutation removeQuiz($quizId: ID!) {
    removeQuiz(quizId: $quizId) {
      _id
      quizTitle
      quizAuthor
      createdAt
    }
  }
`;