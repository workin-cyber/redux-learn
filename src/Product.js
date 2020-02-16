import React from 'react'
import { connect } from 'react-redux'

class Product extends React.Component {
    render() {
        const { product = {}, addToCart } = this.props

        return <div>
            <div>
                {product.name}
            </div>
            <button onClick={() => addToCart(product)}>הוסף לסל</button>
        </div>
    }
}


function mapStateToProps(storeState) {
    return {
        cartList: storeState.cartListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: product => dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)