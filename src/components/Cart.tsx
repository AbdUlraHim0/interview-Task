import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../action/cartActions"

const Cart = () => {
  const state = useSelector((state: {}) => state)

  const dispatch = useDispatch()

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <>
      <h1>Cart</h1>
      <div>
        <button onClick={removeFromCartHandler}>Remove</button>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </>
  )
}

export default Cart
