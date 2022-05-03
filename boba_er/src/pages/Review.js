import React, { useState, useEffect } from "react";
import { getDocs, addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { Columns, Card, Container } from 'react-bulma-components';
import loc from '../img/Location.png';
import dri from '../img/Cup.png';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"

  
const Review = (isAuth) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "bobaReviews");
  let navigate = useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  },[]);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (

    <div>
      <div class='primary-background journal'>
        <Container>
          <Columns>
          <Columns.Column className="is-two-thirds" >
          <Card class="box">
                    <Columns>

                      <Columns.Column className="is-3 boba-card">
                        <p>REVIEW</p>
                        <p>COMMENT</p>
                      </Columns.Column>
                      <Columns.Column className="boba-card">
                        <p><img width="16" height="16" src={loc}></img> Sample</p>
                        <p><img width="16" height="16" src={dri}></img> Sample comment</p>
                      </Columns.Column>
                    </Columns>
                  </Card>
          {postLists.map((post) => {
              return (
                
                  <Card class="box">
                    <Columns>

                      <Columns.Column className="is-3">
                        <p>REVIEW</p>
                        <p>COMMENT</p>
                      </Columns.Column>
                      <Columns.Column>
                        <p><img width="16" height="16" src={loc}></img> {post.rating}</p>
                        <p><img width="16" height="16" src={dri}></img> {post.comment}</p>
                      </Columns.Column>
                    </Columns>
                  </Card>
                )
              })}
            </Columns.Column>
            <Columns.Column>
              <DatePicker inline></DatePicker>
            </Columns.Column>
          </Columns>
        </Container>
      </div>
    </div>


  );
};
  
export default Review;