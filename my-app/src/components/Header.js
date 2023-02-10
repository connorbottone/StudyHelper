
import React, { useState } from 'react';

const page = ["Courses", "SingleCourse", "Homepage", "CreateQuiz", "SignupLogin"];

const Header = ({ currentPage, setCurrentPage, isLoggedIn,setIsLoggedIn}) => {
    

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return ( 
        <div className="header">
        <nav className="navbar bg-body-tertiary navbar-expand">
          <div className="container-fluid">
            <ul className="navbar-nav">
              {page.map((page) => (
                <li className="nav-item">
                  <div 
                    id="nav-page"
                    className={`nav-link ${currentPage === page ? "active" : ""}`}
                    onClick={() => {
                      if (page === "SignupLogin" && isLoggedIn) {
                        handleLogout();
                      }
                      else if (page === "SignupLogin") {
                        setIsLoggedIn(true); //this needs to be implementd into the sign up form here to test it
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
          </div>
        </nav>
      </div>
);
};
      
export default Header;
//   <div className="header">
//             <div className="nav">
//                 {page.map((page) => (
//                     <div 
//                         id="nav-page"
//                         className={currentPage === page ? "navActive" : "nav"}
//                         onClick={() => {
//                             if (page === "SignupLogin" && isLoggedIn) {
//                                 handleLogout();
//                             }
//                            else if (page === "SignupLogin") {
//                                 setIsLoggedIn(true); //this needs to be implementd into the sign up form here to test it
//                             } else {
//                                 setCurrentPage(page);
//                             }
//                         }}
//                     >
//                         {page === "SignupLogin" && isLoggedIn
//                             ? "Logout"
//                             : page}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
