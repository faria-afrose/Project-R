//custom header part starts

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <!-- header starts -->
        <header>
            <nav class=" navbar  navbar-expand-lg navigation-wrap  ">
                <div class="container">
                    <a class=navbar-brand href="#">
                        <img class="logo-img" src="./image/logo/pngimg.com - burger_king_PNG6.png" alt="img"
                            style="width: 70px;">
                    </a>
                    <button class='navbar-toggler' title="button" style="color: #AB1C00;" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarText" aria-expanded="false"
                        area-controls="navbarText" area-level="toggle navigation"><i
                            class="fas fa-stream navbar-toggler-icon "></i></button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li class="nav-item"><a class="nav-link " href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="./menu.html">Menu</a></li>
                            
                            <li class="nav-item"><a class="nav-link" href="reward.html">Rewards</a></li>

                            <li><button class="main-btn" onclick='signupFun()'>Sign up</button></li>
                                <li> <button class="chart" id="chart-button" onclick="chartClick()"
            style='width:20px; background-color:transparent; border:none;  padding-right:150px;padding-left:50px;'>
            <img class="logo" src="./image/logo/cart6.png" alt="img">
            <p id="count" class='quantity'>0</p>
        </button> </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
        <!-- header ends -->`;
  }
}
customElements.define("my-header", MyHeader);
//custom header part ends

//custom footer part
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <footer>
        <div class="row p-0 mb-2 m-lg-0  ">
            <div class="col p-0 text-white text-center mt-5 text-lg-start">
                <ul>
                    <li><a class="text-white" href="#">Take my order</a>
                    </li>

                    <li><a class=" text-w" href="#">Services</a></li>
                    <li><a class=" text-w" href="#">Gift</a></li>
                    <li><a class=" text-w" href="#">Party</a></li>
                </ul>

            </div>
            <div class="col p-0 text-white text-center mt-5  text-lg-start">
                <ul>
                    <li><a class=" text-white" href="#">About us</a></li>
                    <li><a class=" text-w" href="#">News</a></li>
                    <li><a class=" text-w" href="#">Social Responsibility</a></li>
                    <li><a class=" text-w" href="#">Join Us</a></li>

                </ul>

            </div>
            <div class="col p-0 text-white text-center mt-5 text-lg-start">
                <ul>
                    <li><a class=" text-white a-common" href="#">Our food</a></li>
                    <li><a class=" text-w" href="#">Quality Assurance</a></li>
                    <li><a class=" text-w" href="#">Nutrition Fact</a></li>
                </ul>
            </div>
            <div class="col p-0 text-white text-center mt-5  text-lg-start">
                <ul>
                    <li><a class=" text-white" href="#">Help & Support</a> </li>
                    <li><a class=" text-w" href="#">FAQ</a></li>
                    <li><a class=" text-w" href="#">Terms & condition</a></li>
                    <li><a class=" text-w" href="#">Share your feedback</a></li>
                </ul>
            </div>
            <hr class="class-hr p-0 ">
            <div class= 'mt-5'>
                <div>
                    <ul>
                        <li><a class=" text-white" href="#">FOOD RESTAURANT </a></li>
                    </ul>
                </div>

                <div class="fot-p  ps-4 "><a class='text-w '>Terms of Use </a>
                    <a class=' text-w'>&nbsp;|</a>
                    <a class=' text-w'> Privacy Policy</a>
                    <a class=' text-w'>&nbsp;|</a>

                    <a class=' text-w'> TM & Copyright Food Restaurant 2023,&copy; Faria Afrose</a>
                
            </div>
                </div>

            </div>

           

        </div>
        <div class="icon mt-4">
            <a href="#"><i class="fab  fa-instagram text-white m-2"></i></a>

            <a href="#"><i class="fab fa-youtube  text-white m-2"></i></a>

            <a href="#"><i class="fab fa-twitter text-white m-2"></i></a>

            <a href="#"><i class="fab fa-facebook  text-white m-2"></i></a>

        </div>
        <br>
        </div>
    </footer>`;
  }
}
customElements.define("my-footer", MyFooter);
//custom footer parts ends
//custom header part ends
//custom cookie
//custom footer part
class MyCookieDiv extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="cookieWraps" id="cookieWraps">
                    <div class="left-part">

                        <img class="cookieWraps-img" src="./image/logo/cookie.png" alt="cookie">

                    </div>
                    <div class="middle-part">
                        <h5>We value your privacy. This site uses cookies to improve functionality and analyze
                            traffic.
                            By clicking 'Accept All Cookies', you
                            agree to our use of cookies.<a href="#" id="decline"><span
                                    style="font-weight: bold;">Decline</span></a>
                        </h5>
                    </div>
                    <div class="right-part">
                        <button id="cookieWraps-b2">Accept All Cookies</button>

                    </div>

                </div>
`;
  }
}
customElements.define("my-cookie", MyCookieDiv);
