import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./AppLayout.module.css";
import { useSelector } from "react-redux";
import CreatePostModal from "../components/CreatePostModal";

export default function AppLayout() {
  const { createPostModal } = useSelector((state) => state.post);
  return (
    <div className={styles.appLayout}>
      <Navbar />
      <Outlet />
      {createPostModal ? <CreatePostModal /> : null}
      {/* <RightSidebar /> */}
    </div>
  );
}
