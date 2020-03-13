import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Model from './components/Model';
import Topbar from './components/Topbar';

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <Topbar />
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details} />            
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Model />
      </React.Fragment>
    );
  }
}

export default App;


