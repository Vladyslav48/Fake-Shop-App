
import React, {useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector , connect} from "react-redux";
import {
  setProducts,
} from '../redux/actions/productsActions'

const Filter = () => {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.allProducts.allProductsToShow);

    const [filters, setFilters] = useState("");
    let [filteredProducts, setFilteredProducts] = useState([]);

    const handleFilter =  (event) => {
      setFilters(event.target.value)
      
    };

   let filterArray = () =>{
     filters && setFilteredProducts(allProducts.filter((product) => {
      return product.category.toLowerCase().includes(filters.toLowerCase())
    }))
   }
   
   useEffect(()=>{
    filterArray();
    
    if(filters == "all"){
      console.log("You are tring to filter by all")
      dispatch(setProducts(allProducts));
    }
    else{
      console.log("You are tring to filter by smth else")
      dispatch(setProducts(filteredProducts))
    }
   
   }, [filters, dispatch, filteredProducts])



  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          value={filters}
          onChange={handleFilter}
          autoWidth
          label="Category"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value = "all">All</MenuItem>
          <MenuItem value = "men's clothing">Men's clothing</MenuItem>
          <MenuItem value = "women's clothing">Women's clothing</MenuItem>
          <MenuItem value = "jewelery">Jewelery</MenuItem>
          <MenuItem value = "electronics">Electronics</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
};

export default Filter;
