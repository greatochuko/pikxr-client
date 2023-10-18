function dataUrlToBlob(imgSrc) {
  var arr = imgSrc.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  const blob = new Blob([u8arr], { type: mime });
  return blob;
}

export async function resizeImage(fileInputRef, callback) {
  let smallImgSrc = "safd";
  const img = document.createElement("img");
  const fileReader = new FileReader();
  fileReader.readAsDataURL(fileInputRef.current.files[0]);
  fileReader.onload = (ev) => {
    img.src = ev.target.result;

    img.onload = (e) => {
      const canvas = document.createElement("canvas");
      const MAX_WIDTH = 300;
      const scaleSize = MAX_WIDTH / e.target.width;
      canvas.width = MAX_WIDTH;
      canvas.height = e.target.height * scaleSize;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);
      smallImgSrc = ctx.canvas.toDataURL();
      const blob = dataUrlToBlob(smallImgSrc);

      const file = new File([blob], "blob.jpg", { type: "image/jpeg" });

      callback(file, smallImgSrc);
    };
  };
}
