import React from 'react';
import './product.scss';

const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  console.log(productName);
  
  return (
    <div className="product" key={id}>  
        <img src={productImage} alt="" className="product__thumbnail"/>
        <div className="product__description">
          <p className="product__name">
            {productName}
          </p>
          <p className="product__price">${price}</p>
        </div>
        <button className="btn">Add to cart</button>
    </div>
  )
}

export default Product;