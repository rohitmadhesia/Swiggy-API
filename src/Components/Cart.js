import { useSelector } from "react-redux"
import ListCategory from "./ListCategory"
import { useDispatch } from "react-redux"
import { removeItem } from "../Utilites/cartSlice"

const Cart = () => {

    const dispatchRemove = useDispatch()

 const handleClear = () => {
    dispatchRemove(removeItem())


 }

    const cartItems = useSelector((store) => store.cart.items)
    return(
        <div className="text-center m-4 p-4">
              <h1 className="text-2xl">Cart</h1>
              <div className="w-6/12 m-auto">
              <button className="pl-3 pr-3 bg-pink-400 rounded-lg" onClick={handleClear}>clear cart</button>
              {cartItems.length === 0 && (<h1>your cart is empty</h1>)}
              <ListCategory item={cartItems}/>
              </div>
        </div>
    )
}

export default Cart