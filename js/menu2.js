const data1 = [
  {
    id: "i1",
    image: "./image/img/1.webp",
    title: "3-pc Golden Egg Crunch Combo",
    para: "1RM 24.99",
    href: "card_inside.html",
  },
  {
    id: "i2",

    image: "./image/img/2.webp",

    title: "3-pc Golden Egg Crunch Combo",
    para: "2RM 24.99",
    href: "card_inside.html",
  },
  {
    id: "i3",

    title: "3-pc Golden Egg Crunch Combo",
    image: "./image/img/3.webp",
    para: "3RM 24.99",
    href: "card_inside.html",
  },
  {
    id: "i4",

    title: "3-pc Golden Egg Crunch Combo",
    image: "./image/img/4.webp",
    para: "4RM 24.99",
    href: "card_inside.html",
  },
  {
    id: "i5",

    title: "3-pc Golden Egg Crunch Combo",
    image: "./image/img/5.webp",
    para: "5RM 24.99",
    href: "card_inside.html",
  },
  {
    id: "i6",

    title: "3-pc Golden Egg Crunch Combo",
    image: "./image/img/6.webp",
    para: "6RM 24.99",
    href: "card_inside.html",
  },
  {
    id: "i7",

    title: "3-pc Golden Egg Crunch Combo",
    image: "./image/img/7.webp",
    para: "7RM 24.99",
    href: "card_inside.html",
  },
  {
    id: "i8",

    title: "3-pc Golden Egg Crunch Combo",
    image: "./image/img/8.webp",
    para: "7RM 24.99",
    href: "card_inside.html",
  },
];

const data2 = [
  {
    id: "d1",
    href: "order.html",
    image: "./image/img/19.jpg",
    title: "32-pc Golden Egg Crunch Combo",

    para: "RM 24.99",
  },
  {
    id: "d2",
    href: "order.html",
    image: "./image/img/14.jpg",

    title: "36-pc Golden Egg Crunch Combo",
    para: "RM 24.99",
  },
  {
    id: "d3",
    href: "order.html",
    title: "23-pc Golden Egg Crunch Combo",
    image: "./image/img/17.jpg",
    para: "RM 24.99",
  },
  {
    id: "d4",
    href: "order.html",
    title: "35-pc Golden Egg Crunch Combo",
    image: "./image/img/18.jpg",
    para: "RM 24.99",
  },
  {
    id: "d5",
    href: "order.html",
    title: "53-pc Golden Egg Crunch Combo",
    image: "./image/img/25.webp ",
    para: "RM 24.99",
  },
  {
    id: "d6",
    href: "order.html",
    title: "53-pc Golden Egg Crunch Combo",
    image: "./image/img/26.jpg ",
    para: "RM 24.99",
  },
  {
    id: "d7",
    href: "order.html",
    title: "33-pc Golden Egg Crunch Combo",
    image: "./image/img/22.jpg",
    para: "RM 24.99",
  },
  {
    id: "d8",
    href: "order.html",
    title: "13-pc Golden Egg Crunch Combo",
    image: "./image/img/21.jpg",
    para: "RM 24.99",
  },
  {
    id: "d9",
    href: "order.html",
    title: "3-pc Golden Egg Crunch Combo",
    image: "./image/img/6.webp",
    para: "3RM 24.99",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  const main1 = document.querySelector(".card-container ");
  console.log(main1);
  // card for menu(first) starts
  data1.forEach((element) => {
    const card1 = document.createElement("div");
    card1.classList = " div-x col-lg-4  col-md-6 col-sm-12 mb-5 m-lg-0  ";

    const makeHtml = ` 

<div class='card'>
<div class='card-id'>
  <img  class= 'card-img-top' src= ${element.image} alt="t-img">

<div class="card-body">

   <h3 class="card-title">${element.title}</h3>
  <p class="card-text fw-bold " style="font-size: larger;">${element.para}</p>

 </div>
</div>
</div>
`;

    card1.innerHTML += makeHtml;
    main1.appendChild(card1);

    card1.addEventListener("click", () => {
      console.log(`You clicked on the third card (${element.title})`);

      window.location.href = element.href;
    });
  });
  // card for menu(first) ends

  //(cards )on click button starts

  const main2 = document.querySelector(".card-container ");
  const btn1 = document.querySelector(".btn-class");
  const btn2 = document.querySelector("#btn2");
  btn2.addEventListener("click", function (e) {
    window.location.href = "";
  });
  let c = 0;
  btn1.addEventListener("click", function (e) {
    if ((e.target.id = "btn")) {
      c++;

      if (c === 1) {
        main2.innerHTML = "";
        btn1.style.backgroundColor = "#eb401eca";

        data2.forEach((element, i) => {
          const card2 = document.createElement("div");
          card2.classList = "div-x col-lg-4  col-md-6 col-sm-12 mb-5 m-lg-0";

          const makeHtml = `

  <div class='card'>
  <div class='card-id2'>
    <img  class= 'card-img-top' src= ${element.image} alt="t-img">

  <div class="card-body">

     <h3 class="card-title">${element.title}</h3>
    <p class="card-text fw-bold " style="font-size: larger;">${element.para}</p>

   </div>
  </div>
  </div>
  `;

          card2.innerHTML += makeHtml;

          main2.appendChild(card2);

          card2.addEventListener("click", () => {
            console.log(`You clicked on the third card (${element.title})`);

            window.location.href = element.href;
          });
        });
      } else if (c === 2) {
        window.location.href = "";

        c = 0;
      }
    }
  });
});
