import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import MainNav from "../components/MainNav";
import styles from "./AppLayout.module.css";
import { useSelector } from "react-redux";
import ModalContainer from "../components/ModalContainer";
import NavBar from "../components/NavBar";

export default function AppLayout() {
  const { modalIsOpen, modalType } = useSelector((state) => state.post);
  return (
    <div className={styles.appLayout}>
      {/* <MainNav /> */}
      {/* <SideNav /> */}
      <NavBar />
      <Outlet />
      {modalIsOpen ? <ModalContainer type={modalType} /> : null}
    </div>
  );
}
