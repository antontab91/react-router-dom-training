import React from "react";
import Home from './Home';
import Contact from './Contact';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/contact" >
          Contact
        </Link>
        <Link to="/users" >
          Users
        </Link>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/users:userId'>
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// exact - эксклюзивный путь 
// Switch - проходится по всем роутам и отрисовует первое соответствие 
// Link - ссылка , которая выберает роут по пути 