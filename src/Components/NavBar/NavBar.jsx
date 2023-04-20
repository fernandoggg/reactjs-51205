import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link} from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecomerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/home`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Home</NavLink>
                <NavLink to={`/category/nosotros`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Nosotros</NavLink>
                <NavLink to={`/category/tienda`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tienda</NavLink>
                {/* <button>Home</button>
                <button>Nosotros</button>
                <button>Tienda</button> */}
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar