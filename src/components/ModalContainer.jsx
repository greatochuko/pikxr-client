import styles from "./ModalContainer.module.css";
import CreatePostModal from "./CreatePostModal";
import propTypes from "prop-types";
import LogoutModal from "./LogoutModal";
import CreateStoryModal from "./CreateStoryModal";
import StoryViewModal from "./StoryViewModal";
import SearchModal from "./SearchModal";
import FollowersModal from "./FollowersModal";
import DeleteModal from "./DeleteModal";
import EditPostModal from "./EditPostModal";
import { closeModal } from "../slice/modalSlice";
import { useDispatch } from "react-redux";

const modalComponent = {
  createPost: <CreatePostModal />,
  editPost: <EditPostModal />,
  logout: <LogoutModal />,
  deletePost: <DeleteModal />,
  deleteStory: <DeleteModal />,
  deleteComment: <DeleteModal />,
  createStory: <CreateStoryModal />,
  viewStory: <StoryViewModal />,
  search: <SearchModal />,
  followers: <FollowersModal />,
  following: <FollowersModal />,
};

export default function ModalContainer({ type }) {
  const dispatch = useDispatch();
  console.log(type);

  return (
    <div
      className={styles.modalContainer}
      onClick={() => dispatch(closeModal())}
    >
      {modalComponent[type]}
    </div>
  );
}

ModalContainer.propTypes = {
  type: propTypes.string,
  closeModalContainer: propTypes.func,
  updateMasonryGridPost: propTypes.func,
  setType: propTypes.func,
  setCurrentPost: propTypes.func,
  setPosts: propTypes.func,
  post: propTypes.object,
  story: propTypes.object,
  userProfile: propTypes.object,
  stories: propTypes.array,
  setStories: propTypes.func,
  setComments: propTypes.func,
  username: propTypes.string,
};
