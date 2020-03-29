import React from 'react';
import { Navbar } from './component/Navbar';
import { Home } from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Alert } from './component/Alert';
import { AlertState } from './context/alert/AlertState';




function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: 'Test alert' }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
