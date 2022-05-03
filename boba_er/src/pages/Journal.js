import React, { useState, useEffect } from "react";
import { getDocs, addDoc, collection, deleteDoc, doc, query, orderBy, where} from "firebase/firestore";
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
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Journal({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = query(collection(db, "bobaPosts"),orderBy("timestamp", "desc"));
  let navigate = useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  const [startDate, setStartDate] = useState(new Date());
  
  const dbDates = {};
  const existedDates = {};
  let dateInd = 0;
  postLists.map((post) => {
    const postTime = new Date(post.timestamp);
    dbDates[postTime.getFullYear()+'-'+postTime.getMonth()+'-'+postTime.getDate()] = 1;
  })
  const enableDate = (date) => {
    // const day = date.getDate();
    // const month =  date.getMonth();
    // const year = date.getFullYear();
    return date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate() in dbDates;
  };
  const onDateChange = (date) =>{
    setStartDate(date);
    const formatDate = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+'-0';
    document.getElementById(formatDate).scrollIntoView();
  };

  return (
    <div>
      <div class='primary-background journal'>
        <Container>
          <Columns>
          <Columns.Column className="is-two-thirds" >
            {postLists.map((post,idx) => {
              const postTime = new Date(post.timestamp);
              const formatPostTime = postTime.getFullYear()+'-'+postTime.getMonth()+'-'+postTime.getDate();
              if (formatPostTime in existedDates) {
                dateInd++;
              } else {
                existedDates[formatPostTime] = 1;
                dateInd = 0;
              };
              // console.log(formatPostTime+'-'+dateInd);
              return (
                  
                    <Card key={idx} class="box" id={formatPostTime+'-'+dateInd}>
                        <Columns>
                          <Columns.Column className="is-2 date-indicator">
                            <p class="date">{postTime.getDate()}</p>
                            <p class="month">{postTime.toLocaleString('en-US', {month: 'short'})}</p>
                          </Columns.Column>

                          <Columns.Column className="is-2 boba-card">
                            <p>LOCATION</p>
                            <p>DRINK</p>
                            <p>SUGAR</p>
                            <p>ICE</p>
                            <p>REVIEW</p>
                          </Columns.Column>
                          <Columns.Column className="boba-card">
                            <p><img width="16" height="16" src={loc}></img> {post.bobaStore}</p>
                            <p><img width="16" height="16" src={dri}></img> {post.drinkName}</p>
                            <p><img width="16" height="16" src={sug}></img> {post.sugarLevel}</p>
                            <p><img width="16" height="16" src={ice}></img> {post.iceLevel}</p>
                            <p><img width="16" height="16" src={rev}></img> demo review</p>
                          </Columns.Column>
                        </Columns>
                    </Card>

                
              )
            })}
            </Columns.Column>
            <Columns.Column>
            <DatePicker
              todayButton="Today"
              selected={startDate}
              onChange = {onDateChange}
              maxDate={new Date()}
              filterDate={enableDate}
              inline
            />
            </Columns.Column>
          </Columns>
        </Container>
      </div>


    </div>
  );





  // return (
  //   <div class='primary-background journal'>
  //     <Container>
  //     <Columns>
  //       <Columns.Column className="is-two-thirds" >
  //         <Card class="box">
  //           <Columns>
  //             <Columns.Column className="is-2">
  //               <p class="date">13</p>
  //               <p class="month">Mar</p>
  //             </Columns.Column>

  //             <Columns.Column className="is-2">
  //               <p>LOCATION</p>
  //               <p>DRINK</p>
  //               <p>SUGAR</p>
  //               <p>ICE</p>
  //               <p>REVIEW</p>
  //             </Columns.Column>
  //             <Columns.Column>
  //               <p><img width="16" height="16" src={loc}></img> sample location</p>
  //               <p><img width="16" height="16" src={dri}></img> sample drink</p>
  //               <p><img width="16" height="16" src={sug}></img> sample sugar</p>
  //               <p><img width="16" height="16" src={ice}></img> sample ice</p>
  //               <p><img width="16" height="16" src={rev}></img> sample review</p>
  //             </Columns.Column>
  //             </Columns>
  //         </Card>
  //       </Columns.Column>

  //       <Columns.Column>
  //       <DatePicker inline></DatePicker>
  //       </Columns.Column>
  //     </Columns>
  //     </Container>
  //   </div>

  // );
}

export default Journal;