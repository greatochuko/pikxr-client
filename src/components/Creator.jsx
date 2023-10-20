import styles from "./Creator.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import OptionsButton from "./OptionsButton";
import { getDuration } from "../utils/getDuration";

export default function Creator({ post, story, className }) {
  const data = post || story;
  const duration = getDuration(data.createdAt);

  return (
    <div className={styles.creator + " " + className}>
      <Link>
        <img src={data.creator.imageUrl} alt={data.creator.username} />
        <div className={styles.text}>
          <h4>
            {data.creator.fullname}
            <span>{duration}</span>
          </h4>

          <p>@{data.creator.username}</p>
        </div>
      </Link>
      <OptionsButton top={1} right={10} size={20} />
    </div>
  );
}

Creator.propTypes = {
  post: PropTypes.object,
  story: PropTypes.object,
  className: PropTypes.string,
};
