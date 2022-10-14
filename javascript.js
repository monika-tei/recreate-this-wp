const endpoint = "https://monikattei.com/wp-bikes/wp-json/wp/v2/bike?_embed";

async function getData() {
  let result = await fetch(endpoint);
  showPosts(await result.json());
}

function showPosts(posts) {
  console.log(posts);
  posts.forEach((bike) => {
    const template = document.querySelector("template").content;

    const clone = template.cloneNode(true);
    //---------------POPULATE THE TEMPLATE
    clone.querySelector("img").src =
      bike._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium.source_url;

    //add categories

    clone.querySelector("h5").textContent =
      bike._embedded["wp:term"][0][0].name;
    console.log("here", bike._embedded["wp:term"][1]);
    const colors = bike._embedded["wp:term"][1];

    //add colors
    colors.forEach((color) => {
      const liEl = document.createElement("li");
      liEl.style.backgroundColor = color.slug;
      console.log("uhuuh", liEl);
      clone.querySelector(".colour ul").appendChild(liEl);
    });

    //add title
    clone.querySelector("h4").textContent = bike.title.rendered;

    //add price
    clone.querySelector(".price span").textContent = bike.price;

    //IN stock
    console.log("vhd", bike.in_stock);
    const inStock = bike.in_stock == 1 ? "Yes" : "No";
    clone.querySelector(".inStock span").textContent = inStock;

    //find parent and append
    const parent = document.querySelector(".main-container");
    parent.appendChild(clone);
  });
}
getData();
