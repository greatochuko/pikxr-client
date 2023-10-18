import styles from "./Creator.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import OptionsButton from "./OptionsButton";

export default function Creator({ post, className }) {
  return (
    <div className={styles.creator + " " + className}>
      <Link>
        <img src={post.creator.imgUrl} alt={post.creator.username} />
        <div className={styles.text}>
          <h4>{post.creator.fullname}</h4>
          <p>@{post.creator.username}</p>
        </div>
      </Link>
      <button className={styles.options}>
        <OptionsButton top={10} right={10} size={24} />
      </button>
    </div>
  );
}

Creator.propTypes = {
  post: PropTypes.object,
  className: PropTypes.string,
};
