import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.png";
import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

function getLinkStyle({ isActive }) {
  return {
    fontSize: "1.2em",
    textDecoration: isActive ? "underline" : undefined,
  };
}

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Codethat Logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/" style={getLinkStyle}>
              홈
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" style={getLinkStyle}>
              커뮤니티
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
