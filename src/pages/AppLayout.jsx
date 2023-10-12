import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <div className={styles.mainArea}>
        <nav>
          <ul>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Signup</Link>
            <Link to={"/profile"}>{user.name}</Link>

            <Link to={"/"}>Home</Link>
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}
