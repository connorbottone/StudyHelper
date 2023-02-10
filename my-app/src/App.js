import React, {useState} from 'react';
import {Courses , Homepage,CreateQuiz, SignupLogin, SingleCourse, Header} from '../src/components';

function App() {
  const [currentPage, setCurrentPage] = useState("Homepage");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
   <>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <div >{currentPage === "Homepage" && <Homepage setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
  {currentPage === "SignupLogin" && <SignupLogin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
  {currentPage === "Courses" && <Courses />}
  {currentPage === "SingleCourse" && <SingleCourse/>}
  {currentPage === "CreateQuiz" && <CreateQuiz/>}
  </div>
  <br></br>
  {/* <Footer setCurrentPage={setCurrentPage} /> */}
</>
);
}


export default App;

