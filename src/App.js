import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/styles/reset.css";
import "./assets/styles/style.css";

import Head from "./components/head/head";
import Home from "./pages/home/home";
import Cluster from "./pages/cluster/cluster";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <Head />
        </header>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/home" exact component={Home} />
          <Route path="/cluster" component={Cluster} />
          <Redirect to={'/home'}></Redirect>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
