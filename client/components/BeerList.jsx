import React, { Component, Fragment } from 'react'
import data from '../../data/beers'
import { connect } from 'react-redux';

class BeerList extends Component {
    render() {
        return (
            <Fragment>
                <p>Welcome! Please select from our delicous selection and don't hesitate to let us know if we can anser any o your questions.</p>
                <ul>
                    {data.beers.map(beer => <li key={beer.id}>{beer.name}
                        <ul>
                            <li> {beer.brewery}</li>
                            <li>{beer.style}</li>
                        </ul>
                    </li>)}
                </ul>

            </Fragment>
        )
    }

}

export default connect()(BeerList)