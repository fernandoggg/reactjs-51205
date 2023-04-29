import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link} from "react-router-dom"
const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
                <h3>Ecomerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/celulares`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                <NavLink to={`/category/nosotros`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Nosotros</NavLink>
                {/* <button>Home</button>
                <button>Nosotros</button>
                <button>Tienda</button> */}
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar