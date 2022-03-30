import React from "react"; 
import logo from './bobaer-logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import { Button, Navbar, Section } from 'react-bulma-components';
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
  
        <Navbar>
        <Navbar.Brand>
          <img src={logo} width="50" height="50" /></Navbar.Brand>
          <Navbar.Item href="Journal">JOURNAL</Navbar.Item>
          <Navbar.Item href="Recommenation">RECOMMENDATION</Navbar.Item>
          <Navbar.Item href="Blogs">ABOUT</Navbar.Item>
        <Navbar.Container align="right">
          <div>
          <Link to="Login">
          <Button class="is-primary">LOG IN OR SIGN UP</Button>
          </Link>
          </div>
          
        </Navbar.Container>
        </Navbar>
      </div>
      
        <Routes>
            <Route exact path='/' element = {<Home />} />
            <Route path='/Journal' element={<Journal />} />
            <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        </Routes>
    </Router>
  );
}



export default App;

