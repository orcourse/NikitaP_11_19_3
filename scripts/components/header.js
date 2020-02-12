/************************************************************
                          HEADER
*************************************************************/
document.querySelector("header").innerHTML = `<div class="container">
<div class="sitelogo"><a href="../index.html">LIAPARO</a></div>
<div class="navLinks">
  <div class="navContent">
    <a href="../../catalog.html" id="navCatalog" class="navLink lang" key="header-catalog">Catalog</a>
    <div class="panelCategory">
      <div class="categoryContainer">
        <ul>
          <li class="liCategory">
            <a href="./catalog.html" id="clothes" class="categoryName lang" key="header-clothes">Clothes</a>
          </li>
          <li class="liCategory">
            <a href="./catalog.html" id="tshirt" class="categoryName lang" key="header-t-shirt">T-shirts</a>
          </li>
          <li class="liCategory">
            <a href="./catalog.html" id="sweatshirts" class="categoryName lang" key="header-sweatshirts">Sweatshirts</a>
          </li>
          <li class="liCategory">
            <a href="./catalog.html" id="trousers" class="categoryName lang" key="header-trousers">Trousers</a>
          </li>
          <li class="liCategory">
            <a href="./catalog.html" id="outerwear" class="categoryName lang" key="header-outerwear">Outerwear</a>
          </li>
        </ul>
        <div class="hrLineCategory"></div>
        <ul>
          <li class="liCategory">
            <a href="./catalog.html" id="shoes" class="categoryName lang" key="header-shoes">Shoes</a>
          </li>
          <li class="liCategory">
            <a href="./catalog.html" id="boots" class="categoryName lang" key="header-boots">Boots</a>
          </li>
          <li class="liCategory">
            <a href="./catalog.html" id="sneakers" class="categoryName lang" key="header-sneakers">Sneakers</a>
          </li>
          <li class="liCategory">
            <a href="./catalog.html" id="gumshoes" class="categoryName lang" key="header-gumshoes">Gumshoes</a>
          </li>
          <li class="liCategory">
            <a href="./catalog.html" id="slippers" class="categoryName lang" key="header-slippers">Slippers</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="navContent"><a href="../../about.html" class="navLink lang" key="header-about">About</a></div>
  <div class="navContent"><a href="../../blog.html" class="navLink lang" key="header-blog">Blog</a></div>
  <div class="navContent"><a href="../../faq.html" class="navLink lang" key="header-faq">Faq</a></div>
</div>
<div class="search">
  <input
    type="search" id="header-search-input"
    class="text_search lang"
    key="header-placeholder-search"
    placeholder="Search for products and more"
  />
  <div id="header-search"><i class="fas fa-search"></i></div>
</div>
<div style="display:flex;">
<div id="mobile-header-search"><i class="fas fa-search icon-search"></i></div>
<div class="account">
  <i class="far fa-user"></i>
  <div class="panelAccount">
    <div class="accountContainer" id = "accountContainer">
    <ul>
    <li class="liAccount liAccbtn">
      <a href="../auth.html" class="btnAcc" id="signUpHeader">SIGN UP</a>
      <a href="../auth.html" class="btnAcc" id="signInHeader">LOG IN</a>
    </li>
  </ul>
    </div>
  </div>
</div>
<div class="cart" id="FastCart">
  <i class="fas fa-shopping-bag"></i>
  <div class="countCart" id="countCart">0</div>
</div>
<div class="language">
  <div id="en" class="translate" style='background-image: url("../../images//language/us.png");'></div>
  <div id="ru" class="translate" style='background-image: url("../../images//language/ru.png");display: none;'></div>
</div>
<div class="style">
  <div id="night" class="translate" style='background-color:#041122;'></div>
  <div id="light" class="translate" style='background-color:#fff;display: none;'></div>
</div>
<div class="burger-menu">
  <div><i class="fas fa-bars"></i></div>
  <div class="panelMenu">
    <div class="panelMenu-container">
    <div class="accordion">
      <div class="tab">
        <input type="checkbox" id="header-tab-catalog" name="tab-group" />
        <label for="header-tab-catalog" class="header-tab-title">
          <a href="../../catalog.html" id="menu-catalog" class="menu-link lang" key="header-catalog">Catalog</a>
        </label>
        <section class="tab-content">
          <div class="tab">
            <input type="checkbox" id="header-tab-catalog-clothes" name="tab-group" />
            <label for="header-tab-catalog-clothes" class="header-tab-title">
            <a href="./catalog.html" id="menu-clothes" class="menu-link lang" key="header-clothes">Clothes</a>
            </label>
            <section class="tab-content">
              <ul>
                <li class="menu">
                  <a href="./catalog.html" id="menu-tshirt" class="menu-categoryName lang" key="header-t-shirt">T-shirts</a>
                </li>
                <li class="menu">
                  <a href="./catalog.html" id="menu-sweatshirts" class="menu-categoryName lang" key="header-sweatshirts">Sweatshirts</a>
                </li>
                <li class="menu">
                 <a href="./catalog.html" id="menu-trousers" class="menu-categoryName lang" key="header-trousers">Trousers</a>
                </li>
                <li class="menu">
                  <a href="./catalog.html" id="menu-outerwear" class="menu-categoryName lang" key="header-outerwear">Outerwear</a>
                </li>
              </ul>
            </section>
          </div>
          <div class="tab">
            <input type="checkbox" id="header-tab-catalog-shoes" name="tab-group" />
            <label for="header-tab-catalog-shoes" class="header-tab-title">
              <a href="./catalog.html" id="menu-shoes" class="menu-link lang" key="header-shoes">Shoes</a>
            </label>
            <section class="tab-content">
              <ul>
                <li class="menu">
                  <a href="./catalog.html" id="menu-boots" class="menu-categoryName lang" key="header-boots">Boots</a>
                </li>
                <li class="menu">
                  <a href="./catalog.html" id="menu-sneakers" class="menu-categoryName lang" key="header-sneakers">Sneakers</a>
                </li>
                <li class="menu">
                  <a href="./catalog.html" id="menu-gumshoes" class="menu-categoryName lang" key="header-gumshoes">Gumshoes</a>
                </li>
                <li class="menu">
                  <a href="./catalog.html" id="menu-slippers" class="menu-categoryName lang" key="header-slippers">Slippers</a>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </div>
      <div class="tab">
        <input type="checkbox" id="header-tab-account" name="tab-group" />
        <label for="header-tab-account" class="header-tab-title lang" key="header-account">Account</label>
          <section class="tab-content" id="menu-account-container">
            <ul>
              <li class="menu liAccbtn">
                <a href="../auth.html" class="btnAcc" id="menu-signUpHeader">SIGN UP</a>
                <a href="../auth.html" class="btnAcc" id="menu-signInHeader">LOG IN</a>
              </li>
            </ul>
          </section>
    </div>
    <div><a href="../../about.html" class="navLink lang" key="header-about">About</a></div>
    <div><a href="../../blog.html" class="navLink lang" key="header-blog">Blog</a></div>
    <div><a href="../../faq.html" class="navLink lang" key="header-faq">Faq</a></div>
    <div class="menu-switch">
      <div class="menu-language">
        <div id="menu-en" class="translate" style='background-image: url("../../images//language/us.png");'></div>
        <div id="menu-ru" class="translate" style='background-image: url("../../images//language/ru.png");display: none;'></div> 
      </div>
      <div class="menu-style">
        <div id="menu-night" class="translate" style='background-color:#041122;'></div>
        <div id="menu-light" class="translate" style='background-color:#fff;display: none;'></div>
      </div>
    </div>
  </div>
</div>
</div>`;

document.getElementById("en").addEventListener("click", () => {
  document.getElementById("ru").style.display = "inline-block";
  document.getElementById("en").style.display = "none";
  localStorage.setItem("Language", "RU");
});
document.getElementById("ru").addEventListener("click", () => {
  document.getElementById("en").style.display = "inline-block";
  document.getElementById("ru").style.display = "none";
  localStorage.setItem("Language", "EN");
});
document.getElementById("menu-en").addEventListener("click", () => {
  document.getElementById("menu-ru").style.display = "inline-block";
  document.getElementById("menu-en").style.display = "none";
  localStorage.setItem("Language", "RU");
});
document.getElementById("menu-ru").addEventListener("click", () => {
  document.getElementById("menu-en").style.display = "inline-block";
  document.getElementById("menu-ru").style.display = "none";
  localStorage.setItem("Language", "EN");
});
if (localStorage.getItem("Language") == "RU") {
  document.getElementById("ru").style.display = "inline-block";
  document.getElementById("en").style.display = "none";
} else {
  document.getElementById("en").style.display = "inline-block";
  document.getElementById("ru").style.display = "none";
}
let translate = document.getElementsByClassName("translate");
let language = document.getElementsByClassName("lang");
for (let i = 0; i < translate.length; i++) {
  translate[i].addEventListener("click", () => {
    Language();
  });
}
function Language() {
  let lang = localStorage.getItem("Language");
  for (let i = 0; i < language.length; i++) {
    if (language[i].getAttribute("key").indexOf("placeholder") != -1) {
      language[i].setAttribute(
        "placeholder",
        arrLang[lang][language[i].getAttribute("key")]
      );
    }
    language[i].innerHTML = arrLang[lang][language[i].getAttribute("key")];
  }
}
function checkLanguage() {
  Language();
  let timeinterval = window.setTimeout(checkLanguage, 1000);
}
checkLanguage();

// работа с текущем user-ом
let titleHeaderAcc = document.getElementById("NameTitle");
let accountContainer = document.getElementById("accountContainer");
let menuAccountContainer = document.getElementById("menu-account-container");
let currentUser = JSON.parse(sessionStorage.getItem("CurrentUser"));
if (currentUser != null) {
  Customers.push(currentUser);
}
for (let i = 0; i < Customers.length; i++) {
  if (currentUser != null) {
    if (currentUser.Id == Customers[i].Id) {
      accountContainer.innerHTML = ` 
  <ul>
    <li class="liAccount"><p class="title lang" key="header-welcome" id="NameTitle">Hello</p>${Customers[i].FirstName}</li>
  </ul>
  <div class="hrLine"></div>
  <ul>
    <li class="liAccount">
      <a href="../../profile.html" class="myAcc lang" key="header-myprofile" id="myProfileHeader">My profile</a>
    </li>
    <li class="liAccount">
      <a href="../../profile.html" class="myAcc lang" key="header-editprofile" id="myDetailsHeader">Edit profile</a>
    </li>
    <li class="liAccount">
      <a href="../../profile.html" class="myAcc lang" key="header-myorders" id="MyOredersHeader">My orders</a>
    </li>
    <li class="liAccount">
      <a href="../../profile.html" class="myAcc lang" key="header-mycart" id="myCartHeader">My cart</a>
    </li>
    <li class="liAccount">
      <a href="../../profile.html" class="myAcc lang" key="header-mywishlist" id="myWishlistHeader">My wishlist</a>
    </li>
  </ul>
  <div class="hrLine"></div>
  <ul>
    <li class="liAccount">
      <a href="../../index.html" class="myAcc lang" key="header-exitaccount" id="ExitAccount">Logout</a>
     </li>
  </ul>
  `;
  menuAccountContainer.innerHTML = `
            <ul>
              <li class="menu"><p class="title lang" key="header-welcome" id="NameTitle">Hello</p>${Customers[i].FirstName}</li>
            </ul>
            <div class="hrLine"></div>
            <ul>
              <li class="menu">
                <a href="../../profile.html" class="myAcc lang" key="header-myprofile" id="menu-myProfileHeader">My profile</a>
              </li>
              <li class="menu">
                <a href="../../profile.html" class="myAcc lang" key="header-editprofile" id="menu-myDetailsHeader">Edit profile</a>
              </li>
              <li class="menu">
                <a href="../../profile.html" class="myAcc lang" key="header-myorders" id="menu-MyOredersHeader">My orders</a>
              </li>
              <li class="menu">
                <a href="../../profile.html" class="myAcc lang" key="header-mycart" id="menu-myCartHeader">My cart</a>
              </li>
              <li class="menu">
                <a href="../../profile.html" class="myAcc lang" key="header-mywishlist" id="menu-myWishlistHeader">My wishlist</a>
              </li>
            </ul>
            <div class="hrLine"></div>
            <ul>
              <li class="menu">
                <a href="../../index.html" class="myAcc lang" key="header-exitaccount" id="menu-exit-account">Logout</a>
              </li>
            </ul>`;
      let exitAccount = document.getElementById("ExitAccount");
      let menuExitAccount = document.getElementById("menu-exit-account");

      exitAccount.addEventListener("click", () => {
        document.location.href = "./index.html";
        sessionStorage.removeItem("CurrentUser");
        sessionStorage.removeItem("Cart");
        sessionStorage.removeItem("Wishlist");
        sessionStorage.removeItem("Order");
        sessionStorage.removeItem("Review");
      });
      menuExitAccount.addEventListener("click", () => {
        document.location.href = "./index.html";
        sessionStorage.removeItem("CurrentUser");
        sessionStorage.removeItem("Cart");
        sessionStorage.removeItem("Wishlist");
        sessionStorage.removeItem("Order");
        sessionStorage.removeItem("Review");
      });
    }
  }
}

if (document.getElementById("signUpHeader") != null) {
  document.getElementById("signUpHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateAuth", "SignUp");
  });
  document.getElementById("menu-signUpHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateAuth", "SignUp");
  });
}
if (document.getElementById("signInHeader") != null) {
  document.getElementById("signInHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateAuth", "SignIn");
  });
  document.getElementById("menu-signInHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateAuth", "SignIn");
  });
}

if (document.getElementById("myProfileHeader") != null) {
  document.getElementById("myProfileHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateBarAccount", "Profile");
  });
  document.getElementById("menu-myProfileHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateBarAccount", "Profile");
  });
}
if (document.getElementById("myDetailsHeader") != null) {
  document.getElementById("myDetailsHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateBarAccount", "Details");
  });
  document.getElementById("menu-myDetailsHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateBarAccount", "Details");
  });
}
if (document.getElementById("MyOredersHeader") != null) {
  document.getElementById("MyOredersHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateBarAccount", "Oreders");
  });
  document.getElementById("menu-MyOredersHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateBarAccount", "Oreders");
  });
}
if (document.getElementById("myCartHeader") != null) {
  document.getElementById("myCartHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateBarAccount", "Cart");
  });
  document.getElementById("menu-myCartHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateBarAccount", "Cart");
  });
}
if (document.getElementById("myWishlistHeader") != null) {
  document.getElementById("myWishlistHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateBarAccount", "Wishlist");
  });
  document.getElementById("menu-myWishlistHeader").addEventListener("click", () => {
    sessionStorage.setItem("StateBarAccount", "Wishlist");
  });
}

if (document.getElementById("FastCart") != null) {
  document.getElementById("FastCart").addEventListener("click", () => {
    if (JSON.parse(sessionStorage.getItem("CurrentUser") != undefined)) {
      sessionStorage.setItem("StateBarAccount", "Cart");
      document.location.href = "./profile.html";
    } else document.location.href = "./auth.html";
  });
}
let allCartCust = JSON.parse(sessionStorage.getItem("Cart"));
let allWishlisstCust = JSON.parse(sessionStorage.getItem("Wishlist"));
let allOrderCust = JSON.parse(sessionStorage.getItem("Order"));
let allReviewCust = JSON.parse(sessionStorage.getItem("Review"));

function checkCart() {
  if (allCartCust != undefined) {
    for (let i = 0; i < CartCustomer.length; i++) {
      CartCustomer.splice(i);
    }
    for (let i = 0; i < allCartCust.length; i++) {
      CartCustomer.push(allCartCust[i]);
    }
    document.getElementById("countCart").innerHTML = allCartCust.length;
  }
}
checkCart();

if (allWishlisstCust != undefined) {
  for (let i = 0; i < WishlistCustomer.length; i++) {
    WishlistCustomer.splice(i);
  }
  for (let i = 0; i < allWishlisstCust.length; i++) {
    WishlistCustomer.push(allWishlisstCust[i]);
  }
}
if (allOrderCust != undefined) {
  for (let i = 0; i < allOrderCust.length; i++) {
    OrderCustomer.splice(i);
  }
  for (let i = 0; i < allOrderCust.length; i++) {
    OrderCustomer.push(allOrderCust[i]);
  }
}

if (allReviewCust != undefined) {
  for (let i = 0; i < allReviewCust.length; i++) {
    ReviewCustomer.splice(i);
  }
  for (let i = 0; i < allReviewCust.length; i++) {
    ReviewCustomer.push(allReviewCust[i]);
  }
}

document.getElementById("clothes").addEventListener("click", () => {
  sessionStorage.setItem("StateCategory", "");
  sessionStorage.setItem("StateCategoryType", "Clothes");
});
document.getElementById("tshirt").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Clothes");
  sessionStorage.setItem("StateCategory", "T-shirt");
});
document.getElementById("sweatshirts").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Clothes");
  sessionStorage.setItem("StateCategory", "Sweatshirt");
});
document.getElementById("trousers").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Clothes");
  sessionStorage.setItem("StateCategory", "Trouser");
});
document.getElementById("outerwear").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Clothes");
  sessionStorage.setItem("StateCategory", "Outerwear");
});
document.getElementById("shoes").addEventListener("click", () => {
  sessionStorage.setItem("StateCategory", "");
  sessionStorage.setItem("StateCategoryType", "Shoes");
});
document.getElementById("boots").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Shoes");
  sessionStorage.setItem("StateCategory", "Boots");
});
document.getElementById("sneakers").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Shoes");
  sessionStorage.setItem("StateCategory", "Sneakers");
});
document.getElementById("trousers").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Shoes");
  sessionStorage.setItem("StateCategory", "Trousers");
});
document.getElementById("gumshoes").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Shoes");
  sessionStorage.setItem("StateCategory", "Gumshoes");
});
document.getElementById("slippers").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Shoes");
  sessionStorage.setItem("StateCategory", "Slippers");
});
document.getElementById("navCatalog").addEventListener("click", () => {
  sessionStorage.removeItem("StateCategory");
  sessionStorage.removeItem("StateCategoryType");
});


document.getElementById("menu-clothes").addEventListener("click", () => {
  sessionStorage.setItem("StateCategory", "");
  sessionStorage.setItem("StateCategoryType", "Clothes");
});
document.getElementById("menu-tshirt").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Clothes");
  sessionStorage.setItem("StateCategory", "T-shirt");
});
document.getElementById("menu-sweatshirts").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Clothes");
  sessionStorage.setItem("StateCategory", "Sweatshirt");
});
document.getElementById("menu-trousers").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Clothes");
  sessionStorage.setItem("StateCategory", "Trouser");
});
document.getElementById("menu-outerwear").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Clothes");
  sessionStorage.setItem("StateCategory", "Outerwear");
});
document.getElementById("menu-shoes").addEventListener("click", () => {
  sessionStorage.setItem("StateCategory", "");
  sessionStorage.setItem("StateCategoryType", "Shoes");
});
document.getElementById("menu-boots").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Shoes");
  sessionStorage.setItem("StateCategory", "Boots");
});
document.getElementById("menu-sneakers").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Shoes");
  sessionStorage.setItem("StateCategory", "Sneakers");
});
document.getElementById("menu-trousers").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Shoes");
  sessionStorage.setItem("StateCategory", "Trousers");
});
document.getElementById("menu-gumshoes").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Shoes");
  sessionStorage.setItem("StateCategory", "Gumshoes");
});
document.getElementById("menu-slippers").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", "Shoes");
  sessionStorage.setItem("StateCategory", "Slippers");
});
document.getElementById("menu-catalog").addEventListener("click", () => {
  sessionStorage.removeItem("StateCategory");
  sessionStorage.removeItem("StateCategoryType");
});

document
  .getElementById("header-search-input")
  .addEventListener("keypress", function(keyPressed) {
    if (keyPressed.which === 13) {
      sessionStorage.setItem(
        "Search",
        document.getElementById("header-search-input").value
      );
      document.location.href = "./search.html";
    }
  });
document.getElementById("header-search").addEventListener("click", () => {
  sessionStorage.setItem(
    "Search",
    document.getElementById("header-search-input").value
  );
  document.location.href = "./search.html";
});

document.getElementById("mobile-header-search").addEventListener("click", () => {
  document.location.href = "./search.html";
});



document.getElementById("night").addEventListener("click", () => {
  document.getElementById("light").style.display = "inline-block";
  document.getElementById("night").style.display = "none";
  document.getElementById("menu-light").style.display = "inline-block";
  document.getElementById("menu-night").style.display = "none";
  localStorage.setItem("Style", "Night");
  includeCSS("./styles/components/nightstyle.css");
});
document.getElementById("light").addEventListener("click", () => {
  document.getElementById("night").style.display = "inline-block";
  document.getElementById("light").style.display = "none";
  document.getElementById("menu-night").style.display = "inline-block";
  document.getElementById("menu-light").style.display = "none";
  localStorage.setItem("Style", "Light");
  deleteCSS("nightstyle.css");
});
document.getElementById("menu-night").addEventListener("click", () => {
  document.getElementById("light").style.display = "inline-block";
  document.getElementById("night").style.display = "none";
  document.getElementById("menu-light").style.display = "inline-block";
  document.getElementById("menu-night").style.display = "none";
  localStorage.setItem("Style", "Night");
  includeCSS("./styles/components/nightstyle.css");
});
document.getElementById("menu-light").addEventListener("click", () => {
  document.getElementById("night").style.display = "inline-block";
  document.getElementById("light").style.display = "none";
  document.getElementById("menu-night").style.display = "inline-block";
  document.getElementById("menu-light").style.display = "none";
  localStorage.setItem("Style", "Light");
  deleteCSS("nightstyle.css");
});

function deleteCSS(link) {
  for (i = 0; i < document.getElementsByTagName("link").length; i++) {
    if (document.getElementsByTagName("link")[i].href.indexOf(link) != -1) {
      document.getElementsByTagName("link")[i].remove();
    }
  }
}
function includeCSS(link) {
  let head = window.document.getElementsByTagName("head")[0];
  let style = document.createElement("link");
  style.href = link;
  style.rel = "stylesheet";
  head.appendChild(style);
}

if (localStorage.getItem("Style") == "Light") {
  document.getElementById("night").style.display = "inline-block";
  document.getElementById("light").style.display = "none";
  document.getElementById("menu-night").style.display = "inline-block";
  document.getElementById("menu-light").style.display = "none";
  deleteCSS("nightstyle.css");
} else if (localStorage.getItem("Style") == "Night") {
  includeCSS("./styles/components/nightstyle.css");
  document.getElementById("light").style.display = "inline-block";
  document.getElementById("night").style.display = "none";
  document.getElementById("menu-light").style.display = "inline-block";
  document.getElementById("menu-night").style.display = "none";
}
