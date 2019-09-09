import {combineReducers} from 'redux'

// import otherReducer from './other-reducer'
// import cart from '/.cart'

function cartReducer(oldState=[], action){
  switch(action.type){
    case 'ADD_BEER':
      return [...oldState, action.beer]
      break
      default:
    return oldState
  }
  
}

export default combineReducers({
  cart: cartReducer
})
