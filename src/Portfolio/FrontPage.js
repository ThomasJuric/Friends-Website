import React from 'react';
import './FrontPage.css'
import SuperHero from "./J'Lenns Photos/JiggyOPCollab.png";
import Jolilon from "./J'Lenns Photos/Jojolion.jpg";
import Mechanical_Arm from "./J'Lenns Photos/Character_sketches1.5.jpg"
import Friends from "./J'Lenns Photos/Gang.jpg";
import Portrait from "./J'Lenns Photos/maura-drawing1.jpg"
import BLM from "./J'Lenns Photos/BLM.png"
import Fight from "./J'Lenns Photos/fight_scene.png"
import Anime from "./J'Lenns Photos/AnimeCollage.jpg";
import John_Ware from "./J'Lenns Photos/JLenn_James_Illustration.jpg" 
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
            <h3>John Ware Illustration</h3>
            <img src ={John_Ware} alt = "John Ware Illustration"></img>
        </div>
        <div>
            <h3>BLM</h3>
            <img src ={BLM} alt = "Black Lives Matter"></img>
        </div>
        <div>
            <h3>Character Sketches</h3>
            <img src ={Mechanical_Arm} alt = "Character Sketches"></img>
        </div>
        <div>
            <h3>Portrait</h3>
            <img src ={Portrait} alt = "Mother and Daughter"></img>
        </div>
        
        <div>
            <h3>Fighting Characters</h3>
            <img src ={Fight} alt = "Group of people fighting"></img>
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
      </Carousel>
      </Card.Body>
    </Card>
  </div>  
  </div>  
);
}

export default FrontPage;
