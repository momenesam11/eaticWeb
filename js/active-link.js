window.setActiveNav = function() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    link.classList.toggle('active', link.dataset.page === currentPage);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.navbar')) window.setActiveNav();
});
