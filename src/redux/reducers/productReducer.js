import { ActionsTypes } from "../contants/action-type";
const intialState = {
  products: [],
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionsTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionsTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};