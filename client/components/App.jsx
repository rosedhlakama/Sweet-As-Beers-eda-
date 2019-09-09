import React from 'react'
import { connect } from 'react-redux'

import BeerList from './BeerList'
import Cart from './Cart'


const App = () => {
  return (
    <div className='app'>
      <div >
        <h1>Beersies</h1>
        <BeerList />
      </div>
      

      <h1>Cart</h1>
      <Cart />

    </div>
  )
}
  


export default connect()(App)
