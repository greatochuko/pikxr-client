import { useDispatch } from "react-redux";
import styles from "./CreatePostModal.module.css";
import { toggleCreatePostModal } from "../slice/postSlice";

export default function CreatePostModal() {
  const dispatch = useDispatch();

  function closeModal(e) {
    e.preventDefault();
    dispatch(toggleCreatePostModal());
  }

  return (
    <div className={styles.modalContainer} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}></div>
    </div>
  );
}
