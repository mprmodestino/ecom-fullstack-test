import "cross-fetch/polyfill";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  API_URL
} from "../config/constants";

export function requestProducts() {
  return {
    type: FETCH_PRODUCTS
  };
}

export function receiveProducts(products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    items: products
  };
}

function receiveProductsError(error) {
  return {
    type: FETCH_PRODUCTS_FAIL,
    error: error
  };
}

function shouldFetchProducts(state) {
  const { items, isFetching } = state.products;
  console.log(items, isFetching);
  if (!items.length) {
    return true;
  } else if (isFetching) {
    return false;
  }
}

export function fetchProducts() {
  return dispatch => {
    dispatch(requestProducts());
    return fetch(API_URL)
      .then(res => res.json())
      .then(body => dispatch(receiveProducts(body)))
      .catch(error => dispatch(receiveProductsError(error)));
  };
}

export function fetchProductsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchProducts(getState())) {
      return dispatch(fetchProducts());
    }
  };
}
