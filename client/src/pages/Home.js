import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';




const Home = () => {


  return (
    <div className="homepage" style={{ display: "flex", flexDirection: "row",height:"80vh" }}>
  <div class="card text-center col-sm-5 border border-primary mt-5 ml-5 ">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body  ">
      <h5 class="card-title">Explore content</h5>
      <p class="card-text">blah blah blah about us and the quizes</p>
      <Link className="btn btn-lg btn-info m-2" to="/Courses">
        Explore content
      </Link>
    </div>
    <div class="card-footer text-muted"></div>
  </div>
  <div class="card text-center col-sm-5 border border-primary mt-5 ml-5 ">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Make a quiz</h5>
      <p class="card-text">Talk about creating a teacher acount and making your own quizes</p>
      <Link className="btn btn-lg btn-info m-2" to="/CreateQuiz">
        CreateQuiz
      </Link>
    </div>
    <div class="card-footer text-muted"></div>
  </div>
</div>

  );
};

export default Home;
