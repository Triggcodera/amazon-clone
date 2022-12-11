import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { Fragment } from 'react';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

    useEffect(() => {
        // will only run once when the app component loads...
    
        auth.onAuthStateChanged((authUser) => {
          console.log("THE USER IS >>> ", authUser);
    
          if (authUser) {
            // the user just logged in / the user was logged in
    
            dispatch({
              type: "SET_USER",
              user: authUser,
            });
          } else {
            // the user is logged out
            dispatch({
              type: "SET_USER",
              user: null,
            });
          }
        });
      }, []);
return (
  <div className="app">
    <Router>
    <Routes>
    <Route path='/' element={
      <Fragment> 
          <Header/> 
          <Home/> 
      </Fragment> } />

      <Route path='/login' element={
        <Fragment> 
            <Login/> 
        </Fragment> } />
      <Route path='/checkout' element={
        <Fragment> 
            <Header/> 
            <Checkout/> 
        </Fragment> } />
      <Route path='/payment' element={
        <Fragment> 
            <Header/> 
            <Payment/> 
        </Fragment> } />
    </Routes>
    </Router>
  </div>
);
}
export default App;