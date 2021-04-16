import React from 'react';
import './FrontPage.css'
// import Animation from "./J'Lenns Photos/animation.mp4";
// import Pacman from "./J'Lenns Photos/pacman.mp4";
import {Navbar, Nav, Card, Row} from 'react-bootstrap';
const Animations = (props) => {
    
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
      <Card.Title className = "mx-auto" ><h1>Animations</h1></Card.Title>
      <Card.Subtitle className="mb-3 subtitle">A Collection of My Animations</Card.Subtitle>
      <hr className = "underline"></hr>
      <Row>
      <div className = "modelsVideo"> 
          <iframe src="https://www.youtube.com/embed/Quz2BeGnlbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Row>
      {/* <Row>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>Skate-Boarding</h3></Card.Title>
              <video controls>
                <source src = {Animation} type = "video/ogg"></source>
              </video>
          </Card.Body>
          
        </Card>
      </Row>
      <Row>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>Pac-Man</h3></Card.Title>
              <video controls>
                <source src = {Pacman} type = "video/ogg"></source>
              </video>
              
          </Card.Body>
          <Card.Text className = "photoDescription">
                By: J'Lenn James
            </Card.Text>
        </Card>
      </Row> */}
      
      </Card.Body>
    </Card>
  </div>  
  </div>  
);
}

export default Animations;
