const locationPicker = () => {
  window.location.href = "order.html";
};

// input tag part
const inputTag = document.getElementById("search_input");
// const closeImg = document.getElementById("close-img-id");
const lBtn = document.getElementById("loc-bt");

inputTag.addEventListener("keydown", function () {
  lBtn.style.backgroundColor = "#db1710";
  lBtn.style.border = "1px solid #db1710";
});
function closeImg() {
  inputTag.value = "";
  lBtn.style.backgroundColor = "#502314";
  lBtn.style.border = "1px solid #502314";
}
//

// input tag part
//autocomplete place search api
