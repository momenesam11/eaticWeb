const container = document.getElementById("blogsContainer");

BLOGS.forEach(blog => {
  container.innerHTML += `
    <div class="col-md-4">
      <div class="card rounded-4 p-2 h-100">
        <img src="${blog.img}" class="card-img-top" alt="">
        <div class="card-body text-center d-flex flex-column">
          <h5 class="card-title text-secondary fw-bolder mt-2">
            ${blog.title}
          </h5>
          <p class="card-text">${blog.subtitle}</p>
          <a href="blog-details.html?id=${blog.id}"
             class="btn btn-primary mt-auto py-2">
           <span class="fs-5"> قراءة المقالة</span>
          </a>
        </div>
      </div>
    </div>
  `;
});
