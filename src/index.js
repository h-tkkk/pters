import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Header from "./layouts/Main/Header";
import Home from "./views/Home";
import Introduce from "./views/Introduce";
import ReservationType from "./views/ReservationType";
import RsMng from "./views/RsMng";
import PlanMng from "./views/PlanMng";

import "./index.css";

ReactDOM.render(
 <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home {...props} />}
          />
          <Route
            path="/introduce"
            exact
            render={prorps => <Introduce {...prorps} />}
        />
        <Route
            path="/reservationType"
            exact
            render={prorps => <ReservationType {...prorps} />}
        />
        <Route
            path="/rsManagement"
            exact
            render={prorps => <RsMng {...prorps} />}
        />
        <Route
            path="/planManagement"
            exact
            render={prorps => <PlanMng {...prorps} />}
        />
        <Route
            path="/userManagement"
            exact
            render={prorps => <ReservationType {...prorps} />}
        />
        <Route
            path="/serviceManagement"
            exact
            render={prorps => <ReservationType {...prorps} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>,
  document.getElementById("root")
);