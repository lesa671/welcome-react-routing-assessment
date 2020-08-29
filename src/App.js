import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './/components/navigation/Navigation'
import NoMatch from './components/noMatch/NoMatch'
import Jeopardy from './components/jeopardy/Jeopardy';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <Welcome {...props} name='Lesa Lesa' />}
        />

        <Route
          path='/welcome/:name'
          render={(props) => (<Welcome {...props} name={props.match.params.name} />)}
        />

        <Route path='/clock' component={Clock} />

        <Route path='/contact' component={Contact} />

        <Route path='/jeopardy' component={Jeopardy} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;

// help from Jon Taylor (facilitator) with routing and rendering the Welcome component properly
// help with using <Switch> from https://teamtreehouse.com/library/displaying-404-error-routes-using-switch - video transcript