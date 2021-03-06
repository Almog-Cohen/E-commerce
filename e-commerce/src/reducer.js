export const initialState = {
  basket: [],
  user: null,
  copun: false,
  searchText: "",
};

//Selector
// export const getBasketTotalPrice = (basket,copun) =>
//   basket?.reduce((accu, basketItem) => accu + basketItem.price, 0);

export const getBasketTotalPrice = (basket, copun) => {
  const totalPrice = basket?.reduce(
    (accu, basketItem) => accu + basketItem.price,
    0
  );

  return copun ? totalPrice * 0.8 : totalPrice;
};

// Add items by action
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // Remove item by action
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("There is no product id");
      }
      return {
        ...state,
        basket: newBasket,
      };

    // Clear basket list
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "ADD_COPUN":
      return {
        ...state,
        copun: action.copun,
      };

    case "SEARCH_ITEM":
      return {
        ...state,
        searchText: action.searchText,
      };

    // Setting user with firebase auth
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
