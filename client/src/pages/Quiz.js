import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { QUERY_QUIZ } from '../utils/queries';

const Quiz = () => {
  const { quizId } = useParams();

  const { loading, data } = useQuery(QUERY_QUIZ, {
    variables: { quizId },
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextButtonClick = () => {
    const isCorrect = selectedAnswer === data.quiz.questions[currentQuestion].answers.find(a => a.correct);

    if (isCorrect) {
      setScore(score + 1);
     
    }

    setSelectedAnswer(null);

    if (currentQuestion === data.quiz.questions.length - 1) {
      setShowScore(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const { quizTitle, questions } = data.quiz;

  return (
    <div>
      <h1>{quizTitle}</h1>

      {showScore ? (
        <div>
          <h2>Your score is: {score} out of {questions.length}</h2>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <ul>
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index}>
                <button className="btn btn-lg btn-light m-2" onClick={() => handleAnswerButtonClick(answer)}>
                  {answer.answer}
                </button>
              </li>
              
            ))}
            <Link className="ml-1 m-4" to="/Contact">Click to Report Issue</Link>
          </ul>
          {selectedAnswer && (
            
            <button className="btn btn-lg btn-dark m-2" onClick={handleNextButtonClick}>Next</button>
            
            
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;