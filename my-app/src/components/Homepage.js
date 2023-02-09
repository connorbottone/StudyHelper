const Homepage = ({currrentPage,setCurrentPage}) => {
  return (
    <div className="homepage">
      <h1>Homepage</h1>
      <p>blah blah blah about us and the quizes </p>
      <button onClick={() => setCurrentPage('Courses')}>Explore content</button>
      <p>Talk about creating a teacher acount and making your own quizes</p>
      <button onClick={()=> setCurrentPage('CreateQuiz')} >Make a quiz</button>
    </div>
  );
}

export default Homepage;