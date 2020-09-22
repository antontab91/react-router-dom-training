import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import BrowseUsers from './BrowseUsers';
import UserProfile from './UserProfile';

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
        <Route exact path='/users'>                 {/* тут отрисовуется список ссылок  */}
          <BrowseUsers />
        </Route>
        <Route path='/users/:userId' component={UserProfile}>
          {/* <UserProfile /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// exact - эксклюзивный путь 
// Switch - проходится по всем роутам и отрисовует первое соответствие 
// Link - ссылка , которая выберает роут по пути 