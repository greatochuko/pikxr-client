import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import MainNav from "../components/MainNav";
import styles from "./AppLayout.module.css";
import { useSelector } from "react-redux";
import ModalContainer from "../components/ModalContainer";

export default function AppLayout() {
  const { modalIsOpen, modalType } = useSelector((state) => state.post);
  return (
    <div className={styles.appLayout}>
      <MainNav />
      <SideNav />
      <Outlet />
      {modalIsOpen ? <ModalContainer type={modalType} /> : null}
    </div>
  );
}
