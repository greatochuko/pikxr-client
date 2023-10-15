import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./AppLayout.module.css";
import MainNav from "../components/mainNav";
import RightSidebar from "../components/Sidebar";

export default function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Navbar />
      <div className={styles.mainArea}>
        {/* <MainNav /> */}
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  );
}
