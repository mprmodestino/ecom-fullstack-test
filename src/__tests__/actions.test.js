import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as actions from "../actions/products";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  API_URL
} from "../config/constants";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Actions", () => {
  it("should create an action to fetch the products list", () => {
    const expectedAction = {
      type: FETCH_PRODUCTS
    };
    expect(actions.requestProducts()).toEqual(expectedAction);
  });
  it("should create an action with the products list", () => {
    const expectedAction = {
      type: FETCH_PRODUCTS_SUCCESS,
      items: ["Item 1", "Item 2"]
    };
    expect(actions.receiveProducts(["Item 1", "Item 2"])).toEqual(
      expectedAction
    );
  });
});

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates FETCH_TODOS_SUCCESS when fetching products has been done", () => {
    fetchMock.getOnce(API_URL, [
      {
        title: "Simple Canvas",
        description: "Lets your pictures speak for themselves.",
        image: {
          path: "/images/product.jpg",
          alt: "Simple Canvas"
        },
        price: 1500,
        currency: "£",
        priceLabel: "From",
        productLabel: "bestseller",
        cta: "Shop Now",
        ctaLink: "/random/link/to/no/where"
      },
      {
        title: "Collage Canvas",
        description:
          "Can't choose just one pic? Put your favourite photos on one canvas - a collage.",
        image: {
          path: "/images/product.jpg",
          alt: "Collage Canvas"
        },
        price: 2500,
        currency: "£",
        priceLabel: "From",
        productLabel: "",
        cta: "Shop Now",
        ctaLink: "/random/link/to/no/where"
      }
    ]);

    const expectedActions = [
      { type: FETCH_PRODUCTS },
      {
        type: FETCH_PRODUCTS_SUCCESS,
        items: [
          {
            title: "Simple Canvas",
            description: "Lets your pictures speak for themselves.",
            image: {
              path: "/images/product.jpg",
              alt: "Simple Canvas"
            },
            price: 1500,
            currency: "£",
            priceLabel: "From",
            productLabel: "bestseller",
            cta: "Shop Now",
            ctaLink: "/random/link/to/no/where"
          },
          {
            title: "Collage Canvas",
            description:
              "Can't choose just one pic? Put your favourite photos on one canvas - a collage.",
            image: {
              path: "/images/product.jpg",
              alt: "Collage Canvas"
            },
            price: 2500,
            currency: "£",
            priceLabel: "From",
            productLabel: "",
            cta: "Shop Now",
            ctaLink: "/random/link/to/no/where"
          }
        ]
      }
    ];
    const store = mockStore({ products: [] });
    return store.dispatch(actions.fetchProducts()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
