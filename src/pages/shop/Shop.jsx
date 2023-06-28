import React from 'react';
import PRODUCTS from '../../products';
import Product from './Product';
import './shop.scss';

const Shop = () => {
  
  return (
    <div className="shop">
        <div className="shop__title">
            <h1>Shopping List</h1>
        </div>
        <div className="products">
            {
                PRODUCTS.map(product => {
                    return(
                        <Product data={product} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Shop