import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import ServiceList from './components/ServiceList';
import ServiceChange from './components/ServiceChange';

export default function App(props) {
  const url = window.location.pathname;
  return (
    <>
      <Router>
        <Switch>
          <Route path={`${url}services/:id`} component={ServiceChange} />
          <Route path={`${url}services`} component={ServiceList} />
          <Redirect exact from={`${url}`} to={`${url}services`} />
        </Switch>
      </Router>
    </>
  );
}
