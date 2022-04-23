import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { Form, Card, Button, Container, Icon, Columns } from 'react-bulma-components';
import Cooling from '../img/Cooling.png';

function CreatePost({ isAuth }) {
  const [bobaStore, setBobaStore] = useState("");
  const [drinkName, setDrinkName] = useState("");
  const [sugarLevel, setSugarLevel] = useState("");
  const [iceLevel, setIceLevel] = useState("");
  const [topping, setTopping] = useState("");

  const postsCollectionRef = collection(db, "bobaPosts");
  let navigate = useNavigate();

  // const createPost = async () => {
  //   await addDoc(postsCollectionRef, {
  //     title,
  //     postText,
  //     author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
  //   });
  //   navigate("/");
  // };
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      bobaStore,
      drinkName,
      sugarLevel,
      iceLevel,
      topping,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/Journal");
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
                  <Form.Input
                    type="text"
                    placeholder="TYPE IN THE BOBA TEA STORE"
                    onChange={(event) => {
                      setBobaStore(event.target.value);
                    }} >

                  </Form.Input>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Control>
                  <Form.Label>What drink did you get?</Form.Label>
                  <Form.Input
                    type="text"
                    placeholder="TYPE IN YOUR DRINK"
                    onChange={(event) => {
                      setDrinkName(event.target.value);
                    }} ></Form.Input>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Control>
                  <Form.Label>What sugar & ice level did you get? </Form.Label>
                  <Columns>
                    <Columns.Column>
                      <Form.Input
                        type="text"
                        placeholder="SUGAR LEVEL"
                        onChange={(event) => {
                          setSugarLevel(event.target.value);
                        }} >
                      </Form.Input></Columns.Column>
                    <Columns.Column><Form.Input type="text" placeholder="ICE LEVEL" onChange={(event) => {
                      setIceLevel(event.target.value);
                    }} ></Form.Input></Columns.Column>
                  </Columns>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Control>
                  <Form.Label>Did you get any toppings? (Optional)</Form.Label>
                  <Form.Input type="text" placeholder="TYPE TO ADD YOUR TOPPING(S), SEPARATED BY ','"

                    onChange={(event) => {
                      setTopping(event.target.value);
                    }}

                  ></Form.Input>
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
          <Button onClick={createPost}>Submit</Button>

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