import * as types from "./actionTypes";

const initstore = {
  Allproducts: [],
  products: [],
  cart: [],
  filter: [],
};

export const reducer = (store = initstore, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCTS:
      return {
        ...store,
        products: payload,
        Allproducts: payload,
      };

    case types.ADD_CART:
      console.log(payload);
      return { ...store, cart: [...store.cart, { ...payload }] };

    case types.REMOVE_CART:
      return {
        ...store,
        cart: store.cart.filter((c) => c.id !== payload),
      };

    case types.SEARCH_PRODUCTS:
      console.log("reducer", payload);
      if (payload === "") {
        return { ...store, products: store.Allproducts };
      } else {
        return {
          ...store,
          products: store.Allproducts.filter(
            (d) =>
              d.color.toLowerCase() === payload ||
              d.name.toLowerCase() === payload ||
              d.type.toLowerCase() === payload
          ),
        };
      }

    case types.SET_FILTER: {
      console.log("filter", payload);

      if (payload === "small") {
        return {
          ...store,
          products: store.products.filter((f) => f.price <= 250),
        };
      } else if (payload === "medium") {
        return {
          ...store,
          products: store.products.filter(
            (f) => f.price > 250 && f.price <= 450
          ),
        };
      } else if (payload === "high") {
        return {
          ...store,
          products: store.products.filter((f) => f.price > 450),
        };
      } else {
        return {
          ...store,
          products: store.products.filter(
            (f) =>
              f.color === payload || f.type === payload || f.gender === payload
          ),
        };
      }
    }

    default:
      return store;
  }
};
