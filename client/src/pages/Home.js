import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import test from '../images/test.jpg'

const Home = () => {
  return (
    <div className="homepage" style={{ display: "flex", flexDirection: "row", height: "80vh" }}>
      <div className="card text-center col-sm-6 border border-primary mt-5 ml-5 d-flex flex-column">
        <div className="card-header">
          Featured
        </div>
        <div className="card-body flex-grow-1">
          <h5 className="card-title">Explore content</h5>
          <p className="card-text flex-grow-1">
            blah blah blah about us and the quizes
          </p>
          <div className="mt-auto">
           <img  id="homepageimg1"src={test} alt="Your Image" className="profile-pic" /> 
           <Link className="btn btn-lg btn-info m-2" to="/Courses">
              Explore content
            </Link>
          </div>
          
        </div>
        <div className="card-footer text-muted"></div>
      </div>
      <div className="card text-center border border-primary mt-5 ml-5 d-flex flex-column">
      
        <div className="card-header ">
          Featured
        </div> 
        <div className="card-body flex-grow-1">
          <h5 className="card-title">Make a quiz</h5>
          <p className="card-text flex-grow-1">
            Talk about creating a teacher account and making your own quizzes
          </p>
          <div className="mt-auto">
            <Link className="btn btn-lg btn-info m-2" to="/CreateQuiz">
              CreateQuiz
            </Link>
          </div>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </div>
  );
};

export default Home;


