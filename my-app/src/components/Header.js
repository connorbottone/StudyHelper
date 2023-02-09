
import React, { useState } from 'react';

const page = ["Courses", "SingleCourse", "Homepage", "SignupLogin", "CreateQuiz"];

const Header = ({ currentPage, setCurrentPage, isLoggedIn,setIsLoggedIn}) => {
    

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="header">
            <div className="nav">
                {page.map((page) => (
                    <div 
                        id="nav-page"
                        className={currentPage === page ? "navActive" : "nav"}
                        onClick={() => {
                            if (page === "SignupLogin") {
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
                ))}
            </div>
        </div>
    );
};

export default Header;
