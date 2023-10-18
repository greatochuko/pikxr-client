import styles from "./Creator.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Creator({ post, className, children }) {
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
        <i className="fa-solid fa-ellipsis-vertical"></i>
        <ul className={styles.optionList}>
          <li>
            <Link> Delete Post</Link>
          </li>
          <li>
            <Link>Goto Post</Link>
          </li>
        </ul>
      </button>
    </div>
  );
}

Creator.propTypes = {
  post: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.element,
};
