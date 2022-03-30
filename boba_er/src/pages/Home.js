import React from "react"; 
import 'bulma/css/bulma.min.css';
import background1 from '../img/background1.png';
import background2 from '../img/background2.jpg';
import background3 from '../img/background3.jpg';

import notebook from '../img/notebook.png';
import chat from '../img/chat.png';
import quality from '../img/quality.png';
import rating from '../img/rating.png';

import { Button, Navbar, Section, Container, Hero } from 'react-bulma-components';
const Home = () => {
    return (

    
    <div className="Home">
      <div className="Main">



            <Section class="fullheight">
            <Hero size="large">
    
            <Hero.Body>
              <Container fluid breakpoint="widescreen" class="hero-image">
                <div class="columns">
                  <div class="column"> 
                 
                    <h1 class="title is-1">
                    Hey Boba lovers:
                    </h1>
                    <h1 class="title is-1">
                    The wait is over. 
                    </h1>
                    <p>Bobaer is here to accompany you in your boba journey. </p>
                    </div>
                </div>
              </Container>
              </Hero.Body>
            </Hero>
              </Section>
            
              <Section>
              <Container>
              <div class="has-text-centered title h1" >
                  <h1 >What's on bobaer?</h1>
                </div>
              <div class="columns has-text-centered">
                
                <div class="column is-4 is-centered">
                  <figure class="image is-64x64 is-inline-block">
                  <img src={notebook}></img>
                  </figure>
                  <h2>Journal</h2>
                  <p>Keep a journal of what boba you drink everyday.</p>
                  </div>
                <div class="column is-4">
                  <figure class="image is-64x64 is-inline-block">
                    <img src={chat}></img>
                  </figure>
                  <h2>Reviews</h2>   
                  <p>Write yours and see others’ reviews on the boba teas. </p>             
                  </div>
                <div class="column is-4">
                <figure class="image is-64x64 is-inline-block">
                    <img src={rating}></img>
                  </figure>
                  <h2>Recommendations</h2>
                  <p>Get recommendations on the best bobas cater to you. </p>
                </div>

              </div>
                
              </Container>
  

            </Section>

            <Section >
            <Hero size="fullheight">
            <Hero.Header />
            <Hero.Body>
              <Container breakpoint="widescreen" size="fullheight" class="primary-background">
                <div class="columns">
                <div class="column is-6">
                  <img src={background3} ></img>
                </div>
                  <div class="column is-6 vertical-center">
                  <figure class="image is-64x64">
                  <img src={notebook}></img>
                  </figure>
                  
                  <h1 class="h1 title primary" >Make every boba tea you drink memorable. </h1>
                  <p>Keep a journal of what boba tea(s) you drink every day, what toppings you got, the sugar and ice level you asked for. Every boba tea is special. </p>  
                    </div>
              </div>
              </Container>
              </Hero.Body>
              <Hero.Footer />
              </Hero> 
            </Section>
          </div>
        </div>


    );
};



export default Home;

