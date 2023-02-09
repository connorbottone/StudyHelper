
import React, { useState } from 'react';
const Homepage = ({currentPage, setCurrentPage,isLoggedIn,setIsLoggedIn}) => {
    

    const handleButtonClick = (page) => {
        if (isLoggedIn) {
            setCurrentPage(page);
        } else {
            setCurrentPage("SignupLogin");
        }
    };

    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <p>blah blah blah about us and the quizes </p>
            <button onClick={() => handleButtonClick('Courses')}>
                Explore content
            </button>
            <p>Talk about creating a teacher acount and making your own quizes</p>
            <button onClick={() => handleButtonClick('CreateQuiz')}>
                Make a quiz
            </button>
        </div>
    );
};

export default Homepage;