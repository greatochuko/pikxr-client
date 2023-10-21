import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { togglemodal } from "../slice/postSlice";
import { useState } from "react";
import ModalContainer from "./ModalContainer";

export default function NavBar() {
  const [modalIsOpen, setModalIsOpen] = useState();

  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
            <a onClick={() => setModalIsOpen(true)}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
          </li>
          <li
            className={styles.createPost}
            onClick={() => dispatch(togglemodal("createPost"))}
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
          <Link to={"/profile/" + user.username}>
            <img src={"http://localhost:5000/" + user.imageUrl} alt="" />
          </Link>
        </div>
      </nav>
      {modalIsOpen ? (
        <ModalContainer type={"search"} closeModalContainer={setModalIsOpen} />
      ) : null}
    </>
  );
}
