import React from 'react'
import { connect } from 'react-redux'

class Header extends React.Component {
    render() {
        console.log(this.props)
        return <header>
            <h1>לוגו</h1>
            <p>{this.props.cartListLength} מוצרים</p>
        </header >
    }
}

function mapStateToProps(storeState) {
    return {
        cartListLength: storeState.cartListReducer.length
    }
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)