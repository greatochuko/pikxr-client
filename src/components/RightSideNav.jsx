import { Link, useLocation } from "react-router-dom";

import styles from "./RightSideNav.module.css";

export default function RightSideNav() {
  const { pathname } = useLocation();
  const modalType = "";

  return (
    <nav className={styles.sideNav}>
      <ul>
        <li className={styles.createPost}>
          <a>
            <i className="fa-solid fa-circle-plus"></i>
          </a>
        </li>
        <li className={styles.settings}>
          <Link
            to="/settings"
            className={pathname === "/settings" ? styles.active : ""}
          >
            <i className="fa-solid fa-gear"></i>
          </Link>
        </li>
        <li>
          <a className={modalType === "logout" ? styles.active : ""}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
