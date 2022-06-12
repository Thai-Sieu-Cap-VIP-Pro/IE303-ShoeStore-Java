import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h2>OnlineShop</h2>
      </Link>
      <Link to="/cart">
        <div className="nav-shopping">
          <div className="shopping-cart">🛒</div>
          <span className="shopping-quantity">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
