

import React, { useState, useEffect } from "react";
import { getDocs, addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { Columns, Card, Container, Image } from 'react-bulma-components';
import loc from '../img/Location.png';
import rev from '../img/rev.png';
import sug from '../img/Sweetener.png';
import ice from '../img/Cooling.png';
import dri from '../img/Cup.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

function Journal({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postLists, setPostList ] = useState([]);

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const data = await getDocs(postsCollectionRef);
  //     setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getPosts();
  // });

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
    <div class='primary-background journal'>
      <Container>
      <Columns>
        <Columns.Column className="is-two-thirds" >
          <Card class="box">
            <Columns>
              <Columns.Column className="is-2">
                <p class="date">13</p>
                <p class="month">Mar</p>
              </Columns.Column>

              <Columns.Column className="is-2">
                <p>LOCATION</p>
                <p>DRINK</p>
                <p>SUGAR</p>
                <p>ICE</p>
                <p>REVIEW</p>
              </Columns.Column>
              <Columns.Column>
                <p><img width="16" height="16" src={loc}></img> sample location</p>
                <p><img width="16" height="16" src={dri}></img> sample drink</p>
                <p><img width="16" height="16" src={sug}></img> sample sugar</p>
                <p><img width="16" height="16" src={ice}></img> sample ice</p>
                <p><img width="16" height="16" src={rev}></img> sample review</p>
              </Columns.Column>
              </Columns>
          </Card>
        </Columns.Column>

        <Columns.Column>
        <DatePicker inline></DatePicker>
        </Columns.Column>
      </Columns>
      </Container>
      <Container> 
            
        {/* <Columns>
          <Columns.Column className="is-one-fifth">
            <p className="bd-notification is-info">13</p>
            <Columns className="is-mobile">
              <Columns.Column>
              <Card>
              <p class="bd-notification is-info">First nested column</p>

              </Card>
              
              </Columns.Column>
              <Columns.Column>
                <p class="bd-notification is-info">Second nested column</p>
              </Columns.Column>
            </Columns>
            
          </Columns.Column>
          
        </Columns> */}
      </Container>
    </div>
    
  );
}

export default Journal;