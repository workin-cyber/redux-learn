import React from 'react'
import Header from './Header'
import Cart from './Cart'
import ProductsList from './ProductsList'

function App() {
  return <main>
    <Header />
    <hr />
    <div>
      <Cart />
      <hr />
      <ProductsList />
    </div>
  </main>
}

export default App