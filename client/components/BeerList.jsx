import React, { Component, Fragment } from 'react'
import data from '../../data/beers'
import { connect } from 'react-redux';

import {addBeer} from '../actions'

class BeerList extends Component {
    addToCart = (beer) => {
        this.props.dispatch(addBeer(beer))
    }

    render() {       
        return (
            <Fragment>
                <p>Welcome! Please select from our delicous selection of New Zealand Craft Beers</p>
                <ul>
                    {data.beers.map(beer => <li key={beer.id}>{beer.name}
                        <ul>
                            <li key={beer.brewery}> {beer.brewery}</li>
                            <li key={beer.style}>{beer.style}</li>
                            <li key={beer.abv}>{beer.abv}</li>
                        </ul>
                        <button onClick= {() => this.addToCart(beer)}>Add to Cart</button>
                    </li>)}
                </ul>
            </Fragment>
        )
    }

}

export default connect()(BeerList)