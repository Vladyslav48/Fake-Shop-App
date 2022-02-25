import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';

import  {useSelector} from "react-redux";

import CartItem from "./CartItem";



const Cart = () => {

  const cart = useSelector((state) => state.allProducts.cart);
    
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    console.log(cart)
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]); 

const CartItems = cart.map((cartItem) => {

    return (
      <>  
        <CartItem key={cartItem.id} item={cartItem} />
      </>
    )});

  return (
    <div
     className="cart">
      <div className="cart__items">
          {CartItems}  
      </div>

      <div className="cart__summary">
        <h4 className="summary__title">Cart Summary</h4>
        <div className="summary__price">
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <Button variant="contained">Proceed To Checkout</Button>
      </div>
    </div>
  );
};

export default Cart