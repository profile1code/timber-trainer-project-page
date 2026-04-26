document.addEventListener("DOMContentLoaded", () => {
  const isInPagesFolder = window.location.pathname.includes("/pages/");

  const footerPath = isInPagesFolder
    ? "../components/footer.html"
    : "components/footer.html";

  fetch(footerPath)
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    })
    .catch(err => console.error("Footer failed to load:", err));
});