const cursor = document.querySelector(".cursor");
let timeout;

function updateCursorPos(e) {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";
}

document.addEventListener("mousemove", e => {
  updateCursorPos(e);

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    cursor.style.display = "none";
  }, 5000);
});

window.addEventListener("scroll", () => {
  const x = cursor.style.left;
  const y = cursor.style.top;
  cursor.style.top = y;
  cursor.style.left = x;
});
