import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  let total = cart.reduce((total,prd)=> total+prd.price,0);
  return (
    <div>
      <div className="shopping-cart"> 
      <h2> Order summery </h2>
      <p> Course enrolled: {cart.length} </p>
      <p> Total cost: ${total} </p>
      
      </div>
      
    </div>
  );
};

export default Cart;