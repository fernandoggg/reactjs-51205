import { REACT, useContext} from 'react';
import { CartContext } from "../../context/CartContext"

const CartItem = (props) => {
    const [ title, image, price, quantity ] = props 
    const { removeToCart } = useContext(CartContext)

    const  removeThisItem = () => {
        removeToCart(props.id);
    }

    return (
        <div className='CardContainers'>
            <Card className='CardCont'>
                <Card.img className='card-img' src={image}/>
                <Card.Body className='CardBody'>
                    <Card.title className='CardCenter'>{title}</Card.title>
                    <Card.text className='CardCenter'> sara sarsa sasra</Card.text>
                    <Card.text className='CardCenter'>{quantity}</Card.text>
                    <Card.text className='CardCenter'>${price}</Card.text>
                    <button size='50' variant='outline.light' onClick={removeThisItem}>
                    <FontAwesomeIcon icon={faCoffee} className='icono'/>
                    </button>
                </Card.Body>
            </Card>
        </div>
    )
}
 export default CartItem; 