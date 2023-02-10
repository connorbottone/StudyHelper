
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
            <div class="card text-center  border border-primary mt-4">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Explore content</h5>
                    <p class="card-text">blah blah blah about us and the quizes</p>
                    <button onClick={() => handleButtonClick('Courses')} class="btn btn-primary">Explore content</button>
                </div>
                <div class="card-footer text-muted"></div>
            </div>
            <div class="card text-center border border-primary mt-5">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Make a quiz</h5>
                    <p class="card-text">Talk about creating a teacher acount and making your own quizes</p>
                    <button onClick={() => handleButtonClick('CreateQuiz')} class="btn btn-primary">Make a quiz</button>
                </div>
                <div class="card-footer text-muted"></div>
            </div>
        </div>

    
       
// <div className="homepage">
    //     <h1>Homepage</h1>
    //  <p>blah blah blah about us and the quizes </p>
    //      <button onClick={() => handleButtonClick('Courses')}>
    //          Explore content
    //      </button>
    //      <p>Talk about creating a teacher acount and making your own quizes</p>
    //      <button onClick={() => handleButtonClick('CreateQuiz')}>
    //          Make a quiz
    //      </button> </div>
       
    );
};

export default Homepage; 
//         <div classname="card" style="width: 18rem;">
//   <div classname="card-body"></div>
//   <h5 classname="card-title">blah blah blah about us and the quizes</h5>
//     <h6 classname="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p classname="card-text">more nonsense...........................</p>
//     <button onClick={() => handleButtonClick('Courses')}>
//                  Explore content
//             </button>
   
//   </div>
//   <div classname="card" style="width: 22rem;">
//   <div classname="card-body"></div>
//   <h5 classname="card-title">Talk about creating a teacher acount and making your own quizes</h5>
//     <h6 classname="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p classname="card-text">more nonsense...........................</p>
//     <button onClick={() => handleButtonClick('CreateQuiz')}>
//                  Make a quiz
//            </button>
   
//   </div>
//   </div>