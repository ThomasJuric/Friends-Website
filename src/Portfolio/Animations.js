import React from 'react';
import './FrontPage.css'
import Animation from "./J'Lenns Photos/animation.mp4";
import Pacman from "./J'Lenns Photos/pacman.mp4";
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
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>Skate-Boarding</h3></Card.Title>
              <video controls>
                <source src = {Animation} type = "video/ogg"></source>
              </video>
          </Card.Body>
          <Card.Text className = "photoDescription">
                By: J'Lenn James
              </Card.Text>
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
      </Row>
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

export default Animations;
