import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';


const Header = () => {

  let cart = useSelector(state => state.allProducts.cart)
  const [cartCount, setCartCount] = useState(0)

  useEffect(()=>{
    let count = 0;
    cart.forEach((item)=>{
      count += item.qty
    })
    setCartCount(count)
  }, [cart, cartCount])

  return (
    <div className="ui fixed menu">
      <div className="ui container center" style={{justifyContent: "space-between"}}>
      <Link to="/">
        <h2>FakeShop</h2>
      </Link>
      <Link to="/cart">
        <Button  variant="contained">  <ShoppingCartIcon style={{color: "white"}}/> Cart: {cartCount}</Button>
      </Link>
      </div>
    </div>
  );
};

export default Header;
