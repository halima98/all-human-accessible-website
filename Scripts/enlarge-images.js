function enlargeImage(img) {
  images.forEach(function (image) {
    if (image !== img) {
      image.classList.add("blurred");
      image.classList.add("hidden");
      image.classList.remove("enlarged");
    } else {
      image.classList.add("enlarged");
      image.classList.remove("blurred");
      image.classList.remove("hidden");
    }
  });

  img.onclick = function () {
    enlargeImage(img);
  };
}
