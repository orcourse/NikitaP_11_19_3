let accountOverview = document.getElementById("Accountoverview");
let myDetails = document.getElementById("MyDetails");
let myOrders = document.getElementById("MyOrders");
let myCart = document.getElementById("MyCart");
let myWishlist = document.getElementById("MyWishlist");
let logoutAcc = document.getElementById("Logout");
let contentProfile = document.getElementById("content-profile");

if (screen.width >= 320 && screen.width <= 760) {
  document.getElementById("sideLeft").style.display = "none";
  document.getElementById("content-profile").style.display = "block";
} else {
  document.getElementById("sideLeft").style.display = "block";
  document.getElementById("content-profile").style.display = "block";
}

function FullPriceCart(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].PriceForMore;
  }
  let a = sum - (sum * 10) / 1000;
  sessionStorage.setItem("Cart", JSON.stringify(arr));
  document.getElementById("cart-product-container").innerHTML = "";
  new ViewCart(".cart-product-container", arr);
  return sum;
}
function allPriceOrder(arr) {
  let sumorder = 0;
  for (let i = 0; i < arr.length; i++) {
    sumorder += arr[i].Price;
  }
  return sumorder;
}

// load first
document.getElementById("logoProfile").innerHTML =
  currentUser.FirstName.substr(0, 1).toUpperCase() +
  currentUser.LastName.substr(0, 1).toUpperCase();

document.getElementById("title-name-profile").innerHTML =
  currentUser.FirstName + " " + currentUser.LastName;

if (sessionStorage.getItem("SignUp") == "SignUp") {
  container.classList.add("right-panel-active");
} else if (sessionStorage.getItem("SignIn") == "SignIn") {
  container.classList.remove("right-panel-active");
}
clickAcountOverview();

// click bar accountOverview
function clickAcountOverview() {
  accountOverview.classList.add("active-side-bar");
  accountOverview.classList.add("active-side-bar");
  myDetails.classList.remove("active-side-bar");
  myOrders.classList.remove("active-side-bar");
  myCart.classList.remove("active-side-bar");
  myWishlist.classList.remove("active-side-bar");
  contentProfile.style.backgroundImage = "url(../../images/account.jpg)";
  contentProfile.innerHTML = `
    <h1 class="accountoverview-title lang" key="profile-accout-overview-titlstart">
    Welcome to
    </h1>
    <h1 class="accountoverview-title lang" key="profile-accout-overview-titlend">
    your account
    </h1>`;
}

// click bar myDetails
function clickMyDetails() {
  if (screen.width >= 320 && screen.width <= 760) {
    document.getElementById("sideLeft").style.display = "none";
    document.getElementById("content-profile").style.display = "block";
  } else {
    document.getElementById("sideLeft").style.display = "block";
    document.getElementById("content-profile").style.display = "block";
  }
  accountOverview.classList.remove("active-side-bar");
  myDetails.classList.add("active-side-bar");
  myOrders.classList.remove("active-side-bar");
  myCart.classList.remove("active-side-bar");
  myWishlist.classList.remove("active-side-bar");
  contentProfile.style.backgroundImage = "none";
  contentProfile.innerHTML = `
  <div id="back-profile"><i class="fas fa-chevron-circle-left icon-content-profile back-profile"></i></div>
    <i class="far fa-address-card icon-content-profile"></i>
    <h1 class="lang" key="profile-mydetails">My Details</h1>
    <h5 class="lang" key="profile-mydetails-text">Feel free to edit any of your details below so your <b>LIAPARO</b> account is totally up to date.</h5>
    <h3 class="lang" key="profile-mydetails-firstname">First Name:</h3>
    <input type="text" id="FirstNameDetail">
    <h3 class="lang" key="profile-mydetails-lastname">Last Name:</h3>
    <input type="text" id="LastNameDetail" />
    <h3 class="lang" key="profile-mydetails-email">Email:</h3>
    <input type="text" id="EmailDetail" />
    <h3 class="lang" key="profile-mydetails-dateofbirth">Date of birth:</h3>
    <input type="date" id="DateofBirthDetail" />
    <h3 class="lang" key="profile-mydetails-address">Address:</h3>
    <input type="text" id="AddressDetail" />
    <a id="btnSaveChanges" class="lang" key="profile-mydetails-btn-savechanges">SAVE CHANGES</a>`;
  document.getElementById("FirstNameDetail").value = currentUser.FirstName;
  document.getElementById("LastNameDetail").value = currentUser.LastName;
  document.getElementById("EmailDetail").value = currentUser.Email;
  document.getElementById("DateofBirthDetail").value = currentUser.DateOfBirth;
  document.getElementById("AddressDetail").value = currentUser.Address;
  let btnSaveChanges = document.getElementById("btnSaveChanges");

  btnSaveChanges.addEventListener("click", () => {
    for (let i = 0; i < Customers.length; i++) {
      if (currentUser.Id == Customers[i].Id) {
        Customers[i].FirstName = document.getElementById(
          "FirstNameDetail"
        ).value;
        Customers[i].LastName = document.getElementById("LastNameDetail").value;
        Customers[i].Email = document.getElementById("EmailDetail").value;
        Customers[i].DateOfBirth = document.getElementById(
          "DateofBirthDetail"
        ).value;
        Customers[i].Address = document.getElementById("AddressDetail").value;
        sessionStorage.setItem("CurrentUser", JSON.stringify(Customers[i]));
      }
    }
  });
  document.getElementById("back-profile").addEventListener("click", () => {
    document.getElementById("sideLeft").style.display = "block";
    document.getElementById("content-profile").style.display = "none";
  });
}

// click bar myOrders
function clickMyOrders() {
  if (screen.width >= 320 && screen.width <= 760) {
    document.getElementById("sideLeft").style.display = "none";
    document.getElementById("content-profile").style.display = "block";
  } else {
    document.getElementById("sideLeft").style.display = "block";
    document.getElementById("content-profile").style.display = "block";
  }
  accountOverview.classList.remove("active-side-bar");
  myDetails.classList.remove("active-side-bar");
  myOrders.classList.add("active-side-bar");
  myCart.classList.remove("active-side-bar");
  myWishlist.classList.remove("active-side-bar");
  contentProfile.style.backgroundImage = "none";
  contentProfile.innerHTML = `
  <div id="back-profile"><i class="fas fa-chevron-circle-left icon-content-profile back-profile"></i></div>
    <i class="fas fa-box-open icon-content-profile"></i>
    <h1 class="lang" key="profile-myorders">My Orders</h1>
    <div class="order-product-container" id="order-product-container">
    </div>
    <div class="full-price-container" >
        <h2 class="lang" key="profile-myorders-allamount">Amount to all orders:</h2>
        <span id="priceorders">0</span>
      </div>`;
  let allOrder = JSON.parse(sessionStorage.getItem("Order"));
  if (allOrder != undefined) {
    new ViewOrder(".order-product-container", allOrder);
    document.getElementById("priceorders").innerHTML = allPriceOrder(allOrder);
  }
  document.getElementById("back-profile").addEventListener("click", () => {
    document.getElementById("sideLeft").style.display = "block";
    document.getElementById("content-profile").style.display = "none";
  });
}

// click bar myCart
function clickMyCart() {
  if (screen.width >= 320 && screen.width <= 760) {
    document.getElementById("sideLeft").style.display = "none";
    document.getElementById("content-profile").style.display = "block";
  } else {
    document.getElementById("sideLeft").style.display = "block";
    document.getElementById("content-profile").style.display = "block";
  }
  accountOverview.classList.remove("active-side-bar");
  myDetails.classList.remove("active-side-bar");
  myOrders.classList.remove("active-side-bar");
  myCart.classList.add("active-side-bar");
  myWishlist.classList.remove("active-side-bar");
  contentProfile.style.backgroundImage = "none";
  contentProfile.innerHTML = `
  <div id="back-profile"><i class="fas fa-chevron-circle-left icon-content-profile back-profile"></i></div>
    <i class="fas fa-shopping-bag icon-content-profile"></i>
    <h1 class="lang" key="profile-mycart">My Cart</h1>
    <div class="cart-product-container" id="cart-product-container">
    </div>
    <div>  
      <div class="full-price-container">
        <h2 class="lang" key="profile-mycart-fullprice">Full Price:</h2>
        <span id="fullprice">0</span>
      </div>
      <div class="cart-btn-container">
        <a class="cart-btn lang" key="profile-mycart-btn-clearall" id="clearall">Clear All</a>
        <a class="cart-btn lang" key="profile-mycart-btn-checkout" id="checkout">checkout</a>
      </div>
    </div>
    `;
  let allCarts = JSON.parse(sessionStorage.getItem("Cart"));
  if (allCarts != undefined) {
    new ViewCart(".cart-product-container", allCarts);
    document.getElementById("fullprice").innerHTML = FullPriceCart(allCart);
  }
  document.getElementById("clearall").addEventListener("click", () => {
    for (let i = 0; i < allCart.length; i++) {
      allCart.splice(i);
      document.getElementById("fullprice").innerHTML = FullPriceCart(allCart);
    }
  });
  document.getElementById("checkout").addEventListener("click", () => {
    for (let i = 0; i < allCartCust.length; i++) {
      if (allCart.length > 0) {
        let Orders = new Order(
          allCart[i].ProductCart,
          allCart[i].CustomerCart,
          document.getElementById(`selectsize${i}`).value,
          allCart[i].Amount,
          allCart[i].PriceForMore
        );
        OrderCustomer.push(Orders);
      }
    }
    for (let i = 0; i < allCart.length; i++) {
      allCart.splice(i);
    }
    sessionStorage.setItem("Cart", JSON.stringify(allCart));
    sessionStorage.setItem("Order", JSON.stringify(OrderCustomer));
    let allCart = JSON.parse(sessionStorage.getItem("Cart"));
    if (allCart != undefined) {
      document.getElementById("cart-product-container").innerHTML = "";
      new ViewCart(".cart-product-container", allCart);
    }
    document.getElementById("fullprice").innerHTML = "0";
  });
  document.getElementById("back-profile").addEventListener("click", () => {
    document.getElementById("sideLeft").style.display = "block";
    document.getElementById("content-profile").style.display = "none";
  });
}

// click bar myWishlist
function clickMyWishlist() {
  if (screen.width >= 320 && screen.width <= 760) {
    document.getElementById("sideLeft").style.display = "none";
    document.getElementById("content-profile").style.display = "block";
  } else {
    document.getElementById("sideLeft").style.display = "block";
    document.getElementById("content-profile").style.display = "block";
  }
  accountOverview.classList.remove("active-side-bar");
  myDetails.classList.remove("active-side-bar");
  myOrders.classList.remove("active-side-bar");
  myCart.classList.remove("active-side-bar");
  myWishlist.classList.add("active-side-bar");
  contentProfile.style.backgroundImage = "none";
  contentProfile.innerHTML = `
  <div id="back-profile"><i class="fas fa-chevron-circle-left icon-content-profile back-profile"></i></div>
    <i class="far fa-star icon-content-profile"></i>
    <h1 class="lang" key="profile-mywishlist">My Wishlist</h1>
    <div class="wishlist-product-container" id="wishlist-product-container">
    </div>`;
  let allWishlist = JSON.parse(sessionStorage.getItem("Wishlist"));
  if (allWishlist != undefined) {
    new ViewWishlist(".wishlist-product-container", allWishlist);
  }
  document.getElementById("back-profile").addEventListener("click", () => {
    document.getElementById("sideLeft").style.display = "block";
    document.getElementById("content-profile").style.display = "none";
  });
}

accountOverview.addEventListener("click", () => {
  sessionStorage.setItem("StateBarAccount", "Profile");
  clickAcountOverview();
});

myDetails.addEventListener("click", () => {
  sessionStorage.setItem("StateBarAccount", "Details");
  clickMyDetails();
});

myOrders.addEventListener("click", () => {
  sessionStorage.setItem("StateBarAccount", "Oreders");
  clickMyOrders();
});

myCart.addEventListener("click", () => {
  sessionStorage.setItem("StateBarAccount", "Cart");
  clickMyCart();
});

myWishlist.addEventListener("click", () => {
  sessionStorage.setItem("StateBarAccount", "Wishlist");
  clickMyWishlist();
});

//выход из аккаунта
logoutAcc.addEventListener("click", () => {
  sessionStorage.removeItem("CurrentUser");
  sessionStorage.removeItem("Cart");
  sessionStorage.removeItem("Wishlist");
  sessionStorage.removeItem("Order");
  sessionStorage.removeItem("Review");
  document.location.href = "./index.html";
});

if (sessionStorage.getItem("StateBarAccount") == "Profile") {
  clickAcountOverview();
} else if (sessionStorage.getItem("StateBarAccount") == "Details") {
  clickMyDetails();
} else if (sessionStorage.getItem("StateBarAccount") == "Oreders") {
  clickMyOrders();
} else if (sessionStorage.getItem("StateBarAccount") == "Cart") {
  clickMyCart();
} else if (sessionStorage.getItem("StateBarAccount") == "Wishlist") {
  clickMyWishlist();
}
