//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//navbar
const hamButton = document.querySelector(".menu");
const closeBtn = document.querySelector(".hamburger");

hamButton.addEventListener("click", () => {
  hamButton.classList.add("hide");
  closeBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  hamButton.classList.remove("hide");
  closeBtn.classList.remove("active");
});

// sanity backend
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug');

let PROJECT_ID = "tpxc7pf3"
let DATASET_NAME = "production"
let QUERY = encodeURIComponent(`*[_type == "post" && slug.current =="${slug}"]
{
  title,
  author->{
    name
  },
  _updatedAt,
  mainImage{
    asset->{
      url
    }
  },
  body[0]{
    children[0]{
      text
    }
  }
}
`)
let URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET_NAME}?query=${QUERY}`

fetch(URL)
  .then(response => response.json())
  .then(data => {
    // Extract the blog post from the data
    const blogPost = data.result[0];
    // Populate the template with the fetched content
    const blogPostContent = document.querySelector('.mainBlog');
    blogPostContent.innerHTML = `
        <h1>${blogPost.title}</h1>
        <p class="author">Author: ${blogPost.author.name}</p>
        <p class="date">Last Updated: ${blogPost._updatedAt}</p>
        <img class="postImage" src="${blogPost.mainImage.asset.url}" alt="Main Image">
        <p class="postText">${blogPost.body.children.text}</p>
    `;
  })
  .catch(error => {
      console.error('Error fetching blog post:', error);
      // Optionally display an error message or handle the error in another way
  })

//current year on footer
function getCurrentYear() {
  return new Date().getFullYear();
}

document.querySelector(".year").innerHTML =`${getCurrentYear()}`