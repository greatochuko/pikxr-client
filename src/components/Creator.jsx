import styles from "./Creator.module.css";
import PropTypes from "prop-types";


export default function Creator({ post, className }) {
  return (
    <div className={styles.creator + " " + className}>
      <img src={post.creator.imgUrl} alt={post.creator.username} />
      <h4>@{post.creator.username}</h4>
      <div className={styles.options}></div>
    </div>
  );
}

Creator.propTypes = {
  post: PropTypes.object,
  className: PropTypes.string
}