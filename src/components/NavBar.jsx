import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import ModalContainer from "./ModalContainer";

import styles from "./NavBar.module.css";

const BASE_URL = "https://pikxr-api.onrender.com";

export default function NavBar() {
  const [modalType, setModalType] = useState(null);

  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.user);

  function closeModalContainer() {
    setModalType(null);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <Link to={"/"} className={styles.logo}>
          <img src="/logo.png" alt="pikxr logo" />
        </Link>
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
            <a onClick={() => setModalType("search")}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li
            className={styles.createPost}
            onClick={() => setModalType("createPost")}
          >
            <a>
              <i className="fa-solid fa-circle-plus"></i>
            </a>
          </li>
          <li>
            <Link
              to="/notifications"
              className={pathname === "/notifications" ? styles.active : ""}
            >
              <i className="fa-solid fa-bell"></i>
            </Link>
          </li>
        </ul>
        <div className={styles.profile}>
          <li className={styles.logout} onClick={() => setModalType("logout")}>
            <a>
              <i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </li>
          <Link to={"/profile/" + user.username}>
            <img src={BASE_URL + "/users/" + user.imageUrl} alt="" />
          </Link>
        </div>
      </nav>
      {modalType ? (
        <ModalContainer
          type={modalType}
          closeModalContainer={closeModalContainer}
        />
      ) : null}
    </>
  );
}
