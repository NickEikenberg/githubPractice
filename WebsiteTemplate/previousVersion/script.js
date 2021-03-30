const shirts = [
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
  {
    image: "img/cum.jpeg",
  },
];

let mobileView = false;

const numOfProducts = 6;
let numProductLines = Math.ceil(numOfProducts / 4);
console.log(numProductLines);
console.log(shirts);

const productWrapper = document.querySelector(".products-wrapper");

const productHTML = `<div class="product">
<img src="img/cum.jpeg" alt="cum shirt" class="cumshirt" />
</div>`;

// for (let i = 0; i < numOfProducts; i++) {
//   productWrapper.innerHTML += `<div class="product">
//   <img src="img/cum.jpeg" alt="cum shirt" class="cumshirt" />
//   </div>`;
// }

// for (let i = 0; i < numProductLines; i++) {
//   productWrapper.innerHTML += `<div class="product-line">
//   </div>`;
// }

const lookBooksDiv = document.querySelector(".lookbooks-section");

lookBooksDiv.innerHTML = shirts.image;
