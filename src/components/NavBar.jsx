import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";

export default function NavBar() {
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.user);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="logo.png" alt="pikxr logo" />
      </div>
      <ul>
        <li className={pathname === "/" ? styles.active : ""}>
          <Link to={"/"}>
            <i className="fa-solid fa-house"></i>
          </Link>
        </li>
        <li className={pathname === "/explore" ? styles.active : ""}>
          <Link to={"/explore"}>
            <i className="fa-solid fa-compass"></i>
          </Link>
        </li>
        <li>
          <Link>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </li>
      </ul>
      <div className={styles.profile}>
        <img src={"http://localhost:5000/" + user.imageUrl} alt="" />
      </div>
    </nav>
  );
}
