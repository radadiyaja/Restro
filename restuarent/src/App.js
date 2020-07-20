import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import RestaurantUpdate from "./component/RestaurantUpdate";
import RestaurantCreate from "./component/RestaurantCreate";
import RestaurantSearch from "./component/RestaurantSearch";
import RestaurantDetail from "./component/RestaurantDetail";
import RestauranstList from "./component/RestauranstList";
import Login from "./component/Login";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlusCircle, faSearch,faUser } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Restro</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/List"><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Create"><FontAwesomeIcon icon={faPlusCircle} />Create</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Search"><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
              <Nav.Link href="#link"><Link to="/Login"><FontAwesomeIcon icon={faUser} />Login</Link></Nav.Link>
              {/* <Nav.Link href="#link"><Link to="/Update"><FontAwesomeIcon icon={faHome}Update/></Link></Nav.Link> */}
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <Route path="/List">
          <RestauranstList />
        </Route>
        <Route path="/Create">
          <RestaurantCreate />
        </Route>
        <Route path="/Details">
          <RestaurantDetail />
        </Route>
        <Route path="/Search">
          <RestaurantSearch />
        </Route>
        <Route path="/Update/:id" render={props => (<RestaurantUpdate {...props} />)}>
        </Route>
        <Route path="/Login" render={props => (<Login {...props} />)}>
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>


      </Router>
    </div>
  );
}

export default App;
