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
  slug{
    current
  }
}`)
let URL = `https://${PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/${DATASET_NAME}?query=${QUERY}`

fetch(URL)
.then((response) => response.json())
.then(({result}) => {
  let loading = document.querySelector('.loading')
  loading.parentNode.removeChild(loading)

  let blogs = document.querySelector('.items')
  if(result.length > 0){
    result.forEach(blog => {
      let imgUrl = `${blog.mainImage.asset.url}`
      let item = document.createElement("div")
      let a = document.createElement("a")
      let p = document.createElement("p")
      let para = document.createElement("p") 
      let img = document.createElement('img')
      
      a.href = `/blog/${blog.slug.current}`
      item.classList.add("blogCont")
      img.src = imgUrl
      a.innerHTML = `Title: ${blog.title}`
      p.innerHTML = `Author: ${blog.author.name}`
      item.appendChild(img)
      item.appendChild(a)
      item.appendChild(para)
      item.appendChild(p)
      blogs.appendChild(item)

      const handleLocatiion = async () => {
        const path = window.location.pathname
      }

      item.addEventListener("click", ()=>{

      })
      
      
    })
  }
})