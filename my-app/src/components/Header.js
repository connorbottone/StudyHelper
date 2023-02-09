import React from 'react';



const page = ["Courses", "SingleCourse", "Homepage", "SignupLogin"];

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <div className="header">
           
            <div className="nav">
                {page.map((page) => (
                    
                    <div  id="nav-page"
                        className={currentPage === page ? "navActive" : "nav"}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Header