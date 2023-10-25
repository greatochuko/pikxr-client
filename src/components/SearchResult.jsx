import { Link } from "react-router-dom";
import styles from "./SearchResult.module.css";
import propTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { fetchUnFollowUser, fetchfollowUser } from "../services/userServices";

const BASE_URL = "http://192.168.0.101:5000";

export default function SearchResult({ result, closeModalContainer }) {
  const { user } = useSelector((state) => state.user);
  const [isFollowing, setIsFollowing] = useState(
    user.following.includes(result._id)
  );

  async function toggleFollow(e) {
    e.preventDefault();
    if (isFollowing) await fetchUnFollowUser(user._id, result._id);
    else if (!isFollowing) await fetchfollowUser(user._id, result._id);
    setIsFollowing((curr) => !curr);
  }

  return (
    <li className={styles.result} key={result._id}>
      <Link to={"/profile/" + result.username} onClick={closeModalContainer}>
        <img src={BASE_URL + "/users/" + result.imageUrl} alt="" />
        <div className={styles.resultDetails}>
          <h3>{result.fullname}</h3>
          <p>
            @{result.username + " - "}
            <span>
              {result.followers.length}
              {result.followers.length > 1 ? " Followers" : " Follower"}
            </span>
          </p>
        </div>
        {user._id === result._id ? null : (
          <button onClick={toggleFollow}>
            {isFollowing ? "UnFollow" : "Follow"}
          </button>
        )}
      </Link>
    </li>
  );
}

SearchResult.propTypes = {
  result: propTypes.object,
  closeModalContainer: propTypes.func,
};
