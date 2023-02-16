import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';


import Header from './components/Header';
import Footer from './components/Footer';
import Courses from './pages/Courses';
import CreateQuiz from './pages/CreateQuiz';
import Grade1 from './pages/Grade1';
import Grade2 from './pages/Grade2';
import Grade3 from './pages/Grade3';
import Contact from './pages/Email';
import Quiz from './pages/Quiz';
import'./background.css';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
      
      
          <div className="container" id="stars">
          <div class='ripple-background'>
  <div class='circle xxlarge shade1'></div>
  <div class='circle xlarge shade2'></div>
  <div class='circle large shade3'></div>
  <div class='circle mediun shade4'></div>
  <div class='circle small shade5'></div>
</div>
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/signup"
                element={<Signup />}
              />
             
              
              <Route 
                path="/Courses"
                element={<Courses />}
              />
               <Route 
                path="/CreateQuiz"
                element={<CreateQuiz />}
              />
              <Route 
                path="/Grade1"
                element={<Grade1 />}
              />
              <Route 
                path="/Grade2"
                element={<Grade2 />}
              />
              <Route 
                path="/Grade3"
                element={<Grade3 />}
              />
              <Route 
                path="/Contact"
                element={<Contact />}
              />
              <Route 
                path="/Quiz/:quizId"
                element={<Quiz />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
