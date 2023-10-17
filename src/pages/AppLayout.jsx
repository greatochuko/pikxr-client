import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MainNav from "../components/MainNav";
import styles from "./AppLayout.module.css";
import { useSelector } from "react-redux";
import ModalContainer from "../components/ModalContainer";

export default function AppLayout() {
  const { modalIsOpen, modalType } = useSelector((state) => state.post);
  return (
    <div className={styles.appLayout}>
      <MainNav />
      <Navbar />
      <Outlet />
      {modalIsOpen ? <ModalContainer type={modalType} /> : null}
    </div>
  );
}
