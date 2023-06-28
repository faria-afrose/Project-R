//header
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky");
});
//header ends

const cookeDiv = document.getElementById("cookieWraps");
const decline = document.getElementById("decline");
const accept = document.getElementById("cookieWraps-b2");
// window.addEventListener("load", function (e) {
//   setTimeout(() => {
//     const cookieAccept = document.cookie.indexOf("CookieSetBy=Faria") !== -1;
//     const cookieDecline = document.cookie.indexOf("CookieSetBy=false") !== -1;
//     cookeDiv.classList.add("show");
//   }, 2000);

//   accept.addEventListener("click", function (e) {
//     cookeDiv.classList.remove("show");
//     cookeDiv.classList.add("hide");
//     //1min=60s ,1hr=60m,1day=24, 30day=30
//     //   max-age=" + 60 * 60 * 24 * 30=1month
//     document.cookie = "CookieSetBy=Faria; max-age=" + 60 * 1000; //1 min
//   });
//   decline.addEventListener("click", function () {
//     document.cookie = "CookieSetBy=false; max-age=" + 60 * 1000; //1 min

//     cookeDiv.classList.remove("show");
//     cookeDiv.classList.add("hide");
//   });
//   let checkCookie = document.cookie.indexOf("CookieSetBy=Faria");
//   if (checkCookie != -1) {
//     cookeDiv.classList.remove("show");
//     cookeDiv.classList.add("hide");
//   } else {
//     cookeDiv.classList.remove("hide");
//   }
// });

const main = document.querySelector(".card-container ");

// card for menu(first) starts
data1.forEach((element, i) => {
  const card = document.createElement("div");
  card.classList = " div-x col-lg-4  col-md-6 col-sm-12 mb-5 m-lg-0  ";

  const makeHtml = ` 

<div class='card'>
<div class='card-id'>
  <img  class= 'card-img-top' src= ${data1[i].image} alt="t-img">

<div class="card-body">

   <h3 class="card-title">${data1[i].title}</h3>
  <p class="card-text fw-bold " style="font-size: larger;">${data1[i].para}</p>

 </div>
</div>
</div>
`;
  data1.forEach((element, i) => {
    var cards = document.querySelectorAll(" .card-id");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        console.log(`You clicked on the third card (${i.title})`);

        window.location.href = element.href;
      });
    });
  });
  card.innerHTML += makeHtml;
  main.appendChild(card);
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
  <img  class= 'card-img-top' src= ${data2[i].image} alt="t-img">

<div class="card-body">

   <h3 class="card-title">${data2[i].title}</h3>
  <p class="card-text fw-bold " style="font-size: larger;">${data2[i].para}</p>

 </div>
</div>
</div>
`;

        data2.forEach((element, i) => {
          var cards2 = document.querySelectorAll(" .card-id2");
          cards2.forEach((card) => {
            card.addEventListener("click", () => {
              console.log(`You clicked on the third card (${i.title})`);

              window.location.href = element.href;
            });
          });
        });

        card2.innerHTML += makeHtml;

        main2.appendChild(card2);
      });
    } else if (c === 2) {
      window.location.href = "";

      c = 0;
    }
  }
});

//cookie
