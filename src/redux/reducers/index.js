import { combineReducers } from "redux";
import { selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts:selectedProductsReducer
});
export default reducers;
