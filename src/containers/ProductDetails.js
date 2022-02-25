import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import {
  selectedProduct,
  removeSelectedProduct,
  addToCart
} from "../redux/actions/productsActions";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.allProducts.currentItem);
  console.log(product)
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

    const addToCartOnClick = (id)=>{
      dispatch(addToCart(id));
  }

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <CircularProgress/>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2 style={{color: "#1976d2"}}>
                  <a className="ui teal tag label" >${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <Button size="large"  onClick={()=>addToCartOnClick(productId)} variant="contained">Add To Cart</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
