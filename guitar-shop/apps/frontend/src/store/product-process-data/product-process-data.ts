import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { ProductsState } from '../../types/state';

const initialState: ProductsState = {
  products: [],
  isLoading: false,
};

const productProcessData = createSlice({
  name: NameSpace.Product,
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      if (!state.products.find((film) => film.id === action.payload.id)) {
        state.products = [...state.products, action.payload];
      }
    },
    setProductLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

const {
  setProducts,
  setProduct,
  setProductLoading,
} = productProcessData.actions;


export {
  setProducts,
  setProduct,
  setProductLoading,
};


