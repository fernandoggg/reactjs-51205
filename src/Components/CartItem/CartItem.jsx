import { useContext} from 'react';
import { CartContext } from "../../context/CartContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons'

const CartItem = (props) => {
    const [ title, img, price, quantity ] = props 
    const { removeToCart } = useContext(CartContext)
    // console.log (props)
    const  removeThisItem = () => {
        removeToCart(props.id);
    }

    return (
        <div className='CardContainers'>
                <img className='card-img' src={img} />
                    <h2 className='CardCenter'>{title}</h2>
                    <h3 className='CardCenter'>
                        some quick example......
                    </h3>
                    <h2 className='CardCenter'>
                        {quantity}
                    </h2>
                    <h2 className='CardCenter'>
                        {price}
                    </h2>
                    <button size='40' variant='outling.light' onClick={removeThisItem}>
                        <FontAwesomeIcon icon={faDeleteLeft} style={{color:'aff00000'}} className='Boton'/>
                    </button>
        </div>
    )
}
 export default CartItem 