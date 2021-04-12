import React from 'react';
import './FrontPage.css'
import Environment from "./J'Lenns Photos/environment.png"
import Lamp from "./J'Lenns Photos/Lamp.png";
import Treasure from "./J'Lenns Photos/Treasure.png";
import Desk from "./J'Lenns Photos/Desk.png";
import LivingRoom from "./J'Lenns Photos/Livingroom2.png";
import Crate from "./J'Lenns Photos/Crate1.png";
import Barrel from "./J'Lenns Photos/Barrel.png";
import {Navbar, Nav, Card} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Models() {
  const responsive = { 
    superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
  
}
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
       <h4><u>Still Models</u></h4>
      <Carousel responsive={responsive}>
      

      <div className = "models">
           <h5>Living Room</h5>
           <img src ={Environment} alt = "Living Room"></img>
      </div>
      <div className = "models">
           <h5>Living Room View 2</h5>
           <img src ={LivingRoom} alt = "Living Room"></img>
         </div>   
         <div className = "models">
           <h5>Desk - 3D Model</h5>
           <img src ={Desk} alt = "Desk - 3D Model"></img>
         </div>   
         <div className = "models">  
           <h5>Lamp - 3D Model</h5>
           <img src ={Lamp} alt = "Lamp - 3D Model"></img>
         </div>
         <div className = "models">
           <h5>Treasure - 3D Model</h5>
           <img src ={Treasure} alt = "Treasure - 3D Model"></img>
         </div>
         <div className = "models">   
           <h5>Crate Model</h5>
           <img src ={Crate} alt = "Crate"></img>
         </div>
         <div className = "models"> 
               <h5>Barrel Model</h5>
               <img src ={Barrel} alt = "Barrel"></img>
         </div>
      </Carousel>
      <h4><u>Live Models</u></h4>
      <Carousel responsive={responsive}>
        <div className = "modelsVideo"> 
           <h5>Creature Sculpt</h5>
           <iframe src="https://www.youtube.com/embed/Vp0hpnrQRgw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className = "modelsVideo"> 
           <h5>3D Construction</h5>
           <iframe src="https://www.youtube.com/embed/zlpMvQ5yHvs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className = "modelsVideo"> 
           <h5>Hellboy Demo</h5>
           <iframe src="https://www.youtube.com/embed/L8c40qAhla0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className = "modelsVideo"> 
           <h5>Box Lift</h5>
           <iframe src="https://www.youtube.com/embed/Zp1w0iVMkCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> 
        <div className = "modelsVideo"> 
           <h5>Baseball Throw</h5>
           <iframe src="https://www.youtube.com/embed/9kY-L6Rfbyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
         <div className = "modelsVideo"> 
           <h5>What's in the box?</h5>
           <iframe src="https://www.youtube.com/embed/L9eB-Vzr4yY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className = "modelsVideo"> 
           <h5>3D View of Lizard</h5>
           <iframe src="https://www.youtube.com/embed/ZE0IDi5eM6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className = "modelsVideo"> 
           <h5>After Effects Example</h5>
            <iframe src="https://www.youtube.com/embed/ILUpHUfKYIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
};
