const { gql } = require ( 'apollo-server-express' ) ;

const typeDefs = gql `
    type  User   {
        _id:  ID !
        username:  String !
        email:  String !
        role:  String !
        password:  String !
        scores: [Score]
    }
    type quiz {
        _id:  ID !
        quizName:  String !
        quizQuestions: [quizQuestion]
        quizAnswers: [quizAnswer]
    }
    ` ;
module.exports = typeDefs ;