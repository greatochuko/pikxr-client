import styles from "./Creator.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import OptionsButton from "./OptionsButton";
import { getDuration } from "../utils/getDuration";
import { useSelector } from "react-redux";

const BASE_URL = "https://tan-wild-raven.cyclic.app";

export default function Creator({ post, story, className, setType, type }) {
  const data = post || story;
  const duration = getDuration(data.createdAt);

  const { user } = useSelector((state) => state.user);

  function openEditPostModal() {
    setType("editPost");
  }

  function openDeletePostModal() {
    if (type === "viewStory") setType("deleteStory");
    else setType("deletePost");
  }

  return (
    <>
      <div className={styles.creator + " " + className}>
        <Link to={"/profile/" + data.creator.username}>
          <img
            src={BASE_URL + "/users/" + data.creator.imageUrl}
            alt={data.creator.username}
          />
          <div className={styles.text}>
            <h4>
              {data.creator.fullname}
              <span style={type === "viewStory" ? { color: "white" } : null}>
                {duration}
              </span>
            </h4>

            <p>@{data.creator.username}</p>
          </div>
        </Link>
        {user._id === data.creator._id ? (
          <OptionsButton
            openEditPostModal={openEditPostModal}
            openDeletePostModal={openDeletePostModal}
            type={type}
          />
        ) : null}
      </div>
    </>
  );
}

Creator.propTypes = {
  post: PropTypes.object,
  story: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string,
  setType: PropTypes.func,
};
