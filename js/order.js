// ORDER PAGE -button click part(model popup)
const openModuleButton = document.querySelectorAll("[data-model-target]");
const closeModuleButton = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
//delete me
const cardInside = document.getElementById("card-inside");

//cart
const listCard = document.getElementById("listCard");
const total = document.getElementById(".total");
const countDiv = document.getElementById("count");
const countTotal = document.getElementById("total");

//Location
const location_name = document.getElementById("location_name");
const findContainer = document.getElementById("chart-container");
let geolocationError = false;
//galleryItemModel;
const overlayFP = document.getElementById("overlay-for-preview");

openModuleButton.forEach((button) => {
  button.addEventListener("click", () => {
    const model = document.querySelector(button.dataset.modelTarget);
    openModule(model);
  });
});
//for closing overlay

overlay.addEventListener("click", () => {
  const models = document.querySelectorAll(".model.active");
  models.forEach((model) => {
    closeModule(model);
  });
});

closeModuleButton.forEach((button) => {
  button.addEventListener("click", () => {
    const model = button.closest(".model");
    //inner text refresh
    setTimeout(function () {
      location_name.innerHTML = "";
    });
    //inner text refresh

    closeModule(model);
  });
});
function openModule(model) {
  if (model == null) return;
  model.classList.add("active");
  overlay.classList.add("active");
}

function closeModule(model) {
  if (model == null) return;
  model.classList.remove("active");
  overlay.classList.remove("active");
}
//ORDER  PAGE CREATE
const bug = document.querySelector("#bug");

function rightClick() {
  bug.style.left = "0";
  const to = document.querySelector(".toggle-btn1");
  const tog = document.querySelector(".toggle-btn2");

  to.style.color = "white";
  tog.style.color = "black";
}
// export
function leftClick() {
  bug.style.left = "46%";
  const to = document.querySelector(".toggle-btn1");
  const tog = document.querySelector(".toggle-btn2");

  to.style.color = "black";
  tog.style.color = "white";
}
//chart click

const chartClick = () => {
  findContainer.style.display = "block";
};
const closeClick = () => {
  findContainer.style.display = "none";
};
//chart click

function p(e) {
  var divElement = e.target;

  const clickElement = divElement.closest(".item");

  var im = clickElement.querySelector("#image");
  var img = im.src;

  const h = clickElement.querySelector("h2");
  const p = clickElement.querySelector("p");
  const hText = h.textContent;
  const pText = p.textContent;

  // console
  console.log("Header:" + hText + "," + "Para:" + pText + "," + "image:" + img);
  const selfCollect = document.getElementById("selfCollect-id");
  const delivery = document.getElementById("delivery-id");
  // && !geolocationError
  const storedLocation = localStorage.getItem("location");
  location_name.innerHTML = storedLocation;
  if (selfCollect) {
    if (location_name.innerHTML !== "" && !geolocationError) {
      overlay.classList.remove("active");
      a(img, hText, pText);
    }
    // else if (geolocationError) {
    // }
  }
}
let galleryItemCounter = 0;
let currentPreview = null;
//retrieving  the value
const previewItemMap = new Map(
  JSON.parse(localStorage.getItem("previewItemMap")) || []
);

function a(img, hText, pText) {
  if (location_name.innerHTML !== "") {
    overlayFP.classList.add("active");

    const imageSrc = img;
    const headerSrc = hText;
    const paraSrc = pText;

    //removing previous preview div when clicking new item
    if (currentPreview) {
      currentPreview.remove();
    }
    const galleryItemPreview = document.createElement("div");
    galleryItemCounter++;

    const v = (galleryItemPreview.id = "gIPreview-" + galleryItemCounter++);
    galleryItemPreview.setAttribute("data-id", v);

    galleryItemPreview.classList.add("galleryItemPreview");
    galleryItemPreview.innerHTML = `
    <div class='card-previewMenu'>Menu</div>
    
    <div class="galleryItemPreview2" >

    <div class="card3 img-div div-x mb-5 m-lg-0">
    <div class="card-id3 img-div">
    <img  class= '' src= ${imageSrc} alt="t-img">
    </div>  
    </div>
    <div class=" card4 ">
       <button class="close-button2" id='close-button2' onclick='closePreview()'>&times;</button>
    <div class='card-body3'>
     <h2 class=""> ${headerSrc}</h2>
    <h2 class="card-body-h"><p> ${paraSrc}</p> </h2> 
     </div>
      <div class='card-body-button2'> <button>1</button> </div>
     <div id='card-body-button' class='card-body-button'> <button onclick="reloadCart(event)">Add To Chart - ${paraSrc} </button> </div>
      </div>
      </div>
`;
    currentPreview = galleryItemPreview;
    cardInside.appendChild(galleryItemPreview);
  }
}
// chart div part

// retrieve count value form localStorage
const storedCount = localStorage.getItem("countValue");
const storedTotalPrice = localStorage.getItem("totalPrice");
console.log(storedTotalPrice);
// updating countDiv if exists
if (storedCount) {
  countDiv.innerHTML = storedCount;
} else {
  countDiv.innerHTML = "0";
}
if (storedTotalPrice) {
  countTotal.innerHTML = storedTotalPrice;
} else {
  countTotal.innerHTML = "0";
}
function reloadCart(event) {
  if (location_name.innerHTML !== "") {
    const btnTarget = event.target;
    const SelectPreviewDiv = btnTarget.closest(".galleryItemPreview");
    const im2 = SelectPreviewDiv.querySelector("img");
    const h2 = SelectPreviewDiv.querySelector("h2");
    const p2 = SelectPreviewDiv.querySelector("p");
    const img2 = im2.src;
    const hText2 = h2.textContent;
    const pText2 = p2.textContent;
    const imageSrc = img2;
    const headerSrc = hText2;
    const paraSrc = pText2;

    const listItemKey = `${imageSrc},${headerSrc},${paraSrc}`;
    let quantity = previewItemMap.has(listItemKey)
      ? previewItemMap.get(listItemKey) + 1
      : 1;
    previewItemMap.set(listItemKey, quantity);

    // update  quantity in the preview
    const previewQuantityElement = SelectPreviewDiv.querySelector(
      ".card-body-button2 button"
    );
    previewQuantityElement.textContent = quantity;
    console.log(previewQuantityElement.textContent);
    //  if item already exist
    const existingListItem = document.querySelector(
      `.listCard-li[data-key="${listItemKey}"]`
    );

    if (existingListItem) {
      // updating quantity in the existing list
      const quantityElement = existingListItem.querySelector(
        ".list-div-p:last-child"
      );

      quantityElement.textContent = `Quantity: ${quantity}`;
    } else {
      // li create

      const newDiv = document.createElement("li");
      newDiv.classList.add("listCard-li");
      newDiv.setAttribute("data-key", listItemKey);
      newDiv.innerHTML = `
        <div class='list-div'>
          <img class='list-div-img' src='${imageSrc}' alt='t-img'>
          <h2 class='list-div-h'>${headerSrc}</h2>
          <p class='list-div-p'>${paraSrc}</p>
          <p class='list-div-p'>Quantity: ${quantity}</p>
        </div>`;
      listCard.appendChild(newDiv);
    }

    chartClick();
    tk();
  }
}

function tk() {
  const items = document.querySelectorAll(".listCard-li");

  let total = 0;
  let count = 0;

  items.forEach((item) => {
    const priceElement = item.querySelector(".list-div-p");
    const paraSrc = priceElement.textContent.replace("Tk ", "");
    const price = parseFloat(paraSrc);

    const quantityElement = item.querySelector(".list-div-p:last-child");
    const quantityText = quantityElement.textContent.replace("Quantity: ", "");
    const quantity = parseInt(quantityText);

    total += price * quantity;
    count += quantity;
  });

  countTotal.innerHTML = "Tk " + total;

  if (count > 0) {
    countDiv.innerHTML = count;
  } else {
    countDiv.innerHTML = "0";
  }
  localStorage.setItem("countValue", countDiv.innerHTML);
  localStorage.setItem("totalPrice", countTotal.innerHTML);

  closePreview();

  localStorage.setItem(
    "previewItemMap",
    JSON.stringify(Array.from(previewItemMap.entries()))
  );
}
window.addEventListener("load", () => {
  const previewItemMap = new Map(
    JSON.parse(localStorage.getItem("previewItemMap")) || []
  );
  previewItemMap.forEach((quantity, listItemKey) => {
    const [imageSrc, headerSrc, paraSrc] = listItemKey.split(",");
    addItemToList(imageSrc, headerSrc, paraSrc, quantity);
  });
});
function addItemToList(imageSrc, headerSrc, paraSrc, quantity) {
  // Cli create
  const newDiv = document.createElement("li");
  newDiv.classList.add("listCard-li");
  newDiv.setAttribute("data-key", `${imageSrc},${headerSrc},${paraSrc}`);
  newDiv.innerHTML = `
    <div class='list-div'>
      <img class='list-div-img' src='${imageSrc}' alt='t-img'>
      <h2 class='list-div-h'>${headerSrc}</h2>
      <p class='list-div-p'>${paraSrc}</p>
      <p class='list-div-p'>Quantity: ${quantity}</p>
    </div>`;
  listCard.appendChild(newDiv);
}

//close preview
function closePreview() {
  const deleteGalleryPreview = document.querySelector(".galleryItemPreview");
  overlayFP.classList.remove("active");
  deleteGalleryPreview.remove();
}
// chart div part

function geolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position, error);
  } else {
    location_name.innerHTML = "Geolocation is not supported by this browser";
  }
}

function position(success) {
  geolocationError = false;
  const lat = success.coords.latitude;
  const long = success.coords.longitude;
  jQuery.get(
    "https://ipinfo.io/json?token=ae463c3aa396cf",
    function (e) {
      console.log(e);
      console.log(e.country);
      console.log(e.city);
      location_name.innerHTML = e.city + e.postal + "," + e.country;
      localStorage.setItem("location", location_name.innerHTML);
    },
    "jsonp"
  );
  //closing model
  setTimeout(function () {
    model.classList.remove("active");
    overlay.classList.remove("active");
  }, 700);

  //closing model
}
function error() {
  geolocationError = true;
  location_name.innerHTML = "Unable to retrieve your location";
}

// location part ends
//deleting location after refresh
// window.addEventListener("beforeunload", function (e) {
//   localStorage.clear();
// });
function signupFun() {
  window.location.href = "";
}
