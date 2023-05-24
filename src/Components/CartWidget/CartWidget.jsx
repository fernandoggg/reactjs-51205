import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import cart from "./assets/cart.svg"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className="CartImg" src="{cart}" alt="cart-widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget