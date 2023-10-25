import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import { useSelector } from "react-redux";
import ModalContainer from "../components/ModalContainer";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";

export default function AppLayout() {
  const { modalIsOpen, modalType } = useSelector((state) => state.post);
  return (
    <div className={styles.appLayout}>
      <NavBar />
      <Outlet />
      <MobileNavBar />
      {modalIsOpen ? <ModalContainer type={modalType} /> : null}
    </div>
  );
}
