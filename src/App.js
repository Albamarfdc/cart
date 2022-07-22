//import {Routes , Route} from 'react-router-dom';
import './App.css';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((e) => e.id === product.id);
    exist
      ? setCartItems(
          cartItems.map((e) =>
            e.id === product.id ? { ...e, quantity: e.quantity + 1 } : e))
      : setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const onRemove = (product) => {
    const exist = cartItems.find((e) => e.id === product.id);
    exist.quantity === 1
      ? setCartItems(cartItems.filter((e) => e.id !== product.id))
      : setCartItems(
          cartItems.map((e) =>
            e.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : e
          )
        );
  };

  const url = 'https://fakestoreapi.com/products/category/electronics?limit=5';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      <Header countItems={cartItems.length } />
      <div className='row'>
        <Main onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
