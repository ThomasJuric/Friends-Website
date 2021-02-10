import React from 'react';
import './FrontPage.css'
import SuperHero from "./J'Lenns Photos/JiggyOPCollab.png";
import Jolilon from "./J'Lenns Photos/Jojolion.jpg";
import Room from "./J'Lenns Photos/roomDesign.jpg";
import Friends from "./J'Lenns Photos/Gang.jpg";
import Anime from "./J'Lenns Photos/AnimeCollage.jpg";
import {Navbar, Nav, Card} from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const FrontPage = (props) => {
    
return (
  <div>
  <Navbar className="color-nav" variant = "dark" fixed="top">
    <Navbar.Brand>J'Lenn</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Art</Nav.Link>
      <Nav.Link href="/models">Models</Nav.Link>
      <Nav.Link href="/animations">Animations</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar>
  <div className = "myCard">
    <Card className = "mainCard vertical-center horizontal-center mx-auto">
    <Card.Body>
      <Card.Title className = "mx-auto" ><h1>J'Lenn James</h1></Card.Title>
      <Card.Subtitle className="mb-3 subtitle">Art Portfolio</Card.Subtitle>
      <Carousel>
        <div>
            <h3>One-Piece Cosplay</h3>
            <img src ={SuperHero} alt = "One-Piece Cosplay"></img>
        </div>
        <div>
              <h3>Anime Collage</h3>
              <img src ={Anime} alt = "Anime Collage"></img>
        </div>
        <div>
              <h3>Friends</h3>
              <img src ={Friends} alt = "Friends"></img>
        </div>
        <div>
              <h3>Jojolion Poster</h3>
              <img src ={Jolilon} alt = "Jojolion Poster"></img>
        </div>
        <div>
              <h4>Room (One-Point Perspective)</h4>
              <img src ={Room} alt = "Room (One-Point Perspective)"></img>
        </div>
      </Carousel>
      </Card.Body>
      <Card.Footer className = "mx-auto">
            <span>
                Developed By <a href = "https://thomasjuric.com/"><u><b>Thomas Juric</b></u></a> &copy;
            </span>
      </Card.Footer>
    </Card>
  </div>  
  </div>  
);
}

export default FrontPage;
