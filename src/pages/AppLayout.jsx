import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import NavBar from "../components/NavBar";

export default function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <NavBar />
      <Outlet />
    </div>
  );
}
