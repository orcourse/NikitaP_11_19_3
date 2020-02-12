function transitionOnType(inputArray, type) {
  let tempArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].Type == type) {
      tempArray.push(inputArray[i]);
    }
  }
  return tempArray;
}
function transitionOnSubType(inputArray, subtype) {
  let tempArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].SubType == subtype) {
      tempArray.push(inputArray[i]);
    }
  }
  return tempArray;
}
function filterType(inputArray, type) {
  let tempArray = [];
  if (type.value == "All") {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].Type == type.value) {
        tempArray.push(inputArray[i]);
      }
    }
    return tempArray;
  }
}
function filterSubTypeClothes(inputArray, subtype) {
  let tempArray = [];
  if (subtype.value == "All") {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].SubType == subtype.value) {
        tempArray.push(inputArray[i]);
      }
    }
    return tempArray;
  }
}
function filterSubTypeShoes(inputArray, subtype) {
  let tempArray = [];
  if (subtype.value == "All") {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].SubType == subtype.value) {
        tempArray.push(inputArray[i]);
      }
    }
    return tempArray;
  }
}
function filterBrand(inputArray, brand) {
  let tempArray = [];
  if (brand.value == "All") {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].Brand == brand.value) {
        tempArray.push(inputArray[i]);
      }
    }
    return tempArray;
  }
}
function filterColor(inputArray, color) {
  let tempArray = [];
  if (color.value == "All") {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].Color == color.value) {
        tempArray.push(inputArray[i]);
      }
    }
    return tempArray;
  }
}
function filterCounty(inputArray, county) {
  let tempArray = [];
  if (county.value == "All") {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].CountryOfOrigin == county.value) {
        tempArray.push(inputArray[i]);
      }
    }
    return tempArray;
  }
}
function filterPrice(inputArray, from, to) {
  let tempArray = [];
  if (from.value == "" || from.value == 0 || to.value == "" || to.value == 0) {
    return inputArray;
  } else {
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i].Price < from.value && inputArray[i].Price > to.value) {
        tempArray.push(inputArray[i]);
      }
    }
    return tempArray;
  }
}
