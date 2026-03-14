window.setActiveNav = function() {
  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage || currentPage === "eaticWeb" || currentPage === "") {
    currentPage = "index.html";
  }
  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    const href = link.getAttribute("href") || "";
    if (href) {
      const linkPage = href.split("/").pop();
      link.classList.toggle('active', linkPage === currentPage);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.navbar')) window.setActiveNav();
});
