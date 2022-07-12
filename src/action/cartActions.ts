export const addToCart = (id, qty) => async (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: {
      product: id,
      qty,
    },
  })
}

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: {
      product: id,
    },
  })
}
