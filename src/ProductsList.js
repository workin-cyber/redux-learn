import React from 'react'
import Product from './Product'
const products = [
    { id: 1, name: 'בננה' },
    { id: 2, name: 'מלפפון' },
    { id: 3, name: 'תפוח' }
]

export default class ProductsList extends React.Component {
    render() {
        return <div>{products.map(p => <Product key={p.id} product={p} />)}</div>
    }
}