const postContainer = document.querySelector(".post-container");
const postTemplate = (post) => {
  return `
        <p>Writer:${post.author}</p>
        <p>Date:${post.date}</p>
        <p>post:${post.post}</p>
        <button>Read blog post</button>
        <br></br>
      `;
};

const fetchPosts = async () => {
  try {
    const response = await fetch("../data/posts.json");
    const posts = await response.json();
    return posts;
  } catch {
    console.error("Error fetching or parsing data:", error);
  }
};

const renderPost = async () => {
  const posts = await fetchPosts();

  posts.forEach((post) => {
    postContainer.innerHTML += postTemplate(post);
  });
  console.log(posts);
};

renderPost();
