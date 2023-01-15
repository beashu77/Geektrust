import * as types from "./actionTypes";

export const getProducts = () => (dispatch) => {
  fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  )
    .then((res) => res.json())
    .then((res) => {
      return dispatch({
        type: types.GET_PRODUCTS,
        payload: res,
      });
    });
};

export const searchProducts = (payload) => (dispatch) => {
 
  return dispatch({
    type: types.SEARCH_PRODUCTS,
    payload: payload,
  });
};

export const addCart = (payload) => (dispatch) => {
  return dispatch({
    type: types.ADD_CART,
    payload: payload,
  });
};

export const removeCart = (payload) => (dispatch) => {
  return dispatch({
    type: types.REMOVE_CART,
    payload: payload,
  });
};

export const setFilter =(payload)=>(dispatch)=>{
  return dispatch({
    type:types.SET_FILTER,
    payload:payload

  })
}
