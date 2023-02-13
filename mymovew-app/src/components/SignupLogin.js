import React, { useState } from "react";

const SignupLogin = ({
  currentPage,
  setCurrentPage,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const handleLogin = (page) => {
    setIsLoggedIn(true);
    setCurrentPage(page);
  };

  return (
    <div class="row g-3">
  <div class="col-md-6">
    <label for="first_name" class="form-label">First Name</label>
    <input type="text" class="form-control" id="first_name"></input>
  </div>
  <div class="col-md-6">
    <label for="last_name" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="last_name"></input>
  </div>
  <div class="col-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="John@test.com"></input>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="Password123"></input>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"></input>
  </div>


  <div class="col-12">
    <button onClick={() => handleLogin("Homepage")} type="submit" class="btn btn-primary">Submit</button>
  </div>
</div>
    
    
    
     /* <div class="row g-3">
       <div class="col-md-6">
         <input
          type="text"
          class="form-control"
          placeholder="First name"
          aria-label="First name"
        ></input>
      </div>
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          placeholder="Last name"
          aria-label="Last name"
        ></input>
      </div>
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          placeholder="Email"
          aria-label="Email"
        ></input>
      </div>
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          placeholder="Password"
          aria-label="Password"
        ></input>
      </div>

      <button onClick={() => handleLogin("Homepage")}>Submit</button>
    </div> */
  );
};

export default SignupLogin;
