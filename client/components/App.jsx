import React from 'react'
import { connect } from 'react-redux'

import BeerList from './BeerList'


const App = () => {
  return (
    <div className='app'>
      <div >
        <h1>Beersies</h1>
      </div>
      <BeerList />

    </div>
  )
}
  


export default connect()(App)
