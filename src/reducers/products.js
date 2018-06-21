import { combineReducers } from "redux";

import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS } from "../config/constants";

function products(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, ...action.items]
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products
});

export default rootReducer;
