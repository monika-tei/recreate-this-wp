console.log("let's begin ");

const endpoint = "https://monikattei.com/wp-bikes/wp-json/wp/v2/bike?_embed";

async function getData() {
  let result = await fetch(endpoint);
  showPosts(await result.json());
}

//loop through and work the template

function showPosts(posts) {
  console.log(posts);
  posts.forEach((post) => {
    console.log("lalala bike", post);
  });
  // template it
  const template = document.querySelector("template").content;
  //clone it
  const clone = template.cloneNode(true);
  //add content

  //clone.querySelector("h2").textContent = movie.title.rendered;
  //console.log(movie._embedded[wp:featuremedia])....?;

  //find parent and append
  const parent = document.querySelector("main");
  parent.appendChild(clone);
}
getData();

//Looping sequence

// function showPosts(posts) {
//   //console.log(posts);
//   posts.forEach((post) => {
//     console.log("lalala", post);

//     //template it
//     const template = document.querySelector("template").content;
//     //clone it
//     const clone = template.cloneNode(true);
//     //populate it

//     //clone.querySelector("h2").textContent = movie.title.rendered;
//     //console.log(movie._embedded[wp:featuremedia])....?;

//     //find parent and append
//     const parent = document.querySelector("main");
//     parent.appendChild(clone);
//   });
// }
