const posts = document.querySelector(".posts");

const showpost = async () => {
  let response = await fetch("/posts.json");
  let data = await response.json();
  console.log(data);

  // foreach post
  data.forEach((post) => {
    console.log(post);

    // show main
    posts.innerHTML += `
    <div class="post">
    <h1>${post.title}</h1>
    <p>${post.content}</p>
    <p>
        <span>${post.author}</span>
        <span>${post.date}</span>
    </p>
    <img src="${post.imageURL}" alt="">
</div>`;
  });
};

showpost();
