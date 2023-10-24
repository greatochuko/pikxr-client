import styles from "./ModalContainer.module.css";
import CreatePostModal from "./CreatePostModal";
import PostViewModal from "./PostViewModal";
import propTypes from "prop-types";
import LogoutModal from "./LogoutModal";
import CreateStoryModal from "./CreateStoryModal";
import StoryViewModal from "./StoryViewModal";
import SearchModal from "./SearchModal";
import FollowersModal from "./FollowersModal";
import DeleteModal from "./DeleteModal";

export default function ModalContainer({
  type,
  closeModalContainer,
  post,
  story,
  username,
  updateMasonryGridPost,
  setCurrentPost,
  setType,
  setPosts,
}) {
  return (
    <div className={styles.modalContainer} onClick={closeModalContainer}>
      {type === "createPost" ? (
        <CreatePostModal closeModalContainer={closeModalContainer} />
      ) : type === "editPost" ? (
        <CreatePostModal
          closeModalContainer={closeModalContainer}
          postImgSrc={`http://localhost:5000/posts/${post.imageUrl}`}
          postImgCaption={post.caption}
          postId={post._id}
          setCurrentPost={setCurrentPost}
        />
      ) : type === "viewPost" ? (
        <PostViewModal
          setType={setType}
          post={post}
          updateMasonryGridPost={updateMasonryGridPost}
          setCurrentPost={setCurrentPost}
        />
      ) : type === "logout" ? (
        <LogoutModal />
      ) : type === "deletePost" ? (
        <DeleteModal
          type={type}
          closeModalContainer={closeModalContainer}
          postId={post._id}
          setPosts={setPosts}
        />
      ) : type === "deleteStory" ? (
        <DeleteModal
          type={type}
          closeModalContainer={closeModalContainer}
          storyId={story._id}
        />
      ) : type === "createStory" ? (
        <CreateStoryModal closeModalContainer={closeModalContainer} />
      ) : type === "viewStory" ? (
        <StoryViewModal
          story={story}
          type={type}
          setType={setType}
          closeModalContainer={closeModalContainer}
        />
      ) : type === "search" ? (
        <SearchModal closeModalContainer={closeModalContainer} />
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
  updateMasonryGridPost: propTypes.func,
  setType: propTypes.func,
  setCurrentPost: propTypes.func,
  setPosts: propTypes.func,
  post: propTypes.object,
  story: propTypes.object,
  stories: propTypes.array,
  setStories: propTypes.func,
  username: propTypes.string,
};
