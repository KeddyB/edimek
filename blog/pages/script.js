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
        <p>Author: ${blogPost.author.name}</p>
        <p>Last Updated: ${blogPost._updatedAt}</p>
        <img src="${blogPost.mainImage.asset.url}" alt="Main Image">
        <p>${blogPost.body.children.text}</p>
    `;
  })
  .catch(error => {
      console.error('Error fetching blog post:', error);
      // Optionally display an error message or handle the error in another way
  })