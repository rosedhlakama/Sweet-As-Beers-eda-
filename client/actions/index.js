export const actionCreatorName = () => {
  return {
    type: 'ACTION_TYPE'
  }
}

export const addBeer = (beer) => {
  return{
    type: 'ADD_BEER',
    beer
  }
}
