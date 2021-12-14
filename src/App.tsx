import { useState, useEffect } from 'react'
// useSelector => recuperer des informations depuis le state
// useDispatch => envoyer des actions au store
import { useSelector, useDispatch } from 'react-redux'
import { CART_ADD, CART_EMPTY } from './store/reducer'
import axios from 'axios'
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
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  // const addToCart = (id) => {
  //   if (!cart.includes(id)) {
  //     // setCart(cart.concat(id))
  //     // setCart([...cart, id])
  //     setCart(prevCart => [...prevCart, id])
  //   } 
  // }

  const addToCart = (id) => {
    const action = {type: CART_ADD, productId: id}
    dispatch(action)
  }

const clearCart = () => {
  const action = {type: CART_EMPTY}
  dispatch(action)
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
      <p><button type="button" onClick={() => clearCart()}>Clear cart</button></p>
      {
        cart.map(id => (
          <p key={id}>{id}</p>
        ))
      }
    </div>
  )
}

export default App
