import { useDispatch, useSelector } from "react-redux";
import styles from "./CreatePostModal.module.css";
import { setPosts } from "../slice/postSlice";
import { useRef, useState } from "react";
import { createPost, fetchPosts } from "../services/postServices";
import { resizeImage } from "../utils/imageResize";
import propTypes from "prop-types";

export default function CreatePostModal({ closeModalContainer }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();
  const [caption, setCaption] = useState("");
  const [imgPreviewSrc, setImgPreviewSrc] = useState("");
  const { user } = useSelector((state) => state.user);

  function handleChange(e) {
    e.preventDefault();
    if (e.target.files[0]) {
      resizeImage(imageInputRef, (file, src) => {
        setImage(file);
        setImgPreviewSrc(src);
      });
    }
  }

  async function handleCreatePost(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image);
    formData.append("creator", user._id);
    await createPost(formData);
    const data = await fetchPosts();
    dispatch(setPosts(data));
    closeModalContainer();
  }

  return (
    <div className={styles.modal}>
      <h2 className={styles.header}>Create new post</h2>
      <form onSubmit={handleCreatePost}>
        <div
          className={`${styles.imgPreview} ${
            imgPreviewSrc ? styles.imageLoaded : ""
          }`}
        >
          <>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleChange}
              accept=".png, .jpg, .jpeg"
              ref={imageInputRef}
            />
            <label htmlFor="image">
              <p>
                <i className="fa-regular fa-images"></i>
                {imgPreviewSrc ? "Change img" : "Click to upload photo"}
              </p>
            </label>
          </>
          <img src={imgPreviewSrc} alt="" />
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
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        ></textarea>
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}

CreatePostModal.propTypes = {
  closeModalContainer: propTypes.func,
};
