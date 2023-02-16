import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
<div className="container">
  <div className="card1 text-center">
    <a className="login">Sign up</a>
      <div className="inputBox">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  id='user'
                  type="text" 
                  required="required"
                  placeholder="Your username"
                  name="username"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  id='email'
                  placeholder="Your email"
                  required="required"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  id='password'
                  type="text" 
                  required="required"
                  placeholder="******"
                  name = "password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button 
                class="enter">
                Enter
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default Signup;
