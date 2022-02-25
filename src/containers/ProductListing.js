import React, { useEffect} from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setProducts, setAllProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import Filter from "./Filter";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setAllProducts(response.data));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    console.log("Products :", products);
  }, []);

 
  return (
    <div className="ui container generalContainer">
      <Filter />
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductPage;
