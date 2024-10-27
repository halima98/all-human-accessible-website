const cursor = document.querySelector(".blob");
document.addEventListener("mousemove", function (event) {
  const x = event.clientX;
  const y = event.clientY;
  cursor.style.transform =
    "translate3d(" + (x - 50) + "px, " + (y - 50) + "px, 0)";
});
