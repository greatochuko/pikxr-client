import { useDispatch } from "react-redux";
import { togglemodal } from "../slice/postSlice";
import styles from "./ModalContainer.module.css";
import CreatePostModal from "./CreatePostModal";
import PostViewModal from "./PostViewModal";
import PropTypes from "prop-types";
import LogoutModal from "./LogoutModal";
import CreateStoryModal from "./CreateStoryModal";
import StoryViewModal from "./StoryViewModal";
import SearchModal from "./SearchModal";

export default function ModalContainer({ type, closeModalContainer }) {
  const dispatch = useDispatch();

  // function closeModal(e) {
  //   e.preventDefault();
  //   dispatch(togglemodal());
  // }

  function closeModal(e) {
    e.preventDefault();
    closeModalContainer();
  }

  return (
    <div className={styles.modalContainer} onClick={closeModal}>
      {type === "createPost" ? (
        <CreatePostModal />
      ) : type === "viewPost" ? (
        <PostViewModal />
      ) : type === "logout" ? (
        <LogoutModal />
      ) : type === "createStory" ? (
        <CreateStoryModal />
      ) : type === "viewStory" ? (
        <StoryViewModal />
      ) : type === "search" ? (
        <SearchModal />
      ) : null}
    </div>
  );
}

ModalContainer.propTypes = {
  type: PropTypes.string,
  closeModal: PropTypes.func,
};
