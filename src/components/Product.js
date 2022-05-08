import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    
    <div className = "card col-md-6 col-xl-4" >
        <div className='pro-image'>
            <img className="card-img-top" src={product.image} alt={product.name}/>
        </div>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">₹{product.price}</p>
            <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
     </div>
  );
}