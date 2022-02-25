import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (itemID) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload:{
      id: itemID
    }
  };
};


export const removeFromCart = (itemID) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload:{
      id: itemID
    }
  };
};

export const adjustQty = (itemID, value) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload:{
      id: itemID,
      qty: value
    }
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,

  };
};


export const setAllProducts = (products) =>{
  return{
    type: ActionTypes.SET_ALL_PRODUCTS,
    payload: {

      allProductsToShow: products,

  }
}}