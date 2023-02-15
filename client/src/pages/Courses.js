import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import QuizSearch from "../components/searchbar.js";
const Courses = () => {
    
  
    return (
       <div className="container">
        {Auth.loggedIn() ? (
            <>
    <div>
    <QuizSearch />
      <div class="card text-center  border border-primary mt-4">
      <div class="card-header">
          Grade 1 
      </div>
      <div class="card-body">
          <h5 class="card-title">Math - english -history</h5>
          <p class="card-text">blah blah blah about us and the quizes</p>
          <Link className="btn btn-lg btn-info m-2" to="/Grade1">
                Quizes
              </Link>
      </div>
      <div class="card-footer text-muted"></div>
  </div>
  <div class="card text-center  border border-primary mt-4">
      <div class="card-header">
          Grade 2 
      </div>
      <div class="card-body">
          <h5 class="card-title">Math - english -history</h5>
          <p class="card-text">blah blah blah about us and the quizes</p>
          <Link className="btn btn-lg btn-info m-2" to="/Grade2">
                Quizes
              </Link>
      </div>
      <div class="card-footer text-muted"></div>
  </div>
  <div class="card text-center  border border-primary mt-4">
      <div class="card-header">
          Grade 3 
      </div>
      <div class="card-body">
          <h5 class="card-title">Math - english -history</h5>
          <p class="card-text">blah blah blah about us and the quizes</p>
          <Link className="btn btn-lg btn-info m-2" to="/Grade3">
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
      <div class="card-header">
          Grade 1 
      </div>
      <div class="card-body">
          <h5 class="card-title">Math - english -history</h5>
          <p class="card-text">blah blah blah about us and the quizes</p>
          
      </div>
      <div class="card-footer text-muted"></div>
  </div>
  <div class="card text-center  border border-primary mt-4">
      <div class="card-header">
          Grade 2 
      </div>
      <div class="card-body">
          <h5 class="card-title">Math - english -history</h5>
          <p class="card-text">blah blah blah about us and the quizes</p>
         
      </div>
      <div class="card-footer text-muted"></div>
  </div>
  <div class="card text-center  border border-primary mt-4">
      <div class="card-header">
          Grade 3 
      </div>
      <div class="card-body">
          <h5 class="card-title">Math - english -history</h5>
          <p class="card-text">blah blah blah about us and the quizes</p>
          
      </div>
      <div class="card-footer text-muted"></div>
  </div></div>
    )
  }
  </div>
    );
};
  export default Courses;