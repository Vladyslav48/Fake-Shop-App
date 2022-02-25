import React, { useState } from "react";
import styles from "./CartItem.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch } from "react-redux";
import {
    adjustQty,
    removeFromCart,
} from '../redux/actions/productsActions'

const CartItem = ({ item}) => {
  const [input, setInput] = useState(item.qty);
  
  const dispatch = useDispatch();

  const onChangeHandler = async(e) => {
  setInput(e.target.value);
   await dispatch(adjustQty(item.id, e.target.value));
  };

  const removeOnClick = async(id) =>{
    await dispatch(removeFromCart(id));
  }

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button className="ui img shop cart"
          onClick={() => removeOnClick(item.id)}
          className={styles.actions__deleteItemBtn}
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;