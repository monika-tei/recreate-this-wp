console.log("let's begin ");

const endpoint = "https://monikattei.com/wp-bikes/wp-json/wp/v2/bike?_embed";

async function getData() {
  let result = await fetch(endpoint);
  showPosts(await result.json());
}

//loop through and work the template

function showPosts(posts) {
  console.log(posts);
  posts.forEach((bike) => {
    // console.log(bike);

    // template it
    const template = document.querySelector("template").content;
    //clone it
    const clone = template.cloneNode(true);
    //POPULATE THE TEMPLATE
    clone.querySelector("img").src =
      bike._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium.source_url;
    //add categories
    // console.log("brand", bike._embedded["wp:term"][0][0].name);
    clone.querySelector("h5").textContent =
      bike._embedded["wp:term"][0][0].name;
    console.log("here", bike._embedded["wp:term"][1]);
    const colors = bike._embedded["wp:term"][1];

    colors.forEach((color) => {});

    //add title
    clone.querySelector("h4").textContent = bike.title.rendered;

    //add price
    clone.querySelector(".price span").textContent = bike.price;

    //add colors
    clone.querySelector(".colour span").textContent = "N/A";

    //IN stock
    // clone.querySelector(".inStock span").textContent = bike.in_stock;
    // how to make this into text and not number
    // if (
    //   (clone.querySelector(".inStock span").textContent = bike.in_stock == 0)
    // ) {
    //   clone.querySelector(".inStock span").textContent = "No";
    // } else {
    //   clone.querySelector(".inStock span").textContent = "Yes";
    // }
    console.log("vhd", bike.in_stock);
    const inStock = bike.in_stock == 1 ? "Yes" : "No";
    clone.querySelector(".inStock span").textContent = inStock;
    //find parent and append
    const parent = document.querySelector(".main-container");
    parent.appendChild(clone);
  });
}
getData();
