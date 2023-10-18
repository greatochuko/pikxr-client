import styles from "./Creator.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import OptionsButton from "./OptionsButton";
import { getDuration } from "../utils/getDuration";

export default function Creator({ post, className }) {
  const duration = getDuration(post.createdAt);

  return (
    <div className={styles.creator + " " + className}>
      <Link>
        <img src={post.creator.imgUrl} alt={post.creator.username} />
        <div className={styles.text}>
          <h4>
            {post.creator.fullname}
            <span>{duration}</span>
          </h4>

          <p>@{post.creator.username}</p>
        </div>
      </Link>
      <OptionsButton top={10} right={10} size={20} />
    </div>
  );
}

Creator.propTypes = {
  post: PropTypes.object,
  className: PropTypes.string,
};
