import styles from "./Creator.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import OptionsButton from "./OptionsButton";
import { getDuration } from "../utils/getDuration";
import { useState } from "react";
import ModalContainer from "./ModalContainer";

export default function Creator({ post, story, className, setCurrentPost }) {
  const data = post || story;
  const duration = getDuration(data.createdAt);
  const [type, setType] = useState(null);

  function openEditPostModal() {
    setType("editPost");
  }
  function openDeletePostModal() {
    setType("deletePost");
  }

  return (
    <>
      <div className={styles.creator + " " + className}>
        <Link to={"/profile/" + data.creator.username}>
          <img
            src={"http://localhost:5000/users/" + data.creator.imageUrl}
            alt={data.creator.username}
          />
          <div className={styles.text}>
            <h4>
              {data.creator.fullname}
              <span>{duration}</span>
            </h4>

            <p>@{data.creator.username}</p>
          </div>
        </Link>
        <OptionsButton
          openEditPostModal={openEditPostModal}
          openDeletePostModal={openDeletePostModal}
        />
      </div>
      {type && (
        <ModalContainer
          closeModalContainer={() => setType(null)}
          type={type}
          post={post}
          setCurrentPost={setCurrentPost}
        />
      )}
    </>
  );
}

Creator.propTypes = {
  post: PropTypes.object,
  story: PropTypes.object,
  className: PropTypes.string,
};
