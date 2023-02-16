import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import QuizSearch from "../components/searchbar.js";
import '../courses.css';
const Courses = () => {
    
  
    return (
       <div className="container">
        {Auth.loggedIn() ? (
            <>
    <div>
    <QuizSearch />
      <div class="card text-center  border border-primary mt-4">
      <div class="courses-card-header">
          Grade 1 
      </div>
      <div class="card-body">
          <h5 class="card-title">📊Math 🎓English 📜History</h5>
          <p class="card-text">Ready to learn?! </p>
          <p class="card-text"></p>
          <Link className="btn btn-lg btn-danger m-2" to="/Grade1">
                Quizes
              </Link>
      </div>
      <div class="card-footer text-muted"></div>
  </div>
  <div class="card text-center  border border-primary mt-4">
      <div class="courses-card-header">
          Grade 2 
      </div>
      <div class="card-body">
          <h5 class="card-title">📊Math 🎓English 📜History</h5>
          <p class="card-text">Get ready to have fun and expand your mind with these engaging quizzes! </p>
          <Link className="btn btn-lg btn-danger m-2" to="/Grade2">
                Quizes
              </Link>
      </div>
      <div class="card-footer text-muted"></div>
  </div>
  <div class="card text-center  border border-primary mt-4">
      <div class="courses-card-header">
          Grade 3 
      </div>
      <div class="card-body">
          <h5 class="card-title">📊Math 🎓English 📜History</h5>
          <p class="card-text">Are you ready to put your knowledge to the test?</p>
          <Link className="btn btn-lg btn-danger m-2" to="/Grade3">
                Quizes
              </Link>
      </div>
      <div class="card-footer text-muted"></div>
  </div></div>
            </>
        ) : (
            <div>
<h1>Sigup/Login to explore Content</h1>

      <div class="card text-center  border border-primary mt-4">
      <div class="card-headers">
          Grade 1 
      </div>
      <div class="card-body">
          <h5 class="card-title">📊Math 🎓English 📜History</h5>
          <p class="card-text">Signup/Login to Explore all content</p>
          
      </div>
      <div class="card-footer text-muted"></div>
  </div>
  <div class="card text-center  border border-primary mt-4">
      <div class="card-headers">
          Grade 2 
      </div>
      <div class="card-body">
          <h5 class="card-title">📊Math 🎓English 📜History</h5>
          <p class="card-text">Signup/Login to Explore all content</p>
         
      </div>
      <div class="card-footer text-muted"></div>
  </div>
  <div class="card text-center  border border-primary mt-4">
      <div class="card-headers">
          Grade 3 
      </div>
      <div class="card-body">
          <h5 class="card-title">📊Math 🎓English 📜History</h5>
          <p class="card-text">Signup/Login to Explore all content</p>
          
      </div>
      <div class="card-footer text-muted"></div>
  </div></div>
    )
  }
  </div>
    );
};
  export default Courses;