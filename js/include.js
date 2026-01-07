document.addEventListener("DOMContentLoaded", () => {
  const basePath = window.location.pathname.includes('/pages/') ? '../' : '';

  // Navbar
  fetch(basePath + "partials/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Fix relative links and assets inside injected navbar so it works from root and from /pages/
      const nav = document.getElementById("navbar");
      nav.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;
        // prefix pages/ and assets/ and index.html when we're in /pages/
        if (href.startsWith('pages/') || href.startsWith('assets/') || href === 'index.html') {
          a.setAttribute('href', basePath + href);
        }
      });
      nav.querySelectorAll('img').forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.startsWith('assets/')) img.setAttribute('src', basePath + src);
      });

      // Apply active class after navbar is injected
      if (window.setActiveNav) window.setActiveNav();

      // Re-init scroll animations in case the navbar contains animated elements
      if (window.initScrollAnimations) window.initScrollAnimations();
    })
    .catch(err => console.error("Navbar load error:", err));


  // Footer
  fetch(basePath + "partials/footer.html")
    .then(res => res.text())
    .then(data => {
      const footer = document.getElementById("footer");
      if (footer) footer.innerHTML = data;
      if (footer) {
        footer.querySelectorAll('img').forEach(img => {
          const src = img.getAttribute('src');
          if (src && src.startsWith('assets/')) img.setAttribute('src', basePath + src);
        });
      }

      if (window.initScrollAnimations) window.initScrollAnimations();
    });
});