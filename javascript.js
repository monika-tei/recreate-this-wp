console.log("hello");

const endpoint = "#";

async function getData() {
  let result = await fetch(endpoint);
  showPosts(await result.json);
}

function showPosts(posts) {
  //console.log(posts);
  posts.forEach((post) => {
    console.log("lalala", post);
    //template
    const template = document.querySelector("template").content;
    //clone
    const clone = template.cloneNode(true);
    //populate

    //clone.querySelector("h2").textContent = movie.title.rendered;
    //console.log(movie._embedded[wp:featuremedia])....?;

    //find parent
    const parent = document.querySelector("main");
    parent.appendChild(clone);
  });
}
