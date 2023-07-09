//header
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky");
});
//header ends

const cookeDiv = document.getElementById("cookieWraps");
const decline = document.getElementById("decline");
const accept = document.getElementById("cookieWraps-b2");
window.addEventListener("load", function (e) {
  setTimeout(() => {
    const cookieAccept = document.cookie.indexOf("CookieSetBy=Faria") !== -1;
    const cookieDecline = document.cookie.indexOf("CookieSetBy=false") !== -1;
    if (cookieAccept) {
      cookeDiv.classList.remove("show");
      cookeDiv.classList.add("hide");
    } else if (!cookieDecline) {
      cookeDiv.classList.add("show");
    }
  }, 2000);

  accept.addEventListener("click", function (e) {
    cookeDiv.classList.remove("show");
    cookeDiv.classList.add("hide");
    //1min=60s ,1hr=60m,1day=24, 30day=30
    //   max-age=" + 60 * 60 * 24 * 30=1month
    document.cookie = "CookieSetBy=Faria; max-age=" + 60 * 1000; //1 min
  });
  decline.addEventListener("click", function () {
    document.cookie = "CookieSetBy=false; max-age=" + 60 * 1000; //1 min

    cookeDiv.classList.remove("show");
    cookeDiv.classList.add("hide");
  });
  let checkCookie = document.cookie.indexOf("CookieSetBy=Faria");
  if (checkCookie === -1) {
    cookeDiv.classList.remove("hide");
  }
});
//cookie
