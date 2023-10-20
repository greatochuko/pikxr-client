import { Link, useLocation } from "react-router-dom";

import { togglemodal } from "../slice/postSlice";

import styles from "./RightSideNav.module.css";
import { useDispatch } from "react-redux";

export default function RightSideNav() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const modalType = "";

  return (
    <nav className={styles.sideNav}>
      <ul>
        <li
          className={styles.createPost}
          onClick={() => dispatch(togglemodal("createPost"))}
        >
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
        <li onClick={() => dispatch(togglemodal("logout"))}>
          <a className={modalType === "logout" ? styles.active : ""}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
