import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //react router dom

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Cart from "./components/Cart"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./pages/Error";
import GiftDetails from "./pages/GiftDetails";
import Products from "./pages/Products";

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

        <Route path='/signup'>
          <Signup />
        </Route>

        <Route path='/giftdetails'>
          <GiftDetails />
        </Route>

        <Route path='/products/birthday' component={Products}>
          <Products catagory={1} />
        </Route>
        <Route path='/products/anniversary' component={Products}>
          <Products catagory={2} />
        </Route>
        <Route path='/products/house' component={Products}>
          <Products catagory={3} />
        </Route>
        <Route path='/products/women' component={Products}>
          <Products catagory={4} />
        </Route>
        <Route path='/products/men' component={Products}>
          <Products catagory={5} />
        </Route>

        <Route path='/products/kids' component={Products}>
          <Products catagory={6} />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
