import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact>
            <Header />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
