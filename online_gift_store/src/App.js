import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //react router dom

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Error from "./pages/Error";
import GiftDetails from "./pages/GiftDetails";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

//components
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <About />

        </Route>
        <Route path='/categories'>
          <Categories />

        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/giftdetails'>
          <GiftDetails />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}