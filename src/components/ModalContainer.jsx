import styles from "./ModalContainer.module.css";
import CreatePostModal from "./CreatePostModal";
import PostViewModal from "./PostViewModal";
import propTypes from "prop-types";
import LogoutModal from "./LogoutModal";
import CreateStoryModal from "./CreateStoryModal";
import StoryViewModal from "./StoryViewModal";
import SearchModal from "./SearchModal";
import FollowersModal from "./FollowersModal";

export default function ModalContainer({
  type,
  closeModalContainer,
  post,
  story,
  username,
}) {
  return (
    <div className={styles.modalContainer} onClick={closeModalContainer}>
      {type === "createPost" ? (
        <CreatePostModal closeModalContainer={closeModalContainer} />
      ) : type === "viewPost" ? (
        <PostViewModal post={post} />
      ) : type === "logout" ? (
        <LogoutModal />
      ) : type === "createStory" ? (
        <CreateStoryModal closeModalContainer={closeModalContainer} />
      ) : type === "viewStory" ? (
        <StoryViewModal
          story={story}
          closeModalContainer={closeModalContainer}
        />
      ) : type === "search" ? (
        <SearchModal />
      ) : type === "followers" ? (
        <FollowersModal
          username={username}
          closeModalContainer={closeModalContainer}
          type={"followers"}
        />
      ) : type === "following" ? (
        <FollowersModal
          username={username}
          closeModalContainer={closeModalContainer}
          type={"following"}
        />
      ) : null}
    </div>
  );
}

ModalContainer.propTypes = {
  type: propTypes.string,
  closeModalContainer: propTypes.func,
  post: propTypes.object,
  story: propTypes.object,
  username: propTypes.string,
};
