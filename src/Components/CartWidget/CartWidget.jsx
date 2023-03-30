import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const CartWidget = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faCoffee}/>
            <span>5</span>
        </div>
    )
}

export default CartWidget