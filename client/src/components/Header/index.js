import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../../../my-app/utils/auth';

const page = ["Courses", "SingleCourse", "Homepage", "CreateQuiz", "SignupLogin"];

const Header = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Study Helper</h1>
          </Link>
          <p className="m-0">Learning made fun.</p>
        </div>
        <nav>
          <ul className="navbar-nav">
            {page.map((page) => (
              <li className="nav-item">
                <div
                  id="nav-page"
                  className={`nav-link ${
                    currentPage === page ? "active" : ""
                  }`}
                  onClick={() => {
                    if (page === "SignupLogin" && isLoggedIn) {
                      handleLogout();
                    } else if (page === "SignupLogin") {
                      setIsLoggedIn(true);
                    } else {
                      setCurrentPage(page);
                    }
                  }}
                >
                  {page === "SignupLogin" && isLoggedIn
                    ? "Logout"
                    : page}
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
