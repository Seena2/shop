import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "../styles/Header.module.css";

function MenuLinks({ cartItemsCount }) {
  return (
    <div className="menu">
      {/* Links */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="cart">
        <span>Cart</span>
        <div className="cart-icon">{cartItemsCount}</div>
      </NavLink>
    </div>
  );
}
const Header = ({ cartItemsCount }) => {
  return (
    <header className={styles.navbar}>
      {/* Other header elements */}
      <h1>Seena2 Shop </h1>
      <nav>
        <MenuLinks cartItemsCount={cartItemsCount} />
      </nav>
    </header>
  );
};

export default Header;
