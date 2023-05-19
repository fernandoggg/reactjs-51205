import { REACT, useContext} from 'react';
import { CartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const CartItem = (props) => {
    const [ title, image, price, quantity ] = props 
    const { removeToCart } = useContext(CartContext)

    const  removeThisItem = () => {
        removeToCart(props.id);
    }

    return (
        <div className='Containers'>
                    <button size='50' variant='outline.light' onClick={removeThisItem}>
                    <FontAwesomeIcon icon={faCoffee} className='icono'/>
                    </button>
        </div>
    )
}
 export default CartItem 