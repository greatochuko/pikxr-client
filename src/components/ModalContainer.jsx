import { useDispatch } from "react-redux";
import { togglemodal } from "../slice/postSlice";
import styles from "./ModalContainer.module.css";
import CreatePostModal from "./CreatePostModal";
import PostViewModal from "./PostViewModal";

export default function ModalContainer({ type }) {
  const dispatch = useDispatch();

  function closeModal(e) {
    e.preventDefault();
    dispatch(togglemodal());
  }

  return (
    <div className={styles.modalContainer} onClick={closeModal}>
      {type === "createPost" ? (
        <CreatePostModal />
      ) : type === "viewPost" ? (
        <PostViewModal />
      ) : null}
    </div>
  );
}
