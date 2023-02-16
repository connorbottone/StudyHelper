import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;
export const QUERY_QUIZS = gql`
query Quizs($gradeLevel: Int!) {
  quizs(gradeLevel: $gradeLevel) {
    quizAuthor
    quizTitle
   
    _id
  }
}
`;
export const QUERY_QUIZ = gql`
query Quiz($quizId: ID!) {
  quiz(quizId: $quizId) {
    quizTitle
    questions {
      question
      answers {
        answer
        correct
      }
    }
  }
}
`;
export const QUERY_QUIZSBYTITLE = gql`
query Quizsbytitle($quizTitle: String!) {
  quizsbytitle(quizTitle: $quizTitle) {
    gradeLevel
    quizTitle
    _id
  }
}
`;





