import React from 'react';
import './App.css';
import FrontPage from './Portfolio/FrontPage.js'
import Contact from './Portfolio/Contact.js'
import Animations from './Portfolio/Animations.js'
import Models from './Portfolio/Models.js'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = "/" component={FrontPage} />
          <Route exact path = "/animations" component={Animations} />
          <Route exact path = "/contact" component={Contact} />
          <Route exact path = "/models" component={Models} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
