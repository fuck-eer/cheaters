import React from 'react';
import './App.css';
import Nav from './Components/UI/Navbar/Navbar'
import Showresults from './containers/Showresults/Showresults';

import Showstats from './containers/Showstats/showstats'
import { Route, Switch, Redirect } from 'react-router';

function App() {
  return (
    <div>
    <Nav />
    <Switch>
    <Route path='/database' component={Showresults} />
    <Route path='/stats' component={Showstats} />
    
    <Redirect from='/' to='/database' />
    </Switch>
    </div>

  );
}

export default App;
