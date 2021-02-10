import React from 'react';
import './FrontPage.css'
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
      <Card.Title className = "mx-auto" ><h1>J'Lenn James</h1></Card.Title>
      <Card.Subtitle className="mb-3 subtitle">Contact Information</Card.Subtitle>
      <hr className = "underline"></hr>
        <Card.Text className = "textForCard">
            Feel Free To Contact Me Through Any of the Links Provided
            
        </Card.Text>
        <Card className = "mainCard vertical-center horizontal-center mx-auto">
        <Card.Body className = "text-center">
            <div className = "contactInfo">
                <Row>
                    <div className = "column text-center">
                        <a href ="https://www.instagram.com/jlennjames/" display = "block" width = "2px">
                            <i className="fa fa-instagram fa-5x"></i>
                        </a>
                    </div>
                    <div className = "column">
                        <a href ="https://www.linkedin.com/in/j-lenn-james-9626b1190/" display = "block" width = "2px">
                            <i className="fa fa-linkedin-square fa-5x" aria-hidden = "true"></i>
                        </a>
                    </div>
                    <div className = "column">
                        <a href ="mailto:jlenn.james.003@gmail.com" display = "block" width = "2px">
                            <i className="fa fa-envelope-square fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                </Row>
                </div>
            </Card.Body>
        </Card>
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
