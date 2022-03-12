import * as actionTypes from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      console.log(item);

      const existItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existItem) {
        return;
      } else {
        let a = { ...state, cartItems: [...state.cartItems, item] };

        return a;
      }
    case actionTypes.REMOVE_FROM_CART:
      
      let s = {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product._id !== action.payload
        ),
      };
      
      return s;

    default:
      return state;
  }
};
