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
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"></input>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"></input>
  </div>
  <div class="col-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="John@test.com"></input>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="Apartment, studio, or floor"></input>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"></input>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"></input>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"></input>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
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
