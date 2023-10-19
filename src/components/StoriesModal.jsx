import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { resizeImage } from "../utils/imageResize";

import styles from "./StoriesModal.module.css";
import { createStory, fetchStories } from "../services/storyServices";

export default function StoriesModal({ setStories }) {
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

  async function handleCreateStory(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("storyImage", image);
    formData.append("creator", user._id);

    const resData = await createStory(formData);
    if (resData.error) {
      return;
    }
    // const data = await fetchStories();
    // setStories(data);
  }

  return (
    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleCreateStory}>
        <div
          className={`${styles.imagePreview} ${
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
          {imgPreviewSrc ? <img src={imgPreviewSrc} alt="" /> : null}
          <input
            type="text"
            placeholder="Enter a Caption"
            autoFocus
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>

        <input type="submit" value="Post" />
      </form>
    </div>
  );
}
