import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "./AppLayout.module.css";
import { useSelector } from "react-redux";
import ModalContainer from "../components/ModalContainer";

export default function AppLayout() {
  const { modalIsOpen, modalType } = useSelector((state) => state.post);
  return (
    <div className={styles.appLayout}>
      <Navbar />
      <Outlet />
      {modalIsOpen ? (
        modalType === "createPost" ? (
          <ModalContainer type="createPost" />
        ) : modalType === "viewPost" ? (
          <ModalContainer type="viewPost" />
        ) : null
      ) : null}
      {/* <RightSidebar /> */}
    </div>
  );
}
