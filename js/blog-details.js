const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

const blog = BLOGS.find(b => b.id === blogId);
const container = document.getElementById("blogDetails");

if (!blog) {
  container.innerHTML = `
    <div class="text-center py-5">
      <h2>المقالة غير متوفرة</h2>
    </div>
  `;
} else {
  container.innerHTML = `
    <div class="row align-items-center my-5">
      <div class="col-lg-6">
        <span class="text-success fw-bold">عنوان المقالة</span>
        <h1 class="fw-bold mb-3">${blog.title}</h1>
        <p class="text-muted fs-5">${blog.subtitle}</p>
      </div>
      <div class="col-lg-6">
        <img src="${blog.img}" class="img-fluid rounded-4 shadow-sm w-100">
      </div>
    </div>

    <div class="blog-content">
      ${blog.article.map(section => `
        <div class="blog-section mb-5">
          <h4 class="fw-bold text-success mb-3">
            ${section.sectioName}
          </h4>
          <p class="text-muted fs-4">
            ${section.sectioDetails}
          </p>
        </div>
      `).join("")}
    </div>
  `;
}
