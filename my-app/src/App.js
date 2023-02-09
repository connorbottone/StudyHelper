import React, {useState} from 'react';
import {Courses , Homepage,CreateQuiz, SignupLogin, SingleCourse, Header} from '../src/components';

function App() {
  const [currentPage, setCurrentPage] = useState("Homepage");
  return (
   <>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
    <div >{currentPage === "Homepage" && <Homepage setCurrentPage={setCurrentPage} />}
  {currentPage === "SignupLogin" && <SignupLogin />}
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

