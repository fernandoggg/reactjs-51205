import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>Ecomerce</h3>
            <div>
                <button>Home</button>
                <button>Nosotros</button>
                <button>Tienda</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar