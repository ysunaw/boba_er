import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { Container, Button, Card, Form } from 'react-bulma-components';


const UserInfo = (Auth) => {
    const auth = getAuth();
    const user = auth.currentUser;
    // get user display name and other information
    const [currentUser, setCurrentUser] = useState();
    const [displayName, setDisplayName] = useState("");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
            const uid = user.uid;
    } else {
      // User is signed out
      // ...
    }
  });
    // sign out function 
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

        
    const signUserOut = () => {
      signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/login";
      });
    };



  return (

    <div class='primary-background'>
    <Container>
      <Card class="box is-centered section">
      
        <Card.Content>
        <h1>User Profile</h1>  
        <p>Welcome, {currentUser && currentUser.displayName} </p>
        <form>
        <Form.Field>
                <Form.Control>
                  <Form.Label>Name</Form.Label>
                  <Form.Input
                    type="text"
                    placeholder={currentUser && currentUser.displayName} />
                </Form.Control>
                <Form.Control>
                  <Form.Label>Email</Form.Label>
                  <Form.Input
                    type="text"
                    placeholder={currentUser && currentUser.email} />
                </Form.Control>

                <Button>UPDATE PROFILE</Button>
              </Form.Field>
        </form>
        <Button color="is-light"onClick={signUserOut}>LOG OUT</Button>
        </Card.Content>
      </Card>
     
    </Container>
    </div>


  );
};
  
export default UserInfo;