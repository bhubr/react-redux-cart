import { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
axios.get('https://my-json-server.typicode.com/bhubr/products-api/products').then(function (response) {
  setProducts(response.data)
})
  }, [])
  return (
    <div className="App">
      
    </div>
  )
}

export default App
