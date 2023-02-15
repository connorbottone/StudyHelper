import { useQuery } from '@apollo/client';
import { QUERY_QUIZS } from '../utils/queries';
import { Link } from 'react-router-dom';
const Grade3 = () => {
  const { loading, data } = useQuery(QUERY_QUIZS, {
    variables: { gradeLevel: 3 },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const { quizs } = data;

  return (
    <div>
      <h1>Grade 3</h1>
      {quizs.map((quiz) => (
        <div key={quiz._id} className="card text-center border border-primary mt-4">
          <div className="card-header">{quiz.quizAuthor}</div>
          <div className="card-body">
            <h5 className="card-title">{quiz.quizTitle}</h5>
            <p className="card-text">Blah blah blah about us and the quizes</p>
            <Link className="btn btn-lg btn-info m-2" to={`/Quiz/${quiz._id}`}>
                Begin Quiz
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grade3;