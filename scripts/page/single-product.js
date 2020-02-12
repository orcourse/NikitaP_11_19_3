let currentProduct = JSON.parse(sessionStorage.getItem("CurrentProduct"));

new SingleProduct(".info-container", currentProduct);

document.getElementById("singleproducttype").innerHTML = currentProduct.Type;
document.getElementById("singleproductsubtype").innerHTML =
  currentProduct.SubType;
document.getElementById("currentproduct").innerHTML = currentProduct.Brand;

document
  .getElementById("singleproductsubtype")
  .addEventListener("click", () => {
    sessionStorage.setItem("StateCategory", currentProduct.SubType);
  });

document.getElementById("singleproducttype").addEventListener("click", () => {
  sessionStorage.setItem("StateCategoryType", currentProduct.Type);
  sessionStorage.setItem("StateCategory", "");
});

document.getElementById("review-items").innerHTML = "";

document.getElementById("btnReview").addEventListener("click", () => {
  let currentCustomer = JSON.parse(sessionStorage.getItem("CurrentUser"));
  if(currentUser != null) {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let days = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();
  let DateReview;
  let TimeReview;
  if(date.getFullYear() > 0 && date.getFullYear() < 10) {
    year = `0${date.getFullYear()}`;
  }
  if(date.getMonth() >= 0 && date.getMonth() < 10) {
    month = `0${date.getMonth()+1}`;
  }
  if(date.getDay() > 0 && date.getDay() < 10) {
    days = `0${date.getDay()}`;
  }
  if(date.getHours() > 0 && date.getHours() < 10) {
    hours = `0${date.getHours()}`;
  }
  if(date.getMinutes() > 0 && date.getMinutes() < 10) {
    minutes = `0${date.getMinutes()}`;
  }
  if(date.getSeconds() > 0 && date.getSeconds() < 10) {
    sec = `0${date.getSeconds()}`;
  }
  DateReview = `${days}.${month}.${year}`;
  TimeReview = `${hours}:${minutes}:${sec}`;

  let Reviews = new Review(currentProduct, currentUser, document.getElementById("description").value, DateReview, TimeReview);
  ReviewCustomer.push(Reviews);
  sessionStorage.setItem("Review", JSON.stringify(ReviewCustomer));
  document.getElementById("description").value = "";
  document.getElementById("review-items").innerHTML = "";
  new ViewReview(".review-items", ReviewCustomer);
}
else {
  document.location.href = "./auth.html"
}
});

new ViewReview(".review-items", ReviewCustomer);

