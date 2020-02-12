let allProducts = new AllProducts(".catalog", ProductsStorage);

selectType.addEventListener("click", () => {
  if (selectType.value == "Clothes") {
    document.getElementById("SubTypeClothes").style.display = "flex";
    document.getElementById("SubTypeShoes").style.display = "none";
  } else if (selectType.value == "Shoes") {
    document.getElementById("SubTypeShoes").style.display = "flex";
    document.getElementById("SubTypeClothes").style.display = "none";
  } else if (selectType.value == "All") {
    document.getElementById("SubTypeShoes").style.display = "none";
    document.getElementById("SubTypeClothes").style.display = "none";
  }
});

document.getElementById("btnFilter").addEventListener("click", () => {
  let filterArr = [];
  filterArr = filterType(
    ProductsStorage,
    document.getElementById("selectType")
  );
  if (document.getElementById("SubTypeClothes").style.display == "flex") {
    filterArr = filterSubTypeClothes(
      filterArr,
      document.getElementById("selectSubTypeClothes")
    );
  }
  if (document.getElementById("SubTypeShoes").style.display == "flex") {
    filterArr = filterSubTypeShoes(
      filterArr,
      document.getElementById("selectSubTypeShoes")
    );
  }
  filterArr = filterBrand(filterArr, document.getElementById("selectBrand"));
  filterArr = filterColor(filterArr, document.getElementById("selectColor"));
  filterArr = filterCounty(filterArr, document.getElementById("selectCountry"));
  filterArr = filterPrice(
    filterArr,
    document.getElementById("inputFromPrice"),
    document.getElementById("inputToPrice")
  );
  document.getElementById("catalog").innerHTML = "";
  new AllProducts(".catalog", filterArr);
  tempArr = filterArr;
});
let tempArr = ProductsStorage;
document.getElementById("selectSort").addEventListener("change", () => {
  SortCatalog(tempArr);
});

document.getElementById("clearFilter").addEventListener("click", ()=>{
  document.location.href = "./catalog.html";
})

let StatusCategory = sessionStorage.getItem("StateCategory");
let StatusCategoryType = sessionStorage.getItem("StateCategoryType");

if (StatusCategoryType == "Clothes" && StatusCategory == "") {
  document.getElementById("Type").style.display = "none";
  document.getElementById("SubTypeClothes").style.display = "flex";
  document.getElementById("filter-catalog").classList.add("novel");
  document.getElementById("typebreadcrumb").style.display = "block";
  document.getElementById("catalogbreadcrumb").classList.remove("active");
  document.getElementById("typebreadcrumb").classList.add("class", "active");
  document.getElementById("typebreadcrumb").innerHTML = `${StatusCategoryType}`;
  ProductsStorage = transitionOnType(ProductsStorage, StatusCategoryType);
  document.getElementById("catalog").innerHTML = "";
  new AllProducts(".catalog", ProductsStorage);
}
if (
  StatusCategoryType == "Clothes" &&
  (StatusCategory == "T-shirt" ||
    StatusCategory == "Sweatshirt" ||
    StatusCategory == "Trouser" ||
    StatusCategory == "Outerwear")
) {
  document.getElementById("Type").style.display = "none";
  document.getElementById("SubTypeClothes").style.display = "none";
  document.getElementById("filter-catalog").classList.add("new");
  document.getElementById("typebreadcrumb").style.display = "block";
  document.getElementById("subtypebreadcrumb").style.display = "block";
  document.getElementById("typebreadcrumb").innerHTML = `${StatusCategoryType}`;
  document.getElementById("catalogbreadcrumb").classList.remove("active");
  document.getElementById("typebreadcrumb").classList.remove("active");
  document.getElementById("subtypebreadcrumb").classList.add("class", "active");
  document.getElementById("subtypebreadcrumb").innerHTML = `${StatusCategory}`;
  tempArr = transitionOnSubType(ProductsStorage, StatusCategory);
  document.getElementById("catalog").innerHTML = "";
  new AllProducts(".catalog", tempArr);
  SortCatalog(tempArr);
}
if (StatusCategoryType == "Shoes" && StatusCategory == "") {
  document.getElementById("Type").style.display = "none";
  document.getElementById("SubTypeShoes").style.display = "flex";
  document.getElementById("filter-catalog").classList.add("novel");
  document.getElementById("typebreadcrumb").style.display = "block";
  document.getElementById("catalogbreadcrumb").classList.remove("active");
  document.getElementById("typebreadcrumb").classList.add("class", "active");
  document.getElementById("typebreadcrumb").innerHTML = `${StatusCategoryType}`;
  tempArr = ProductsStorage;
  tempArr = transitionOnType(ProductsStorage, StatusCategoryType);
  document.getElementById("catalog").innerHTML = "";
  new AllProducts(".catalog", tempArr);
  SortCatalog(tempArr);
}

if (
  StatusCategoryType == "Shoes" &&
  (StatusCategory == "Boots" ||
    StatusCategory == "Sneakers" ||
    StatusCategory == "Trousers" ||
    StatusCategory == "Gumshoes" ||
    StatusCategory == "Slippers")
) {
  document.getElementById("Type").style.display = "none";
  document.getElementById("SubTypeShoes").style.display = "none";
  document.getElementById("filter-catalog").classList.add("new");
  document.getElementById("typebreadcrumb").style.display = "block";
  document.getElementById("subtypebreadcrumb").style.display = "block";
  document.getElementById("typebreadcrumb").innerHTML = `${StatusCategoryType}`;
  document.getElementById("catalogbreadcrumb").classList.remove("active");
  document.getElementById("typebreadcrumb").classList.remove("active");
  document.getElementById("subtypebreadcrumb").classList.add("class", "active");
  document.getElementById("subtypebreadcrumb").innerHTML = `${StatusCategory}`;
  tempArr = transitionOnSubType(ProductsStorage, StatusCategory);
  document.getElementById("catalog").innerHTML = "";
  new AllProducts(".catalog", tempArr);
  SortCatalog(tempArr);
}

document.getElementById("catalogbreadcrumb").addEventListener("click", () => {
  sessionStorage.removeItem("StateCategory");
  sessionStorage.removeItem("StateCategoryType");
});
document.getElementById("typebreadcrumb").addEventListener("click", () => {
  sessionStorage.setItem("StateCategory", "");
});
