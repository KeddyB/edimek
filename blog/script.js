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

//setting up sanity for backend
let PROJECT_ID = "tpxc7pf3"
let DATASET_NAME = "production"
let QUERY = encodeURIComponent(`*[_type == "post"]{
  title,
  author->{
    name
  },
  publishedAt,
  mainImage{
    asset->{
      url
    }
  },
}`)
let URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET_NAME}?query=${QUERY}`

fetch(URL)
.then((response) => response.json())
.then(({result}) => {
  let loading = document.querySelector('.loading')
  loading.parentNode.removeChild(loading)

  let blogs = document.querySelector('.eachItem')
  if(result.length > 0){
    result.forEach(blog => {
      let imgUrl = `${blog.mainImage.asset.url}`
      let item = document.createElement("li")
      let img = document.createElement('img')
      img.src = imgUrl
      item.textContent = `${blog.title} by ${blog.author.name}`
      item.appendChild(img)
      blogs.appendChild(item)
    })
  }
})