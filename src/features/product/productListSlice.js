import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsByFilters,fetchBrands, fetchCategories } from "./productListAPI";

const initialState = {
  products: [],
  categories:[],
  brands:[],
  status: "idle",
  totalItems: 0
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// Filters
export const fetchProductsByFilterAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async ({ filter, sort, pagination }) => {
    const response = await fetchProductsByFilters(filter,sort, pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const fetchBrandsAsync = createAsyncThunk(
      'product/fetchBrands',
      async () => {
        const response = await fetchBrands();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
      }
);
    export const fetchCategoriesAsync = createAsyncThunk(
      'product/fetchCategories',
      async () => {
        const response = await fetchCategories();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
      }
    );

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      })
  },
});

export const { increment } = productsSlice.actions;

// The function below is called a selector and allows us to select a value from the state. Selectors can also be defined inline where they're used instead of in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAllProducts = (state) => state.product.products;
export const selectAllBrands = (state) => state.product.brands;
export const selectAllCategories = (state) => state.product.categories;
export const selectTotalItems = (state) => state.product.totalItems;

// state.reducerName.Whatever we are fetching

export default productsSlice.reducer;
