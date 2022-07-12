import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const Products = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products")
      setProducts(data)
    }
    fetchProduct()
  }, [])

  const addToCartHandler = (id, qty) => {
    dispatch({
      type: "ADD_TO_CART",
      action: id,
      qty,
    })
  }

  return (
    <>
      <h1>Products</h1>

      <div>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </>
  )
}

export default Products
