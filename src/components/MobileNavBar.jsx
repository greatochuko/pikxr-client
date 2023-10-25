import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ModalContainer from "./ModalContainer";

import styles from "./MobileNavBar.module.css";

export default function MobileNavBar() {
  const [modalType, setModalType] = useState(null);

  const { pathname } = useLocation();

  function closeModalContainer() {
    setModalType(null);
  }

  return (
    <>
      <nav className={styles.navbar}>
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
