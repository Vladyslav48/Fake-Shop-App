import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
  cart:[],
  currentItem: [],
  allProductsToShow: [],
};


export const selectedProductsReducer = (state = initialState, { type, payload }) => {
  switch (type) {


    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload};
      
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        currentItem: payload
      };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {
        ...state,
        currentItem: []
      };

      
      case ActionTypes.ADD_TO_CART:
        // Great Item data from products array
        const item = state.products.find(
          (product) => product.id == payload.id
        );
        // Check if Item is in cart already
        const inCart = state.cart.find((item) =>
          item.id == payload.id ? true : false
          
        );
  
        return {
          
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id == payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };
    case ActionTypes.REMOVE_FROM_CART:

      return {
        ...state,
        cart: state.cart.filter((item)=> item.id !== payload.id)
      };

    case ActionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
           item.id === payload.id ?
           {...item, qty: +payload.qty}
            : item
        )
      };


      case ActionTypes.SET_ALL_PRODUCTS:
        return {
          ...state,
          allProductsToShow: payload.allProductsToShow
        };

    default:
      return state;
  }
};
