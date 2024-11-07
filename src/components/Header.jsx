import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "../styles/Header.module.css";

function MenuLinks({ cartItemsCount }) {
  return (
    <div className={styles.menuLinks}>
      {/* Links */}

      <NavLink to="/" className={styles.menuItem}>
        Home
      </NavLink>
      <NavLink to="products" className={styles.menuItem}>
        Products
      </NavLink>
      <NavLink to="cart" className={styles.menuItem}>
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
