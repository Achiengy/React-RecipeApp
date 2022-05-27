import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import HomePage from './components/HomePage/HomePage'
import Contact from './components/ContactPage/Contact';
import AboutPage from './components/AboutPage/AboutPage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
