import styles from "./ProfilePostGrid.module.css";
import ProfilePost from "./ProfilePost";
import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { fetchPosts } from "../services/postServices";

export default function ProfilePostGrid({ username, user }) {
  const [posts, setPosts] = useState(null);
  const [activeTab, setActiveTab] = useState("posts");

  useEffect(() => {
    async function refreshPosts() {
      setPosts(await fetchPosts());
    }
    refreshPosts();
  }, []);

  let filteredPosts = posts;

  if (posts && activeTab === "posts") {
    filteredPosts = posts.filter((p) => p.creator.username === username);
  } else if (posts && activeTab === "liked") {
    filteredPosts = posts.filter((p) => user.likedPosts.includes(p._id));
  } else if (posts && activeTab === "saved") {
    filteredPosts = posts.filter((p) => user.savedPosts.includes(p._id));
  }

  return (
    <div className={styles.posts}>
      <div className={styles.header}>
        <ul>
          <li
            onClick={() => setActiveTab("posts")}
            className={activeTab === "posts" ? styles.active : ""}
          >
            Posts
          </li>
          <li
            onClick={() => setActiveTab("liked")}
            className={activeTab === "liked" ? styles.active : ""}
          >
            Liked
          </li>
          <li
            onClick={() => setActiveTab("saved")}
            className={activeTab === "saved" ? styles.active : ""}
          >
            Saved
          </li>
        </ul>
      </div>
      <div className={styles.postGrid}>
        {filteredPosts?.map((post) => (
          <ProfilePost post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

ProfilePostGrid.propTypes = {
  username: propTypes.string,
  user: propTypes.string,
};
