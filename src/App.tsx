import React from 'react';
import { Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Switch>
        <Navbar>
          <NavLink to="/">Teste</NavLink>
          <NavLink to="/">Teste</NavLink>
          <NavLink to="/">Teste</NavLink>
        </Navbar>
      </Switch>
    </div>
  );
}

export default App;
