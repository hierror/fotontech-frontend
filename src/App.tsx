import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Home from './pages/Home/Home';
import AddBook from './pages/AddBook/AddBook';
import ViewBook from './pages/ViewBook/ViewBook';

function App() {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/books/add">
        <AddBook />
      </Route>
      <Route path="/books/:book_id">
        <ViewBook />
      </Route>
      <Route exact render={() => <Redirect to="/home" />} />
    </Switch>
  );
}

export default App;
