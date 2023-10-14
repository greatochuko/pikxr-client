import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import MainNav from "../components/mainNav";

export default function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <div className={styles.mainArea}>
        <MainNav />
        <Outlet />
      </div>
    </div>
  );
}
