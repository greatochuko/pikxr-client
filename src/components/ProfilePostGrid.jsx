import { useSelector } from "react-redux";
import styles from "./ProfilePostGrid.module.css";
import ProfilePost from "./ProfilePost";
import propTypes from "prop-types";

export default function ProfilePostGrid({ type }) {
  const { posts } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.user);

  let filteredPosts = posts;

  if (type === "posts") {
    filteredPosts = posts.filter((p) => p.creator._id === user._id);
  } else if (type === "liked") {
    filteredPosts = posts.filter((p) => user.likedPosts.includes(p._id));
  } else if (type === "saved") {
    filteredPosts = posts.filter((p) => user.savedPosts.includes(p._id));
  }

  return (
    <div className={styles.postGrid}>
      {filteredPosts.map((post) => (
        <ProfilePost post={post} key={post._id} />
      ))}
    </div>
  );
}

ProfilePostGrid.propTypes = {
  type: propTypes.string,
};
