const Courses = ({currentPage, setCurrentPage,isLoggedIn,setIsLoggedIn}) => {
  const handleButtonClick = (page) => {
    if (isLoggedIn) {
        setCurrentPage(page);
    } else {
        setCurrentPage("SignupLogin");
    }
};

  return (<div>
    <div class="card text-center  border border-primary mt-4">
    <div class="card-header">
        Grade 1 
    </div>
    <div class="card-body">
        <h5 class="card-title">Math - english -history</h5>
        <p class="card-text">blah blah blah about us and the quizes</p>
        <button onClick={() => handleButtonClick('SingleCourse')} class="btn btn-primary">Begin Learning</button>
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
        <button onClick={() => handleButtonClick('SingleCourse')} class="btn btn-primary">Begin Learning</button>
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
        <button onClick={() => handleButtonClick('SingleCourse')} class="btn btn-primary">Begin Learning</button>
    </div>
    <div class="card-footer text-muted"></div>
</div></div>
  );
}
export default Courses;