import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './aboutus';
import Contact from './contact'
import Navbar from './Navbar'

function App() {
  return (
   <>
   <Router>
      <Switch>
        <Route exact path='/'>
        <Navbar />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  
   </>
  );
}

export default App;
