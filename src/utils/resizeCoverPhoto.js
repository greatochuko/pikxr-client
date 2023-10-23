export default function resizeCoverPhoto(
  imageFile,
  setPreviewImageUrl,
  callback
) {
  if (!imageFile) return;
  const fileReader = new FileReader();
  fileReader.readAsDataURL(imageFile);
  fileReader.onload = (fileReaderEv) => {
    const img = document.createElement("img");
    setPreviewImageUrl(fileReaderEv.target.result);
    img.src = fileReaderEv.target.result;
    img.onload = (imgEvent) => {
      const canvas = document.createElement("canvas");
      const MAX_WIDTH = 1500;
      const ASPECT_RATIO = MAX_WIDTH / img.width;
      canvas.width = MAX_WIDTH;
      canvas.height = img.height * ASPECT_RATIO;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(imgEvent.target, 0, 0, canvas.width, canvas.height);
      ctx.canvas.toBlob(async (resizedImage) => {
        resizedImage.name = imageFile.name;
        resizedImage.lastModified = imageFile.lastModified;
        resizedImage.lastModifiedDate = imageFile.lastModifiedDate;
        resizedImage.webkitRelativePath = imageFile.webkitRelativePath;
        await callback(resizedImage);
      }, "image/png");
    };
  };
}
