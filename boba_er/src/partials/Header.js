import React from "react"; 
import 'bulma/css/bulma.min.css';
import logo from '../img/bobaer-logo.svg';
import { Button, Navbar, Section } from 'react-bulma-components';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";


function Header(){
    const [isActive, setisActive] = React.useState(false);
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

    const signUserOut = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      });
    };

    return (
        <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            <img 
              src={logo} width="50" height="50"
              alt="BOBAER: a Boba Tea Journal"
            />
          </Navbar.Item>
          <a
            onClick={() => {
              setisActive(!isActive)
              }} 
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu" aria-expanded="false" data-target="navbarMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
          </a>
        </Navbar.Brand>

        <div id="navbarMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <Navbar.Container>
            <Navbar.Item href="Journal">JOURNAL</Navbar.Item>
            <Navbar.Item href="Review">REVIEW</Navbar.Item>
            <Navbar.Item href="Blogs">ABOUT</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container class="navbar-end">
              <Navbar.Item>
              {!isAuth ? (
                <Link to="Login">
                <Button color="is-light">LOG IN OR SIGN UP</Button>
                </Link>
              ) : (
                <Button color="is-light"onClick={signUserOut}>Log Out</Button>
              )}
              </Navbar.Item>
          </Navbar.Container>
        </div>
      </Navbar>
    );
};

export default Header;