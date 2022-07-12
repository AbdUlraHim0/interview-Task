export const cartReducer = (
  state = { cartItems: [] },
  action = { type: null as any }
) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action

      const existItem = state.cartItems.find((x) => x === item)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x === existItem ? item : x)),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x !== action),
      }
  }
}
