type Quiz {
    id: ID!
    quizTitle: String!
    gradeLevel: Int!
    quizAuthor: String!
    createdAt: String!
    questions: [Question!]!
  }

  type Question {
    id: ID!
    question: String!
    answers: [Answer!]!
    createdAt: String!
  }

  type Answer {
    id: ID!
    answer: String!
    correct: Boolean!
  }

 