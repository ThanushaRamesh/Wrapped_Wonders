import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'; //react router dom

//pages
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Error from './pages/Error';

//components
import Header from './components/Header';

export default function App(){
  return <Router>
  <Header />
  <Switch>
  <Route exact path="/"> <Home /> </Route>
    <Route path="/about"> <About /> </Route>
    <Route path="/categories"> <Categories /> </Route>
    <Route path="/cart"> <Cart /> </Route>
    <Route path="/login"> <Login /> </Route>
    <Route path="*"> <Error /> </Route>
  </Switch>
  </Router>
}  

