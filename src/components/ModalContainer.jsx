import { useDispatch } from "react-redux";
import { toggleCreatePostModal } from "../slice/postSlice";
import styles from "./ModalContainer.module.css";
import CreatePostModal from "./CreatePostModal";

export default function ModalContainer() {
  const dispatch = useDispatch();

  function closeModal(e) {
    e.preventDefault();
    dispatch(toggleCreatePostModal());
  }

  return (
    <div className={styles.modalContainer} onClick={closeModal}>
      <CreatePostModal />
    </div>
  );
}
