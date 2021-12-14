import { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

/*
{
    "id": 1,
    "title": "Sony KE55XH90P",
    "slug": "sony-ke55xh90p",
    "description": "Sony TV 55 Pouces - Bluetooth, Wi-fi, USB, Ethernet, HDMI",
    "picture": "https://m.media-amazon.com/images/I/81+sKrRZa+L._AC_SL1500_.jpg",
    "price": 999,
    "onSale": false
  }
*/


function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = (id) => {
    if (!cart.includes(id)) {
      // setCart(cart.concat(id))
      // setCart([...cart, id])
      setCart(prevCart => [...prevCart, id])
    } 
  }

  useEffect(() => {
axios.get('https://my-json-server.typicode.com/bhubr/products-api/products').then(function (response) {
  setProducts(response.data)
})
  }, [])
  return (
    <div className="App">
      {
        products.map(({title, id, price}) => {
          return <div key={id}>
            <h1>{title}</h1>
            <p>{price}</p>
            <button type="button" onClick={() => addToCart(id)}>Ajouter au panier</button>
          </div>
        })
      }
      <h2>Cart</h2>
      {
        cart.map(id => (
          <p key={id}>{id}</p>
        ))
      }
    </div>
  )
}

export default App
