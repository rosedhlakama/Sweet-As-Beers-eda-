import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'


class Cart extends Component {
    render() {
        console.log(this.props.cart)
        return (
            <Fragment>
                <p>Sweet As! Beersies in your cart are heresies!</p>
                {this.props.cart.map(beer =>             
                <li key={beer.id}>{beer}</li>
                
            )}
            </Fragment>
        )
    }
}
//
function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(Cart)