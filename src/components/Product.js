import React from 'react'

const Product = (props) => {
  const {product,onAdd} = props;
  return (
    <div>
      <img className='small' src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <div>${product.price}</div>
      <button onClick={() => onAdd(product) }>Add to Cart</button>
    </div>
  )
}

export default Product