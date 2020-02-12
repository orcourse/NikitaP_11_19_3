document.getElementById("single-blog-container").innerHTML ="";
let currentBlog = JSON.parse(sessionStorage.getItem("CurrentBlog"));
new ViewSingleBlog(".single-blog-container", currentBlog);
