document.getElementById("result-search").innerHTML = "";
document.getElementById("search-input").value = sessionStorage.getItem("Search");
Results();
sessionStorage.removeItem("Search");


function Search(arr, filter) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let a = String(arr[i].Brand).indexOf(filter);
    if (a != -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function Results() {
  let searchArr = [];
  searchArr = Search(ProductsStorage,document.getElementById("search-input").value);
  document.getElementById("result-search").innerHTML = "";
  new AllProducts(".result-search", searchArr);
  if (searchArr.length == 0) {
    document.getElementById("result-search").innerHTML = "";
  }
  if (document.getElementById("search-input").value.length == 0) {
    document.getElementById("result-search").innerHTML = "";
    new AllProducts(".result-search", ProductsStorage);
  }
}

document.getElementById("search-input").addEventListener("keypress", function(keypress) {
    if (keypress.which == 13) {
        Results();
    }
});
document.getElementById("icon-search").addEventListener("click", ()=> {
    Results()
});
document.getElementById("search-input").oninput = function() {
  Results();
};

