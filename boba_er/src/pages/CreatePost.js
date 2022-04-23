import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { Form, Card, Button, Container, Icon, Columns } from 'react-bulma-components';
import Cooling from '../img/Cooling.png';

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createReview primary-background">

        

        <Container>
        <Card class="box is-centered">

          <Card.Content>
            <h1>ADD A BOBA ENTRY TO YOUR JOURNAL</h1>
            <form>
              <Form.Field>
                <Form.Control class="has-icons-left">
                <Form.Label>Where did you get your boba?</Form.Label>
                <Form.Input type="text" placeholder="TYPE IN THE BOBA TEA STORE"></Form.Input>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Control>
                <Form.Label>What drink did you get?</Form.Label>
                <Form.Input type="text" placeholder="TYPE IN YOUR DRINK"></Form.Input>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Control>
                <Form.Label>What sugar & ice level did you get? </Form.Label>
                <Columns>
                  <Columns.Column><Form.Input type="text" placeholder="SUGAR LEVEL"></Form.Input></Columns.Column>
                  <Columns.Column><Form.Input type="text" placeholder="ICE LEVEL"></Form.Input></Columns.Column> 
                </Columns>
                </Form.Control>
              </Form.Field>
                <Form.Field>
                <Form.Control>
                <Form.Label>Did you get any toppings? (Optional)</Form.Label>
                <Form.Input type="text" placeholder="TYPE TO ADD YOUR TOPPING(S), SEPARATED BY ','"></Form.Input>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Control class="has-icons-left">
                <Form.Label>Do you want to add a picture? (Optional)</Form.Label>
                <div class="file has-name">
                  <label class="file-label">
                  <input class="file-input" type="file" name="resume"></input>
                  <span class="file-cta">
                    <span class="file-label">
                      Choose a file…
                    </span>
                  </span>
                  <span class="file-name">
                    YOUR BOBA IMAGE 
                  </span>
                </label>
              </div>
                </Form.Control>
              </Form.Field>
             
            </form>
          </Card.Content>
          <Button>Submit</Button>

        </Card>
        </Container>

        {/* <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button> */}
    </div>
  );
}

export default CreatePost;