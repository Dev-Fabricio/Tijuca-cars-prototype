import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { AdminPage } from './pages/AdminPage'
import {Login} from './pages/login/index'
import {Cliente} from './pages/cliente'

export const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route  path="/" exact component={Login} />
        <Route  path="/cliente" component={Cliente} />
        <Route  path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  )
}