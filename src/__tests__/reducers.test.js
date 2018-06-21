import rootReducer from "../reducers/products";
import { FETCH_PRODUCTS_SUCCESS } from "../config/constants";

describe("posts reducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual({
      products: {
        isFetching: false,
        items: []
      }
    });
  });
  it("should handle FETCH_PRODUCTS_SUCCESS", () => {
    expect(
      rootReducer(
        {
          products: {
            isFetching: false,
            items: []
          }
        },
        {
          type: FETCH_PRODUCTS_SUCCESS,
          items: ["Item 1", "Item 2"]
        }
      )
    ).toEqual({
      products: {
        isFetching: false,
        items: ["Item 1", "Item 2"]
      }
    });
  });
  it("should handle FETCH_PRODUCTS_SUCCESS with already populated state", () => {
    expect(
      rootReducer(
        {
          products: {
            isFetching: false,
            items: ["Item 1"]
          }
        },
        {
          type: FETCH_PRODUCTS_SUCCESS,
          items: ["Item 2", "Item 3"]
        }
      )
    ).toEqual({
      products: {
        isFetching: false,
        items: ["Item 1", "Item 2", "Item 3"]
      }
    });
  });
});
