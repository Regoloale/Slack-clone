import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";

import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <>
      <Header />
      <AppBody>
      <Sidebar />
        <Switch>
          <Route path="/" exact>
           <Chat />
          </Route>
        </Switch>
      </AppBody>
        
      </>
    </Router>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
