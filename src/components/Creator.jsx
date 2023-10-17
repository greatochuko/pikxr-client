import styles from "./Creator.module.css";

export default function Creator({ post, className }) {
  return (
    <div className={styles.creator + " " + className}>
      <img src={post.creator.imgUrl} alt={post.creator.username} />
      <h4>@{post.creator.username}</h4>
      <div className={styles.options}></div>
    </div>
  );
}
