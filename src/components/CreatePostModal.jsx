import { useDispatch, useSelector } from "react-redux";
import styles from "./CreatePostModal.module.css";
import { setPosts } from "../slice/postSlice";
import { useState } from "react";
import { createPost, fetchPosts } from "../services/postServices";

export default function CreatePostModal() {
  const dispatch = useDispatch();
  const [post, setPost] = useState({ caption: "", image: "" });
  const [img, setImg] = useState("");
  const { user } = useSelector((state) => state.user);

  function handleChange(e) {
    e.preventDefault();
    setPost((curr) => ({
      ...curr,
      [e.target.name]: e.target.files ? e.target?.files[0] : e.target.value,
    }));
    if (e.target.files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = function (event) {
        setImg(event.target.result);
      };
    }
  }

  async function handleCreatePost(e) {
    e.preventDefault();
    console.log(post);
    console.log(post);
    const formData = new FormData();
    formData.append("caption", post.caption);
    formData.append("image", post.image);
    formData.append("creator", user.id);
    await createPost(formData);
    const data = await fetchPosts();
    dispatch(setPosts(data));
  }

  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <h2 className={styles.header}>Create new post</h2>
      <form onSubmit={handleCreatePost}>
        <div
          className={`${styles.imgPreview} ${img ? styles.imageLoaded : ""}`}
        >
          <>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
              accept=".png, .jpg, .jpeg"
            />
            <label htmlFor="image">
              <p>{img ? "Change img" : "Click to upload photo"}</p>
            </label>
          </>
          <img src={img} alt="" />
        </div>
        <div className={styles.user}>
          <img src="/profileImg.jpg" alt="" />
          <p>@greatochuko</p>
        </div>
        <textarea
          name="caption"
          id="caption"
          cols="30"
          rows="10"
          placeholder="Write a caption"
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}
