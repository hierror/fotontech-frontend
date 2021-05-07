import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import AddBook from './pages/AddBook/AddBook';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/books/add">
            <AddBook />
          </Route>
        </Switch>
      </div>

      <Navbar />
    </>
  );
}

export default App;
