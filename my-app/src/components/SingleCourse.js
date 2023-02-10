const SingleCourse = ({currentPage, setCurrentPage}) => {
    return (
        
            <div class="card text-center  border border-primary mt-4">
    <div class="card-header">
        English
    </div>
    <div class="card-body">
        <h5 class="card-title"> english quiz</h5>
        <p class="card-text">blah blah blah about us and the quizes</p>
        <button onClick={()=> setCurrentPage('SingleQuiz')} class="btn btn-primary">Begin Learning</button>
    </div>
        </div>
    );
}
export default SingleCourse;