import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { Form, Card, Button, Container } from 'react-bulma-components';


function CreateReview({isAuth}) { 
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const postsCollectionRef = collection(db, "bobaReviews");
  let navigate = useNavigate();
  const createReview = async () => {
    await addDoc(postsCollectionRef, {
      rating,
      comment,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/review");
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
            <h1>ADD A REVIEW TO YOUR BOBA</h1>
            <h2>Drink: {localStorage.getItem('drinkName')}</h2>
            <h2>Sugar Level: {localStorage.getItem('sugarLevel')} %, Ice Level{localStorage.getItem('iceLevel')} %</h2>
            <p>&#128512;</p>
            <form>
              <Form.Field>
                <Form.Control>
                <Form.Label>Rating</Form.Label>
                <Form.Input type="text" placeholder="Select rating" onChange={(event) => {setRating(event.target.value);}}></Form.Input>
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Control>
                <Form.Label>Leave a comment for your drink</Form.Label>
                <Form.Input type="text" placeholder="Type your comment here" onChange={(event) => {setComment(event.target.value);}}></Form.Input>
                </Form.Control>
              </Form.Field>
            </form>
          </Card.Content>
          <Button onClick={createReview}>SUBMIT</Button>
        </Card>
        </Container>
      
    </div>
);
}

export default CreateReview;