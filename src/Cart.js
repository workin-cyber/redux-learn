import React from 'react'
import { connect } from 'react-redux'

class Cart extends React.Component {
    render() {
        const { cartList } = this.props
        return <div>
            <h2>עגלה</h2>
            <ul>
                {cartList.map(cl => <li key={cl.id}>{cl.name}</li>)}
            </ul>
        </div>
    }
}


export default connect(storeState => ({
    cartList: storeState.cartListReducer
}))(Cart)