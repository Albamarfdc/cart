import React from 'react';
import swal from 'sweetalert';

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxPrice = itemsPrice * 0.16;
  const shippingPrice = itemsPrice > 1000 ? 0 : 40;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;



  return (
    <div className='block col-1'>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart Is Empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className='row '>
            <div className='col-2' >{item.title}</div>
            <div className='col-2'>
              <button onClick={() => onRemove(item)} className='remove'>
              -
              </button>{' '}
                <strong> {item.quantity} </strong>
              <button onClick={() => onAdd(item)} className='add'>
                +
              </button>
            </div>

            <div className='col-2 text-right'>
             <br/> 
              ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

      {cartItems.length !== 0 && (
        <>
          <hr></hr>
            
          <div className='row'>
            <div>Items Price</div>
            <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
            </div>
            
          <div className='row'>
            <div>Tax Price</div>
            <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
          </div>
            
          <div className='row'>
            <div>Shipping Price</div>
            <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
            </div>

          <div className='row'>
            <div>
              <strong>Total Price</strong>
            </div>
            <div className='col-1 text-right'>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <div className='row '>
          <button className='check' onClick={() =>swal("Implement cheackout", "You clicked the button!", "success") }>Cheackout</button>
          </div>
        </>
      )}
    </div>
  </div>
  );
};

export default Basket;
