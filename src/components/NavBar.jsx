import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ModalContainer from "./ModalContainer";

import styles from "./NavBar.module.css";
import { fetchUser } from "../services/userServices";
import { loginUser, logoutUser } from "../slice/userSlice";
import { openModal } from "../slice/modalSlice";

export default function NavBar() {
  const [modalType, setModalType] = useState(null);

  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function closeModalContainer() {
    setModalType(null);
    const data = await fetchUser();
    if (data.error === "jwt expired") {
      dispatch(logoutUser());
      navigate("/login");
    }
    dispatch(loginUser(data));
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
          <li
            className={styles.logout}
            onClick={() => dispatch(openModal({ type: "logout" }))}
          >
            <a>
              <i className="fa-solid fa-right-from-bracket"></i>
            </a>
          </li>
          <Link to={"/profile/" + user.username}>
            <img src={user.imageUrl} alt="" />
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
