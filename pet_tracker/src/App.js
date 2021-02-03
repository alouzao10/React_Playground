import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GlobalProvider } from './Context/GlobalState';

import Header from './Components/Header';
import Home from './Components/Home';
import Pets from './Components/ForPets/Pets';
import Owners from './Components/ForOwners/Owners';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/pets' component={Pets} />
          <Route exact path='/owners' component={Owners} />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
