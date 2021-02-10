import React from 'react';
import './FrontPage.css'
import Environment from "./J'Lenns Photos/environment.png"
import Lamp from "./J'Lenns Photos/Lamp.png";
import Treasure from "./J'Lenns Photos/Treasure.png";
import Desk from "./J'Lenns Photos/Desk.png";
import LivingRoom from "./J'Lenns Photos/Livingroom2.png";
import Crate from "./J'Lenns Photos/Crate1.png";
import Lizard from "./J'Lenns Photos/lizard.mp4";
import Barrel from "./J'Lenns Photos/Barrel.png";
import {Navbar, Nav, Card, Row} from 'react-bootstrap';
const Models = (props) => {
    
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
      <Card.Title className = "mx-auto" ><h1>Models</h1></Card.Title>
      <Card.Subtitle className="mb-3 subtitle">Collection of Models</Card.Subtitle>
      <hr className = "underline"></hr>
      <Row>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>Living Room</h3></Card.Title>
              <img src ={Environment} alt = "Living Room"></img>
              
          </Card.Body>
          <Card.Text className = "photoDescription">
                By: J'Lenn James
              </Card.Text>
        </Card>
      </Row>
      <Row>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>Living Room View 2</h3></Card.Title>
              <img src ={LivingRoom} alt = "Living Room"></img>
              <Card.Text className = "photoDescription">
                By: J'Lenn James
              </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      
      <Row>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>Desk - 3D Model</h3></Card.Title>
              <img src ={Desk} alt = "Desk - 3D Model"></img>
              
          </Card.Body>
          <Card.Text className = "photoDescription">
                By: J'Lenn James
              </Card.Text>
        </Card>
      </Row>
      <Row>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>Lamp - 3D Model</h3></Card.Title>
              <img src ={Lamp} alt = "Lamp - 3D Model"></img>
              <Card.Text className = "photoDescription">
                By: J'Lenn James
              </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>Treasure - 3D Model</h3></Card.Title>
              <img src ={Treasure} alt = "Treasure - 3D Model"></img>
              
          </Card.Body>
          <Card.Text className = "photoDescription">
                By: J'Lenn James
              </Card.Text>
        </Card>
      </Row>
      <Row>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>Crate Model</h3></Card.Title>
              <img src ={Crate} alt = "Crate"></img>
              
          </Card.Body>
          <Card.Text className = "photoDescription">
                By: J'Lenn James
              </Card.Text>
        </Card>
      </Row>
      <Row>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>Barrel Model</h3></Card.Title>
              <img src ={Barrel} alt = "Barrel"></img>
              
          </Card.Body>
          <Card.Text className = "photoDescription">
                By: J'Lenn James
              </Card.Text>
        </Card>
      </Row>
      <Row>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
          <Card.Body>
              <Card.Title className = "mx-auto"><h3>3D View of Lizard</h3></Card.Title>
              <video controls loop>
                <source src = {Lizard} type = "video/ogg"></source>
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

export default Models;
