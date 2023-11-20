import { useEffect, useState } from "react";
import Creator from "../components/Creator";
import CommentForm from "../components/CommentForm";
import Comment from "../components/Comment";
import styles from "./PostDetail.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  fetchPost,
  likePost,
  savePost,
  unLikePost,
  unSavePost,
} from "../services/postServices";

export default function PostDetail() {
  const { user } = useSelector((state) => state.user);

  const { postId } = useParams();

  const [post, setPost] = useState(null);
  const isLiked = post?.likes?.includes(user._id);
  const isSaved = post?.saves?.includes(user._id);

  const navigate = useNavigate();

  useEffect(() => {
    async function getPost() {
      const data = await fetchPost(postId);
      setPost(data);
    }
    getPost();
  }, [postId]);

  async function toggleLike() {
    let data;
    if (!isLiked) {
      data = await likePost(post._id, post.creator._id);
      if (data.error) {
        return;
      }
    } else {
      data = await unLikePost(post._id, post.creator._id);
      if (data.error) {
        return;
      }
    }
    setPost(data);
  }

  async function toggleSave() {
    let data;
    if (!isSaved) {
      data = await savePost(post._id);
      if (data.error) {
        return;
      }
    } else {
      data = await unSavePost(post._id);
      if (data.error) {
        return;
      }
    }
    setPost(data);
  }

  console.clear();
  console.log(post);

  if (!post) return <h1>Loading...</h1>;
  return (
    <div className={styles.postDetail} onClick={() => navigate(-1)}>
      <div className={styles.header}>
        <button>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h2>Post</h2>
      </div>
      <div className={styles.post}>
        <Creator post={post} />
        <p className={styles.caption}>{post.caption}</p>
        <div className={styles.images}>
          <img src={post.imageUrl} alt="" />
        </div>
        <div className={styles.actions}>
          <button className={isLiked ? styles.active : ""} onClick={toggleLike}>
            <i className="fa-solid fa-heart"></i> Like
          </button>
          <button>
            <i className="fa-solid fa-retweet"></i> Repost
          </button>
          <button>
            <i className="fa-solid fa-comment-dots"></i> Comment
          </button>
          <button className={isSaved ? styles.active : ""} onClick={toggleSave}>
            <i className="fa-solid fa-bookmark"></i>
          </button>
        </div>
      </div>
      <CommentForm
        postId={post._id}
        creatorId={post.creator._id}
        setCurrentPost={setPost}
      />
      <div className={styles.comments}>
        <ul>
          {post.comments.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              //   setType={setType}
              //   setComments={setComments}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
