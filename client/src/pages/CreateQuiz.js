import Auth from '../utils/auth';

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_QUIZ } from '../utils/mutations';
import'../createquiz.css';
const CreateQuiz = ()=> {
  
    const [quizTitle, setQuizTitle] = useState("");
    const [gradeLevel, setGradeLevel] = useState(0);
    const [questions, setQuestions] = useState([{ question: "", answers: [{ answer: "", correct: false }] }]);
  
    const [addQuiz, { loading, error, data }] = useMutation(ADD_QUIZ);
  
    const handleQuestionChange = (event, index) => {
      const newQuestions = [...questions];
      newQuestions[index].question = event.target.value;
      setQuestions(newQuestions);
    };
  
    const handleAnswerChange = (event, questionIndex, answerIndex) => {
      const newQuestions = [...questions];
      newQuestions[questionIndex].answers[answerIndex].answer = event.target.value;
      setQuestions(newQuestions);
    };
  
    const handleCorrectChange = (event, questionIndex, answerIndex) => {
      const newQuestions = [...questions];
      newQuestions[questionIndex].answers[answerIndex].correct = event.target.checked;
      setQuestions(newQuestions);
    };
  
    const addAnswer = (questionIndex) => {
      const newQuestions = [...questions];
      newQuestions[questionIndex].answers.push({ answer: "", correct: false });
      setQuestions(newQuestions);
    };
  
    const addQuestion = () => {
      setQuestions([...questions, { question: "", answers: [{ answer: "", correct: false }] }]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addQuiz({
        variables: {
          quizTitle: quizTitle,
          gradeLevel: gradeLevel,
          questions: questions,
        },
      });
    };
  
    if (loading) return <p>Submitting...</p>;
    if (error) return <p>Error  Please try again</p>;
    if (data) return <p>Quiz created successfully!</p>;
  
    return (
      <div className="sd">
        {Auth.loggedIn() ? (
            <>
      <div id='quizInfo'>
       <p> Begin by giving your Quiz a title</p>
       <p>Next select your intended grade level</p>
       <p>Now you can Begin adding your Questions</p>
         <p>For each question you can add as many answers as you like by clicking the add answer button</p>
            <p>Be sure to check the box next to the correct answer</p>
            <p> To add a new Questions click the add question button</p>
            <p>When you are finished click the Submit button</p>
            </div>
<form onSubmit={handleSubmit}>
      
        
          <input className='input-field'
          placeholder='Quiz Title'
            type="text"
            value={quizTitle}
            onChange={(event) => setQuizTitle(event.target.value)}
          />
        
        <br />
        
          <input className='input-field'
        
            type="number"
            value={gradeLevel}
            onChange={(event) => setGradeLevel (parseInt(event.target.value))}
          />
       
        <br />
        {questions.map((question, questionIndex) => (
          <div key={questionIndex}>
            <label>
              Q {questionIndex + 1}:
              <input className='input-field'
              placeholder="Question"
                type="text"
                value={question.question}
                onChange={(event) => handleQuestionChange(event, questionIndex)}
              />
            </label>
            <br />
            {question.answers.map((answer, answerIndex) => (
              <div key={answerIndex}>
                <label>
                  Answer {answerIndex + 1}:
                  <input className='input-field'
                  placeholder="Answer"
                    type="text"
                    value={answer.answer}
                    onChange={(event) => handleAnswerChange(event, questionIndex, answerIndex)}
                  />
                </label>
                <label>
                  Correct:
                  <input className=" m-2"
                    type="checkbox"
                    checked={answer.correct}
                    onChange={(event) => handleCorrectChange(event, questionIndex, answerIndex)}
                  />
                </label>
                <br />
              </div>
            ))}
            <button id="addAnswer"className="btn btn-lg btn-danger m-2 ml-5" type="button" onClick={() => addAnswer(questionIndex)}> Add Answer </button>
            </div>
        ))}
        <button className="btn btn-lg btn-info m-2 ml-5" type="button" onClick={addQuestion}> Add Question </button>

      <button className="btn btn-lg btn-info m-2" type="submit">Create Quiz</button>
    </form>
      </>
      ) : (
          <div>
<h1>Sigup/Login to Create and Share your quiz today</h1>
<div>
<div class="dot">CREATE</div>
<div class="dot">SHARE</div>
<div class="dot">LEARN</div>
<div class="dot">STUDY</div>
          </div></div>
  )
}
</div>
    );
  };


export default CreateQuiz;