import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, Room } from './pages';
import * as R from './constants/routes';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={R.HOME}>Home</Link>
            </li>
            <li>
              <Link to={'https://github.com/rferromoreno'}>Repo en Github</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path={R.HOME}>
            <Home />
          </Route>
          <Route path={`${R.ROOM}/:roomId`}>
            <Room />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
