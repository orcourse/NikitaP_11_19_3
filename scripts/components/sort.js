function SortCatalog(arr) {
  document.getElementById("catalog").innerHTML = "";
  sortArr = [];
  switch (document.getElementById("selectSort").value) {
    case "Default":
      arr = arr.sort(function(a, b) {
        return a.Id - b.Id;
      });
      new AllProducts(".catalog", arr);
      break;
    case "LowToHigh":
      arr = arr.sort(function(a, b) {
        return a.Price - b.Price;
      });
      new AllProducts(".catalog", arr);
      break;
    case "HighToLow":
      arr = arr.sort(function(a, b) {
        return b.Price - a.Price;
      });
      new AllProducts(".catalog", arr);
      break;
    case "Popularity":
      //дописать
      new AllProducts(".catalog", arr);
      break;
  }
}
