import './css/App.scss';
import { NAMES,  TABS, CONTENT  } from './data/constants';
import React, { createContext, Suspense } from 'react';
import Header from './Header';
import Names from './Names';
import Nav from './styled/Nav';

// import BetterCount from './BetterCount';
// import Count from './Count';

import Users from './Users';
import Tabs from './Tabs';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const NamesContext = createContext();
export const TabContext = createContext();

const Count = React.lazy(() => import('./Count'));
const BetterCount = React.lazy(() => import('./BetterCount'));

const Logo = () => <div style={{height: '400px', color: 'white', background: '#282c34', padding: '40px'}}>LOGO</div>

const LOADING = <h1>Loaging...</h1>;

const App = () => {
  return (
    <div className="App">
      <Header text='default' />

      <Router>
        <Nav>
          <Link to="/">home</Link>
          <Link to="/tabs">Tabs</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/names">Names</Link>
          <Link to="/users">Users</Link>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tabs">
            <TabContext.Provider value={{ TABS, CONTENT }}>
              <Tabs />
            </TabContext.Provider>
          </Route>

          <Route path="/counter">
            <Suspense fallback={LOADING}>
              <Count />
              <BetterCount />
             </Suspense>
          </Route>

          <Route path="/names">
            <NamesContext.Provider  value={ NAMES } >
              <Names />
            </NamesContext.Provider>
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/">
            <Logo />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
