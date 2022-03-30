import React from "react"; 
import './App.css';
import 'bulma/css/bulma.min.css';
import { Button, Navbar, Section } from 'react-bulma-components';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Home from './pages/Home';
import Journal from './pages/Journal';
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

import { BrowserRouter as Router, Routes, Route, Link}
    from 'react-router-dom';

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("http://localhost:9000/testapi")
  //     .then((res) => res.text())
  //     .then((res) => this.setState({ apiResponse: res }))
  //     .then((data) => setData(data.message));
  // }, []);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <div class="header-wrapper">
        <Header />
      </div>
      
        <Routes>
            <Route exact path='/' element = {<Home />} />
            <Route path='/Journal' element={<Journal />} />
            <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        </Routes>

      <Footer/>
    </Router>
  );
}



export default App;

