import { Link, useParams } from "react-router-dom";
import styles from "./Follower.module.css";
import { useSelector } from "react-redux";
import { fetchUnFollowUser, fetchfollowUser } from "../services/userServices";
import propTypes from "prop-types";
import { useState } from "react";

const BASE_URL = "https://pikxr-api.onrender.com";

export default function Follower({ closeModalContainer, follower, type }) {
  const { user } = useSelector((state) => state.user);
  const { username } = useParams();
  let following = true;
  if (type === "followers") {
    following = user.following.includes(follower._id);
  }

  const [isFollowing, setIsFollowing] = useState(following);

  async function toggleFollow(e) {
    e.preventDefault();
    if (isFollowing) await fetchUnFollowUser(user._id, follower._id);
    else if (!isFollowing) await fetchfollowUser(user._id, follower._id);
    setIsFollowing((curr) => !curr);
  }

  return (
    <li className={styles.follower} key={follower._id}>
      <Link to={"/profile/" + follower.username}>
        <img src={BASE_URL + "/users/" + follower.imageUrl} alt="" />
        <div className={styles.info}>
          <p>{follower.fullname}</p>
          <p>@{follower.username}</p>
        </div>
        {user.username === username ? (
          <button onClick={toggleFollow}>
            {isFollowing ? "Unfollow" : "Follow"}
          </button>
        ) : null}
      </Link>
    </li>
  );
}

Follower.propTypes = {
  follower: propTypes.object,
  type: propTypes.string,
  closeModalContainer: propTypes.func,
};
