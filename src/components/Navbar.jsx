import { Link } from "react-router-dom";
import wisteria from "../assets/wisteria.jpeg";
import "../css/NavBar.css"

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <img src={wisteria} alt="Wisteria" className="navbar-logo"/>
            <Link to ="/" className="brand-name">Wisteria Lane</Link>
        </div>
        <div className="navbar-links">
            <Link to ="/shop" className="nav-link">Shop</Link>
            <Link to ="/cart" className="nav-button">Cart</Link>
        </div>
    </nav>
}

export default NavBar