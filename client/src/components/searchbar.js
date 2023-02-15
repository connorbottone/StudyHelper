import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import {QUERY_QUIZSBYTITLE } from '../utils/queries';
import { Link } from 'react-router-dom';

function QuizSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [getQuizs, { loading, data }] = useLazyQuery(QUERY_QUIZSBYTITLE);

  const handleSubmit = (event) => {
    event.preventDefault();
    getQuizs({ variables: { quizTitle: searchTerm } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search for a Quiz:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {data &&
        data.quizsbytitle.map((quiz) => (
          <div key={quiz._id}>
            <h2>{quiz.quizTitle}</h2>
            <p>Grade Level: {quiz.gradeLevel}</p>
            <p>Quiz Author: {quiz.quizAuthor}</p>
            <Link className="btn btn-lg btn-info m-2" to={`/Quiz/${quiz._id}`}>
                Begin Quiz
              </Link>
          </div>

        ))}
    </div>
  );
}
export default QuizSearch;