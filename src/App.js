import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Room } from './pages';
import Header from './components/Header';
import * as R from './constants/routes';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={R.HOME}>
          <Home />
        </Route>
        <Route path={`${R.ROOM}/:roomId`}>
          <Room />
        </Route>
      </Switch>
    </Router>
  );
}
