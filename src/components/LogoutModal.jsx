import { logoutUser } from "../slice/userSlice";
import styles from "./LogoutModal.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function LogoutModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    navigate("/login");
    dispatch(logoutUser());
  }

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h3>Logout?</h3>
        <p>Are you sure you want to logout?</p>
      </div>
      <div className={styles.buttons}>
        <button>Cancel</button>
        <button onClick={logout} className={styles.logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
