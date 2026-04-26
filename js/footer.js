document.addEventListener("DOMContentLoaded", () => {
  fetch("../components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    })
    .catch(err => console.error("Footer failed to load:", err));
});