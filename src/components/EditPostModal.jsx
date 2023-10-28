import { useSelector } from "react-redux";
import styles from "./CreatePostModal.module.css";
import { useRef, useState } from "react";
import { updatePost } from "../services/postServices";
import { resizeImage } from "../utils/imageResize";
import propTypes from "prop-types";
import LoadingIndicator from "./LoadingIndicator";

export default function EditPostModal({
  closeModalContainer,
  postImgSrc,
  postCaption,
  postId,
  setCurrentPost,
}) {
  const { user } = useSelector((state) => state.user);

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState(postCaption);
  const [imgPreviewSrc, setImgPreviewSrc] = useState(postImgSrc);
  const [loading, setLoading] = useState(false);

  const imageInputRef = useRef();

  function handleChange(e) {
    e.preventDefault();
    if (e.target.files[0]) {
      resizeImage(imageInputRef, (file, src) => {
        setImage(file);
        setImgPreviewSrc(src);
      });
    }
  }

  async function handleEditPost(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("image", image);
    formData.append("creator", user._id);

    // Make fetch request to update post
    const data = await updatePost(postId, formData);

    setCurrentPost(data);
    setLoading(false);
    closeModalContainer();
  }

  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <h2 className={styles.header}>EditPost</h2>
      <button className={styles.close} onClick={() => closeModalContainer()}>
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
      <form onSubmit={handleEditPost}>
        <div className={`${styles.imgPreview} ${styles.imageLoaded}`}>
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
          <img src={imgPreviewSrc} alt="" />
        </div>
        <div className={styles.user}>
          <img src={user.imageUrl} alt="" />
          <p>@{user.username}</p>
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
        <button type="submit">{loading ? <LoadingIndicator /> : "Edit"}</button>
      </form>
    </div>
  );
}

EditPostModal.propTypes = {
  closeModalContainer: propTypes.func,
  setCurrentPost: propTypes.func,
  postImgSrc: propTypes.string,
  postCaption: propTypes.string,
  postId: propTypes.string,
};
