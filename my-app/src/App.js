import React, {useState} from 'react';
import {Courses , Homepage,CreateQuiz, SignupLogin, SingleCourse, Header} from '../src/components';
import SingleQuiz from './components/SingleQuiz';
import  '../src/assets/style.css';
function App() {
  const [currentPage, setCurrentPage] = useState("Homepage");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
   <>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <div >{currentPage === "Homepage" && <Homepage setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
  {currentPage === "SignupLogin" && <SignupLogin />}
  {currentPage === "Courses" && <Courses currentPage={currentPage} setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
  {currentPage === "SingleCourse" && <SingleCourse currentPage={currentPage} setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}
  {currentPage === "CreateQuiz" && <CreateQuiz/>}
  {currentPage === "SingleQuiz" && <SingleQuiz/>}
  </div>
  <br></br>
  {/* <Footer setCurrentPage={setCurrentPage} /> */}
</>
);
}


export default App;

