import React from 'react'

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
import UserContext from './context/UserContext';
import UserProvider from './context/UserContext';
import {Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <UserProvider>
   <div>
      <Router>
          <Routes>
              <Route path="/" element={<Root/>} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/SignUp" exact element={<Signup/>} />
              <Route path="/dashboard" exact element={<Home/>} />
              <Route path="/income" exact element={<Income />} />
              <Route path="/expense" exact element={<Expense />} />
          </Routes>
      </Router>
   </div>

   <Toaster
   toastOptions={{
    className: "",
    style: {
      fontSize:'13px'
    },

   }}
   />

   </UserProvider>
  )
}

export default App;

const Root = () => {
  //checks if token exist
  const isAuthenticated = !!localStorage.getItem("token");
//redirects to dashboard if it exists
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};