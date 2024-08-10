import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from '../views/Home';
import Productos from './components/Productos';
import Registro from '../views/Registro';
import ProductDetail from '../views/ProductDetail';
import { MyContext } from './context/MyContext';

const App = () => {
  return (
    <MyContext>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productos" component={Productos} />
          <Route path="/registro" component={Registro} />
          <Route path="/producto/:id" component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    </MyContext>
  );
};

export default App;
