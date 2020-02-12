class AllProducts {
  constructor(containerProducts, Products) {
    this.container = document.querySelector(containerProducts);
    this.Products = Products;
    this.createCatalog();
  }

  createCatalog() {
    let wrapper = document.createElement("slot");
    for (let i = 0; i < this.Products.length; i++) {
      let sale = 0;
      if (this.Products[i].Discount != undefined) {
        if (
          Date.now() <
          Date.parse(
            `${this.Products[i].Discount.dateEnd}T${this.Products[i].Discount.timeEnd}`
          )
        ) {
          sale = Math.floor(
            this.Products[i].Price -
              this.Products[i].Price *
                (this.Products[i].Discount.percentageShare / 100)
          );
        }
      }
      let item = this.getCatalogItem({
        tagName: "div",
        className: `catalog-item`
      });
      let img = this.getCatalogItem({
        tagName: "div",
        className: "ProductPhoto",
        backgroundImage: `url('${this.Products[i].Photo.url3}')`
      });
      let brand = this.getCatalogItem({
        tagName: "div",
        className: "ProductBrand",
        textName: this.Products[i].Brand
      });
      let div = this.getCatalogItem({
        tagName: "div"
      });
      let county = this.getCatalogItem({
        tagName: "span",
        className: "ProductCountry",
        textName: this.Products[i].CountryOfOrigin
      });
      let subtype = this.getCatalogItem({
        tagName: "span",
        className: "ProductSubType",
        textName: this.Products[i].SubType
      });
      let pricecontainer = this.getCatalogItem({
        tagName: "div",
        className: "product-price-container"
      });
      let price = this.getCatalogItem({
        tagName: "span",
        className: "ProductPrice",
        textName: this.Products[i].Price
      });
      let saleprice = this.getCatalogItem({
        tagName: "span",
        className: "ProductPrice",
        textName: sale
      });
      let divBtn = this.getCatalogItem({
        tagName: "div",
        className: "btnProduct-container"
      });
      let btnCart = this.getCatalogItem({
        tagName: "div",
        id: `btnCart${i}`,
        className: "btnProduct lang",
        key: "catalog-btn-addtocart",
        textName: "add to cart"
      });
      let btnMoreDetails = this.getCatalogItem({
        tagName: "div",
        id: `moreDetails${i}`,
        className: "btnProduct lang",
        key: "catalog-btn-moredetails",
        textName: "more details"
      });
      let btnWishlist = this.getCatalogItem({
        tagName: "div",
        id: `btnWishlist${i}`,
        className: "btnProduct lang",
        key: "catalog-btn-wishlist",
        textName: "Wishlist"
      });

      item.appendChild(img);
      item.appendChild(brand);
      item.appendChild(div);
      div.appendChild(county);
      div.appendChild(subtype);
      item.appendChild(pricecontainer);
      if (this.Products[i].Discount != undefined) {
        if (
          Date.now() <
          Date.parse(
            `${this.Products[i].Discount.dateEnd}T${this.Products[i].Discount.timeEnd}`
          )
        ) {
          price = this.getCatalogItem({
            tagName: "span",
            className: "ProductPrice sale",
            textName: this.Products[i].Price
          });
          pricecontainer.appendChild(price);
          pricecontainer.appendChild(saleprice);
        } else {
          pricecontainer.appendChild(price);
        }
      }
      item.appendChild(divBtn);
      divBtn.appendChild(btnCart);
      divBtn.appendChild(btnMoreDetails);
      divBtn.appendChild(btnWishlist);
      wrapper.appendChild(item);
    }
    this.container.appendChild(wrapper);
    this.setCatalogBtn();
  }

  getCatalogItem(tag) {
    let elem = document.createElement(tag.tagName);
    if ("className" in tag) {
      elem.setAttribute("class", tag.className);
    }
    if ("id" in tag) {
      elem.setAttribute("id", tag.id);
    }
    if ("textName" in tag) {
      elem.innerHTML = tag.textName;
    }
    if ("backgroundImage" in tag) {
      elem.style.backgroundImage = tag.backgroundImage;
    }
    if ("key" in tag) {
      elem.setAttribute("key", tag.key);
    }
    return elem;
  }

  setCatalogBtn() {
    for (let i = 0; i < this.Products.length; i++) {
      document
        .getElementById(`moreDetails${i}`)
        .addEventListener("click", () => {
          sessionStorage.setItem(
            "CurrentProduct",
            JSON.stringify(this.Products[i])
          );
          document.location.href = "./single-product.html";
        });

      document.getElementById(`btnCart${i}`).addEventListener("click", () => {
        sessionStorage.setItem(
          "CurrentProduct",
          JSON.stringify(this.Products[i])
        );
        let currProd = JSON.parse(sessionStorage.getItem("CurrentProduct"));
        let currCust = JSON.parse(sessionStorage.getItem("CurrentUser"));
        let status = true;
        for (let i = 0; i < CartCustomer.length; i++) {
          if (
            CartCustomer[i].ProductCart.Id == currProd.Id &&
            CartCustomer[i].CustomerCart.Id == currCust.Id
          ) {
            status = false;
          }
        }
        if (status == true) {
          if (currCust != null) {
            let cart = new Cart(
              currProd,
              currCust,
              1,
              currProd.Price,
              currProd.Price * 1
            );
            CartCustomer.push(cart);
            sessionStorage.setItem("Cart", JSON.stringify(CartCustomer));
            let CartSession = JSON.parse(sessionStorage.getItem("Cart"));
            document.getElementById("countCart").innerHTML = CartSession.length;
          } else {
            document.location.href = "../../auth.html";
          }
        }
      });
      document
        .getElementById(`btnWishlist${i}`)
        .addEventListener("click", () => {
          sessionStorage.setItem(
            "CurrentProduct",
            JSON.stringify(ProductsStorage[i])
          );
          let currProd = JSON.parse(sessionStorage.getItem("CurrentProduct"));
          let currCust = JSON.parse(sessionStorage.getItem("CurrentUser"));
          let status = true;
          for (let i = 0; i < WishlistCustomer.length; i++) {
            if (
              WishlistCustomer[i].ProductWishlist.Id == currProd.Id &&
              WishlistCustomer[i].CustomerWishlist.Id == currCust.Id
            ) {
              status = false;
            }
          }
          if (status == true) {
            if (currCust != null) {
              let wishlist = new Wishlist(currProd, currCust);
              WishlistCustomer.push(wishlist);
              sessionStorage.setItem(
                "Wishlist",
                JSON.stringify(WishlistCustomer)
              );
            } else {
              document.location.href = "../../auth.html";
            }
          }
        });
    }
  }
}
class SaleSlider {
  constructor(containerProduct, Slider) {
    this.container = document.querySelector(containerProduct);
    this.Slider = Slider;
    this.createSaleSlieder();
  }
  createSaleSlieder() {
    for (let i = 0; i < this.Slider.length; i++) {
      if (this.Slider[i].Discount != undefined) {
        if (
          Date.now() <
          Date.parse(
            `${this.Slider[i].Discount.dateEnd}T${this.Slider[i].Discount.timeEnd}`
          )
        ) {
          let saleSlides = this.getSaleItem({
            tagName: "div",
            className: "saleSlides slide",
            id: `saleSlides${i}`
          });
          let img1 = this.getSaleItem({
            tagName: "div",
            className: "sale-product-photo",
            backgroundImage: `url('${this.Slider[i].Photo.url1}')`
          });
          let img2 = this.getSaleItem({
            tagName: "div",
            className: "sale-product-photo",
            backgroundImage: `url('${this.Slider[i].Photo.url2}')`
          });
          let img3 = this.getSaleItem({
            tagName: "div",
            className: "sale-product-photo",
            backgroundImage: `url('${this.Slider[i].Photo.url3}')`
          });
          let saleproductinfo = this.getSaleItem({
            tagName: "div",
            className: "sale-product-info"
          });

          let salecontainer = this.getSaleItem({
            tagName: "div",
            className: "sale-container"
          });
          let saletitlestart = this.getSaleItem({
            tagName: "h1",
            className: "sale-title lang",
            key: "sale-slider-title",
            textName: "Sale"
          });
          let saletitle = this.getSaleItem({
            tagName: "h1",
            className: "sale-title",
            textName: `:-${this.Slider[i].Discount.percentageShare}%`
          });
          let saletimer = this.getSaleItem({
            tagName: "span",
            id: `sale-timer${i}`,
            className: "sale-timer"
          });

          this.container.appendChild(saleSlides);
          saleSlides.appendChild(img1);
          saleSlides.appendChild(img2);
          saleSlides.appendChild(img3);
          saleSlides.appendChild(saleproductinfo);
          saleproductinfo.appendChild(salecontainer);
          salecontainer.appendChild(saletitlestart);
          salecontainer.appendChild(saletitle);
          saleproductinfo.appendChild(saletimer);
        }
      }
    }
    let prev = this.getSaleItem({
      tagName: "a",
      className: "prev",
      onclick: "SalePlusSlides(-1);",
      textName: "&#10094;"
    });
    let next = this.getSaleItem({
      tagName: "a",
      className: "next",
      onclick: "SalePlusSlides(1);",
      textName: "&#10095;"
    });
    let pointer = this.getSaleItem({
      tagName: "div",
      className: "pointer"
    });
    this.container.appendChild(prev);
    this.container.appendChild(next);
    this.container.appendChild(pointer);
    let slides = document.getElementsByClassName("saleSlides");
    for (let i = 0; i < slides.length; i++) {
      let dot = this.getSaleItem({
        tagName: "span",
        className: "saleDot",
        onclick: `SaleCurrentSlide(${i + 1});`
      });
      pointer.appendChild(dot);
    }
    this.setEvent();
  }
  getSaleItem(tag) {
    let elem = document.createElement(tag.tagName);
    if ("className" in tag) {
      elem.setAttribute("class", tag.className);
    }
    if ("id" in tag) {
      elem.setAttribute("id", tag.id);
    }
    if ("textName" in tag) {
      elem.innerHTML = tag.textName;
    }
    if ("backgroundImage" in tag) {
      elem.style.backgroundImage = tag.backgroundImage;
    }
    if ("onclick" in tag) {
      elem.setAttribute("onclick", tag.onclick);
    }
    if ("value" in tag) {
      elem.setAttribute("value", tag.value);
    }
    if ("key" in tag) {
      elem.setAttribute("key", tag.key);
    }
    return elem;
  }
  setEvent() {
    for (let i = 0; i < this.Slider.length; i++) {
      if (this.Slider[i].Discount != undefined) {
        if (
          Date.now() <
          Date.parse(
            `${this.Slider[i].Discount.dateEnd}T${this.Slider[i].Discount.timeEnd}`
          )
        ) {
          timer(
            `sale-timer${i}`,
            this.Slider[i].Discount.dateEnd,
            this.Slider[i].Discount.timeEnd
          );
          document
            .getElementById(`saleSlides${i}`)
            .addEventListener("click", () => {
              sessionStorage.setItem(
                "CurrentProduct",
                JSON.stringify(this.Slider[i])
              );
              document.location.href = "./single-product.html";
            });
        }
      }
    }
  }
}
class SingleProduct {
  constructor(containerProduct, SingleProduct) {
    this.container = document.querySelector(containerProduct);
    this.SingleProduct = SingleProduct;
    this.createSingleProduct();
  }
  createSingleProduct() {
    let sale = 0;
    if (this.SingleProduct.Discount != undefined) {
      sale = Math.floor(
        this.SingleProduct.Price -
          this.SingleProduct.Price *
            (this.SingleProduct.Discount.percentageShare / 100)
      );
    }
    let sliderproduct = this.getSingleProductItem({
      tagName: "div",
      className: "slideshow-single-product-container"
    });
    let mySlides1 = this.getSingleProductItem({
      tagName: "div",
      className: "mySlides slide"
    });
    let img1 = this.getSingleProductItem({
      tagName: "div",
      className: "single-product-photo",
      backgroundImage: `url('${this.SingleProduct.Photo.url1}')`
    });
    let mySlides2 = this.getSingleProductItem({
      tagName: "div",
      className: "mySlides slide"
    });
    let img2 = this.getSingleProductItem({
      tagName: "div",
      className: "single-product-photo",
      backgroundImage: `url('${this.SingleProduct.Photo.url2}')`
    });
    let mySlides3 = this.getSingleProductItem({
      tagName: "div",
      className: "mySlides slide"
    });
    let img3 = this.getSingleProductItem({
      tagName: "div",
      className: "single-product-photo",
      backgroundImage: `url('${this.SingleProduct.Photo.url3}')`
    });
    let prev = this.getSingleProductItem({
      tagName: "a",
      className: "prev-single-product prev",
      onclick: "plusSlides(-1);",
      textName: "&#10094;"
    });
    let next = this.getSingleProductItem({
      tagName: "a",
      className: "next-single-product next",
      onclick: "plusSlides(1);",
      textName: "&#10095;"
    });
    let pointer = this.getSingleProductItem({
      tagName: "div",
      className: "pointer"
    });

    sliderproduct.appendChild(mySlides1);
    sliderproduct.appendChild(mySlides2);
    sliderproduct.appendChild(mySlides3);
    mySlides1.appendChild(img1);
    mySlides2.appendChild(img2);
    mySlides3.appendChild(img3);
    sliderproduct.appendChild(prev);
    sliderproduct.appendChild(next);
    sliderproduct.appendChild(pointer);
    this.container.appendChild(sliderproduct);

    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      let dot = this.getSingleProductItem({
        tagName: "span",
        className: "dot",
        onclick: `currentSlide(${i + 1});`
      });
      pointer.appendChild(dot);
    }
    let infosingleproductcontainer = this.getSingleProductItem({
      tagName: "div",
      className: "info-single-product-container"
    });
    let ratingsingleproduct = this.getSingleProductItem({
      tagName: "div",
      className: "rating-single-product"
    });
    let rating = this.getSingleProductItem({
      tagName: "div",
      className: "rating",
      id: "rating"
    });
    let singleproducttitle = this.getSingleProductItem({
      tagName: "div",
      className: "single-product-title"
    });
    let h1 = this.getSingleProductItem({
      tagName: "h1",
      textName: `${this.SingleProduct.Brand}`
    });
    let spanTitle = this.getSingleProductItem({
      tagName: "span",
      textName: `${this.SingleProduct.SubType}`
    });
    let h3Price = this.getSingleProductItem({
      tagName: "h3",
      className: "single-product-price",
      textName: `${this.SingleProduct.Price}`
    });
    let h3SalePrice = this.getSingleProductItem({
      tagName: "h3",
      className: "single-product-price ",
      textName: sale
    });
    let singleproductsize = this.getSingleProductItem({
      tagName: "select",
      id: "single-product-size"
    });
    let option1 = this.getSingleProductItem({
      tagName: "option",
      value: `${this.SingleProduct.Size.size1}`,
      textName: `${this.SingleProduct.Size.size1}`
    });
    let option2 = this.getSingleProductItem({
      tagName: "option",
      value: `${this.SingleProduct.Size.size2}`,
      textName: `${this.SingleProduct.Size.size2}`
    });
    let option3 = this.getSingleProductItem({
      tagName: "option",
      value: `${this.SingleProduct.Size.size3}`,
      textName: `${this.SingleProduct.Size.size3}`
    });
    let option4 = this.getSingleProductItem({
      tagName: "option",
      value: `${this.SingleProduct.Size.size4}`,
      textName: `${this.SingleProduct.Size.size4}`
    });
    let option5 = this.getSingleProductItem({
      tagName: "option",
      value: `${this.SingleProduct.Size.size5}`,
      textName: `${this.SingleProduct.Size.size5}`
    });
    let containerbtn = this.getSingleProductItem({
      tagName: "div",
      id: "containerbtn"
    });
    let singleproductbtn = this.getSingleProductItem({
      tagName: "a",
      className: "single-product-btn lang",
      key: "single-product-btn-addtocart",
      id: "addtocart-single",
      textName: "Add To Cart"
    });
    let singleproductbtnWishlist = this.getSingleProductItem({
      tagName: "a",
      className: "single-product-btn lang",
      key: "single-product-btn-wishlist",
      id: "wishlist-single",
      textName: "Wishlist"
    });

    let singleproductaboutproduct = this.getSingleProductItem({
      tagName: "div",
      className: "single-product-about-product"
    });
    let aboutproduct = this.getSingleProductItem({
      tagName: "h1",
      className: "lang",
      key: "single-product-about-product",
      textName: "About product"
    });
    let div1 = this.getSingleProductItem({
      tagName: "div"
    });
    let aboutproducttitle1 = this.getSingleProductItem({
      tagName: "span",
      className: "about-product-title lang",
      key: "single-product-description",
      textName: "Description"
    });
    let aboutproductext1 = this.getSingleProductItem({
      className: "single-product-content",
      tagName: "span",
      textName: `${this.SingleProduct.Description}`
    });
    let div2 = this.getSingleProductItem({
      tagName: "div"
    });
    let aboutproducttitle2 = this.getSingleProductItem({
      tagName: "span",
      className: "about-product-title lang",
      key: "single-product-composition",
      textName: "Сomposition"
    });
    let aboutproductext2 = this.getSingleProductItem({
      tagName: "span",
      className: "single-product-content",
      textName: `${this.SingleProduct.Сomposition}`
    });
    let div3 = this.getSingleProductItem({
      tagName: "div"
    });
    let aboutproducttitle3 = this.getSingleProductItem({
      tagName: "span",
      className: "about-product-title lang",
      key: "single-product-color",
      textName: "Color"
    });
    let aboutproductext3 = this.getSingleProductItem({
      tagName: "span",
      className: "single-product-content",
      textName: `${this.SingleProduct.Color}`
    });
    let div4 = this.getSingleProductItem({
      tagName: "div"
    });
    let aboutproducttitle4 = this.getSingleProductItem({
      tagName: "span",
      className: "about-product-title lang",
      key: "single-product-country",
      textName: "County of Origin"
    });
    let aboutproductext4 = this.getSingleProductItem({
      className: "single-product-content",
      tagName: "span",
      textName: `${this.SingleProduct.CountryOfOrigin}`
    });

    infosingleproductcontainer.appendChild(singleproducttitle);
    singleproducttitle.appendChild(h1);
    singleproducttitle.appendChild(spanTitle);
    if (this.SingleProduct.Discount != undefined) {
      if (
        Date.now() <
        Date.parse(
          `${this.SingleProduct.Discount.dateEnd}T${this.SingleProduct.Discount.timeEnd}`
        )
      ) {
        let h3Price = this.getSingleProductItem({
          tagName: "h3",
          className: "single-product-price sale",
          textName: `${this.SingleProduct.Price}`
        });
        infosingleproductcontainer.appendChild(h3Price);
        infosingleproductcontainer.appendChild(h3SalePrice);
      } else {
        infosingleproductcontainer.appendChild(h3Price);
      }
    } else {
      infosingleproductcontainer.appendChild(h3Price);
    }

    infosingleproductcontainer.appendChild(singleproductsize);
    if (this.SingleProduct.Size.size1 != undefined) {
      singleproductsize.appendChild(option1);
    }
    if (this.SingleProduct.Size.size2 != undefined) {
      singleproductsize.appendChild(option2);
    }
    if (this.SingleProduct.Size.size3 != undefined) {
      singleproductsize.appendChild(option3);
    }
    if (this.SingleProduct.Size.size4 != undefined) {
      singleproductsize.appendChild(option4);
    }
    if (this.SingleProduct.Size.size5 != undefined) {
      singleproductsize.appendChild(option5);
    }
    infosingleproductcontainer.appendChild(containerbtn);
    containerbtn.appendChild(singleproductbtn);
    containerbtn.appendChild(singleproductbtnWishlist);
    infosingleproductcontainer.appendChild(singleproductaboutproduct);
    singleproductaboutproduct.appendChild(aboutproduct);
    singleproductaboutproduct.appendChild(div1);
    div1.appendChild(aboutproducttitle1);
    div1.appendChild(aboutproductext1);
    singleproductaboutproduct.appendChild(div2);
    div2.appendChild(aboutproducttitle2);
    div2.appendChild(aboutproductext2);
    singleproductaboutproduct.appendChild(div3);
    div3.appendChild(aboutproducttitle3);
    div3.appendChild(aboutproductext3);
    singleproductaboutproduct.appendChild(div4);
    div4.appendChild(aboutproducttitle4);
    div4.appendChild(aboutproductext4);
    this.container.appendChild(infosingleproductcontainer);
    this.getBtn();
  }

  getSingleProductItem(tag) {
    let elem = document.createElement(tag.tagName);
    if ("className" in tag) {
      elem.setAttribute("class", tag.className);
    }
    if ("id" in tag) {
      elem.setAttribute("id", tag.id);
    }
    if ("textName" in tag) {
      elem.innerHTML = tag.textName;
    }
    if ("backgroundImage" in tag) {
      elem.style.backgroundImage = tag.backgroundImage;
    }
    if ("onclick" in tag) {
      elem.setAttribute("onclick", tag.onclick);
    }
    if ("value" in tag) {
      elem.setAttribute("value", tag.value);
    }
    if ("key" in tag) {
      elem.setAttribute("key", tag.key);
    }
    return elem;
  }
  getBtn() {
    document
      .getElementById("addtocart-single")
      .addEventListener("click", () => {
        let currProd = JSON.parse(sessionStorage.getItem("CurrentProduct"));
        let currCust = JSON.parse(sessionStorage.getItem("CurrentUser"));
        let status = true;
        for (let i = 0; i < CartCustomer.length; i++) {
          if (
            CartCustomer[i].ProductCart.Id == currProd.Id &&
            CartCustomer[i].CustomerCart.Id == currCust.Id
          ) {
            status = false;
          }
        }
        if (status == true) {
          if (currCust != null) {
            let cart = new Cart(
              currProd,
              currCust,
              1,
              currProd.Price,
              currProd.Price * 1
            );
            CartCustomer.push(cart);
            sessionStorage.setItem("Cart", JSON.stringify(CartCustomer));
            let CartSession = JSON.parse(sessionStorage.getItem("Cart"));
            document.getElementById("countCart").innerHTML = CartSession.length;
          } else {
            document.location.href = "../../auth.html";
          }
        }
      });
  }
}

class ViewCart {
  constructor(containerCart, Cart) {
    this.container = document.querySelector(containerCart);
    this.Cart = Cart;
    this.CreateCart();
  }

  CreateCart() {
    for (let i = 0; i < this.Cart.length; i++) {
      let sale = 0;
      if (this.Cart[i].ProductCart.Discount != undefined) {
        if (
          Date.now() <
          Date.parse(
            `${this.Cart[i].ProductCart.Discount.dateEnd}T${this.Cart[i].ProductCart.Discount.timeEnd}`
          )
        ) {
          sale = Math.floor(
            this.Cart[i].PriceForMore -
              this.Cart[i].PriceForMore *
                (this.Cart[i].ProductCart.Discount.percentageShare / 100)
          );
        }
      }
      let cartcontaineritem = this.getCartItem({
        tagName: "div",
        className: `cart-container-item`,
        id: `cart-container-item${i}`
      });
      let productphoto = this.getCartItem({
        tagName: "div",
        className: `product-photo`,
        backgroundImage: `url('${this.Cart[i].ProductCart.Photo.url3}')`
      });
      let productcontaineritem = this.getCartItem({
        tagName: "div",
        className: `product-container-item`
      });
      let productnamecontainer = this.getCartItem({
        tagName: "div",
        className: `product-name-container`
      });
      let productname = this.getCartItem({
        tagName: "div",
        className: `product-name`,
        textName: `${this.Cart[i].ProductCart.Brand}`
      });

      let productsizecontainer = this.getCartItem({
        tagName: "div",
        className: `product-size-container`
      });
      let productsize = this.getCartItem({
        tagName: "select",
        className: `product-size`,
        id: `selectsize${i}`
      });
      let option1 = this.getCartItem({
        tagName: "option",
        value: `${this.Cart[i].ProductCart.Size.size1}`,
        textName: `${this.Cart[i].ProductCart.Size.size1}`
      });
      let option2 = this.getCartItem({
        tagName: "option",
        value: `${this.Cart[i].ProductCart.Size.size2}`,
        textName: `${this.Cart[i].ProductCart.Size.size2}`
      });
      let option3 = this.getCartItem({
        tagName: "option",
        value: `${this.Cart[i].ProductCart.Size.size3}`,
        textName: `${this.Cart[i].ProductCart.Size.size3}`
      });
      let option4 = this.getCartItem({
        tagName: "option",
        value: `${this.Cart[i].ProductCart.Size.size4}`,
        textName: `${this.Cart[i].ProductCart.Size.size4}`
      });
      let option5 = this.getCartItem({
        tagName: "option",
        value: `${this.Cart[i].ProductCart.Size.size5}`,
        textName: `${this.Cart[i].ProductCart.Size.size5}`
      });
      let amountcontainer = this.getCartItem({
        tagName: "div",
        className: "amount-container"
      });
      let divamountminus = this.getCartItem({
        tagName: "div",
        id: `amountminus${i}`
      });
      let amountminus = this.getCartItem({
        tagName: "i",
        className: "fas fa-minus-circle amount"
      });
      let amountinput = this.getCartItem({
        tagName: "input",
        className: "amount-input",
        type: "text",
        id: `amountinput${i}`,
        value: `${this.Cart[i].Amount}`,
        disabled: "disabled"
      });
      let divamountplus = this.getCartItem({
        tagName: "div",
        id: `amountplus${i}`
      });
      let amountplus = this.getCartItem({
        tagName: "i",
        className: "fas fa-plus-circle amount"
      });

      let productpricecontainer = this.getCartItem({
        tagName: "div",
        className: "product-price-container"
      });
      let productprice = this.getCartItem({
        tagName: "span",
        textName: `${this.Cart[i].PriceForMore}`,
        className: "product-price"
      });
      let divdeletecart = this.getCartItem({
        tagName: "div",
        id: `deletecart${i}`
      });
      let deletecart = this.getCartItem({
        tagName: "i",
        className: "fas fa-times amount delete"
      });
      this.container.appendChild(cartcontaineritem);
      cartcontaineritem.appendChild(productphoto);
      cartcontaineritem.appendChild(productcontaineritem);
      productcontaineritem.appendChild(productnamecontainer);
      productnamecontainer.appendChild(productname);
      productcontaineritem.appendChild(productsizecontainer);
      productsizecontainer.appendChild(productsize);
      if (this.Cart[i].ProductCart.Size.size1 != undefined) {
        productsize.appendChild(option1);
      }
      if (this.Cart[i].ProductCart.Size.size2 != undefined) {
        productsize.appendChild(option2);
      }
      if (this.Cart[i].ProductCart.Size.size3 != undefined) {
        productsize.appendChild(option3);
      }
      if (this.Cart[i].ProductCart.Size.size4 != undefined) {
        productsize.appendChild(option4);
      }
      if (this.Cart[i].ProductCart.Size.size5 != undefined) {
        productsize.appendChild(option5);
      }
      productcontaineritem.appendChild(amountcontainer);
      amountcontainer.appendChild(divamountminus);
      divamountminus.appendChild(amountminus);
      amountcontainer.appendChild(amountinput);
      amountcontainer.appendChild(divamountplus);
      divamountplus.appendChild(amountplus);
      productcontaineritem.appendChild(productpricecontainer);
      if (this.Cart[i].ProductCart.Discount != undefined) {
        if (
          Date.now() <
          Date.parse(
            `${this.Cart[i].ProductCart.Discount.dateEnd}T${this.Cart[i].ProductCart.Discount.timeEnd}`
          )
        ) {
          productprice = this.getCartItem({
            tagName: "span",
            className: "product-price sale",
            textName: this.Cart[i].PriceForMore
          });
          let productsaleprice = this.getCartItem({
            tagName: "span",
            textName: sale,
            className: "product-price",
            id: `productsale${i}`
          });
          productpricecontainer.appendChild(productprice);
          productpricecontainer.appendChild(productsaleprice);
        } else {
          productpricecontainer.appendChild(productprice);
        }
      } else {
        productpricecontainer.appendChild(productprice);
      }
      productcontaineritem.appendChild(divdeletecart);
      divdeletecart.appendChild(deletecart);
    }
    this.setBtn();
  }
  getCartItem(tag) {
    let elem = document.createElement(tag.tagName);
    if ("className" in tag) {
      elem.setAttribute("class", tag.className);
    }
    if ("id" in tag) {
      elem.setAttribute("id", tag.id);
    }
    if ("textName" in tag) {
      elem.innerHTML = tag.textName;
    }
    if ("backgroundImage" in tag) {
      elem.style.backgroundImage = tag.backgroundImage;
    }
    if ("type" in tag) {
      elem.setAttribute("type", tag.type);
    }
    if ("value" in tag) {
      elem.setAttribute("value", tag.value);
    }
    if ("disabled" in tag) {
      elem.setAttribute("disabled", tag.disabled);
    }
    return elem;
  }
  setBtn() {
    for (let i = 0; i < this.Cart.length; i++) {
      let sale = 0;
      document
        .getElementById(`amountminus${i}`)
        .addEventListener("click", () => {
          if (document.getElementById(`amountinput${i}`).value > 1) {
            document.getElementById(`amountinput${i}`).value--;
            this.Cart[i].Amount = document.getElementById(
              `amountinput${i}`
            ).value;
            this.Cart[i].PriceForMore =
              this.Cart[i].PriceForOne * this.Cart[i].Amount;
            document.getElementById("fullprice").innerHTML = FullPriceCart(
              this.Cart
            );
          } else document.getElementById(`amountinput${i}`).value = 1;
        });
      document
        .getElementById(`amountplus${i}`)
        .addEventListener("click", () => {
          if (document.getElementById(`amountinput${i}`).value >= 1) {
            document.getElementById(`amountinput${i}`).value++;
            this.Cart[i].Amount = document.getElementById(
              `amountinput${i}`
            ).value;
            this.Cart[i].PriceForMore =
              this.Cart[i].PriceForOne * this.Cart[i].Amount;
            document.getElementById("fullprice").innerHTML = FullPriceCart(
              this.Cart
            );
          } else document.getElementById(`amountinput${i}`).value = 1;
        });
      document
        .getElementById(`deletecart${i}`)
        .addEventListener("click", () => {
          this.Cart.splice(i, 1);
          document.getElementById("fullprice").innerHTML = FullPriceCart(
            this.Cart
          );
          sessionStorage.setItem("Cart", JSON.stringify(this.Cart));
          document.getElementById("cart-product-container").innerHTML = "";
          new ViewCart(".cart-product-container", this.Cart);
        });
    }
  }
}
class ViewWishlist {
  constructor(containerWishlist, Wishlist) {
    this.container = document.querySelector(containerWishlist);
    this.Wishlist = Wishlist;
    this.CreateWishlist();
  }
  CreateWishlist() {
    for (let i = 0; i < this.Wishlist.length; i++) {
      let sale = 0;
      if (this.Wishlist[i].ProductWishlist.Discount != undefined) {
        if (
          Date.now() <
          Date.parse(
            `${this.Wishlist[i].ProductWishlist.Discount.dateEnd}T${this.Wishlist[i].ProductWishlist.Discount.timeEnd}`
          )
        ) {
          sale = Math.floor(
            this.Wishlist[i].ProductWishlist.Price -
              this.Wishlist[i].ProductWishlist.Price *
                (this.Wishlist[i].ProductWishlist.Discount.percentageShare /
                  100)
          );
        }
      }
      let wishlistcontaineritem = this.getWishlistItem({
        tagName: "div",
        className: `wishlist-container-item`,
        id: `wishlist-container-item${i}`
      });
      let productphoto = this.getWishlistItem({
        tagName: "div",
        className: `product-photo`,
        backgroundImage: `url('${this.Wishlist[i].ProductWishlist.Photo.url3}')`
      });
      let productcontaineritem = this.getWishlistItem({
        tagName: "div",
        className: `product-container-item`
      });
      let productnamecontainer = this.getWishlistItem({
        tagName: "div",
        className: `product-name-container`
      });
      let productname = this.getWishlistItem({
        tagName: "div",
        className: `product-name`,
        textName: `${this.Wishlist[i].ProductWishlist.Brand}`
      });

      let productsizecontainer = this.getWishlistItem({
        tagName: "div",
        className: `product-size-container`
      });
      let productsize = this.getWishlistItem({
        tagName: "select",
        className: `product-size`
      });
      let option1 = this.getWishlistItem({
        tagName: "option",
        value: `${this.Wishlist[i].ProductWishlist.Size.size1}`,
        textName: `${this.Wishlist[i].ProductWishlist.Size.size1}`
      });
      let option2 = this.getWishlistItem({
        tagName: "option",
        value: `${this.Wishlist[i].ProductWishlist.Size.size2}`,
        textName: `${this.Wishlist[i].ProductWishlist.Size.size2}`
      });
      let option3 = this.getWishlistItem({
        tagName: "option",
        value: `${this.Wishlist[i].ProductWishlist.Size.size3}`,
        textName: `${this.Wishlist[i].ProductWishlist.Size.size3}`
      });
      let option4 = this.getWishlistItem({
        tagName: "option",
        value: `${this.Wishlist[i].ProductWishlist.Size.size4}`,
        textName: `${this.Wishlist[i].ProductWishlist.Size.size4}`
      });
      let option5 = this.getWishlistItem({
        tagName: "option",
        value: `${this.Wishlist[i].ProductWishlist.Size.size5}`,
        textName: `${this.Wishlist[i].ProductWishlist.Size.size5}`
      });
      let productpricecontainer = this.getWishlistItem({
        tagName: "div",
        className: "product-price-container"
      });
      let productprice = this.getWishlistItem({
        tagName: "span",
        textName: `${this.Wishlist[i].ProductWishlist.Price}`,
        className: "product-price"
      });

      let divdeletewishlist = this.getWishlistItem({
        tagName: "div",
        id: `deletewishlist${i}`
      });
      let deletewishlist = this.getWishlistItem({
        tagName: "i",
        className: "fas fa-times amount delete"
      });

      this.container.appendChild(wishlistcontaineritem);
      wishlistcontaineritem.appendChild(productphoto);
      wishlistcontaineritem.appendChild(productcontaineritem);
      productcontaineritem.appendChild(productnamecontainer);
      productnamecontainer.appendChild(productname);
      productcontaineritem.appendChild(productsizecontainer);
      productsizecontainer.appendChild(productsize);
      if (this.Wishlist[i].ProductWishlist.Size.size1 != undefined) {
        productsize.appendChild(option1);
      }
      if (this.Wishlist[i].ProductWishlist.Size.size2 != undefined) {
        productsize.appendChild(option2);
      }
      if (this.Wishlist[i].ProductWishlist.Size.size3 != undefined) {
        productsize.appendChild(option3);
      }
      if (this.Wishlist[i].ProductWishlist.Size.size4 != undefined) {
        productsize.appendChild(option4);
      }
      if (this.Wishlist[i].ProductWishlist.Size.size5 != undefined) {
        productsize.appendChild(option5);
      }
      productcontaineritem.appendChild(productpricecontainer);
      if (this.Wishlist[i].ProductWishlist.Discount != undefined) {
        if (
          Date.now() <
          Date.parse(
            `${this.Wishlist[i].ProductWishlist.Discount.dateEnd}T${this.Wishlist[i].ProductWishlist.Discount.timeEnd}`
          )
        ) {
          productprice = this.getWishlistItem({
            tagName: "span",
            className: "product-price sale",
            textName: this.Wishlist[i].ProductWishlist.Price
          });
          let productsaleprice = this.getWishlistItem({
            tagName: "span",
            textName: sale,
            className: "product-price"
          });
          productpricecontainer.appendChild(productprice);
          productpricecontainer.appendChild(productsaleprice);
        } else {
          productpricecontainer.appendChild(productprice);
        }
      } else {
        productpricecontainer.appendChild(productprice);
      }

      productcontaineritem.appendChild(divdeletewishlist);
      divdeletewishlist.appendChild(deletewishlist);
    }
    this.setBtn();
  }
  getWishlistItem(tag) {
    let elem = document.createElement(tag.tagName);
    if ("className" in tag) {
      elem.setAttribute("class", tag.className);
    }
    if ("id" in tag) {
      elem.setAttribute("id", tag.id);
    }
    if ("textName" in tag) {
      elem.innerHTML = tag.textName;
    }
    if ("backgroundImage" in tag) {
      elem.style.backgroundImage = tag.backgroundImage;
    }
    if ("type" in tag) {
      elem.setAttribute("type", tag.type);
    }
    if ("value" in tag) {
      elem.setAttribute("value", tag.value);
    }
    if ("disabled" in tag) {
      elem.setAttribute("disabled", tag.disabled);
    }
    return elem;
  }
  setBtn() {
    for (let i = 0; i < this.Wishlist.length; i++) {
      document
        .getElementById(`deletewishlist${i}`)
        .addEventListener("click", () => {
          this.Wishlist.splice(i, 1);
          sessionStorage.setItem("Wishlist", JSON.stringify(this.Wishlist));
          document.getElementById("wishlist-product-container").innerHTML = "";
          new ViewWishlist(".wishlist-product-container", this.Wishlist);
        });
    }
  }
}
class ViewOrder {
  constructor(containerOrder, Order) {
    this.container = document.querySelector(containerOrder);
    this.Order = Order;
    this.CreateOrder();
  }
  CreateOrder() {
    for (let i = 0; i < this.Order.length; i++) {
      let sale = 0;
      if (this.Order[i].ProductOrder.Discount != undefined) {
        if (
          Date.now() <
          Date.parse(
            `${this.Order[i].ProductOrder.Discount.dateEnd}T${this.Order[i].ProductOrder.Discount.timeEnd}`
          )
        ) {
          sale = Math.floor(
            this.Order[i].ProductOrder.Price -
              this.Order[i].ProductOrder.Price *
                (this.Order[i].ProductOrder.Discount.percentageShare / 100)
          );
        }
      }
      let ordercontaineritem = this.getOrderItem({
        tagName: "div",
        className: `order-container-item`,
        id: `order-container-item${i}`
      });
      let productphoto = this.getOrderItem({
        tagName: "div",
        className: `product-photo`,
        backgroundImage: `url('${this.Order[i].ProductOrder.Photo.url3}')`
      });
      let productcontaineritem = this.getOrderItem({
        tagName: "div",
        className: `product-container-item`
      });
      let productnamecontainer = this.getOrderItem({
        tagName: "div",
        className: `product-name-container`
      });
      let productname = this.getOrderItem({
        tagName: "div",
        className: `product-name`,
        textName: `${this.Order[i].ProductOrder.Brand}`
      });

      let productsizecontainer = this.getOrderItem({
        tagName: "div",
        className: `product-size-container`
      });
      let productsize = this.getOrderItem({
        tagName: "select",
        className: `product-size`
      });
      let option1 = this.getOrderItem({
        tagName: "option",
        value: `${this.Order[i].ProductOrder.Size.size1}`,
        textName: `${this.Order[i].ProductOrder.Size.size1}`
      });
      let option2 = this.getOrderItem({
        tagName: "option",
        value: `${this.Order[i].ProductOrder.Size.size2}`,
        textName: `${this.Order[i].ProductOrder.Size.size2}`
      });
      let option3 = this.getOrderItem({
        tagName: "option",
        value: `${this.Order[i].ProductOrder.Size.size3}`,
        textName: `${this.Order[i].ProductOrder.Size.size3}`
      });
      let option4 = this.getOrderItem({
        tagName: "option",
        value: `${this.Order[i].ProductOrder.Size.size4}`,
        textName: `${this.Order[i].ProductOrder.Size.size4}`
      });
      let option5 = this.getOrderItem({
        tagName: "option",
        value: `${this.Order[i].ProductOrder.Size.size5}`,
        textName: `${this.Order[i].ProductOrder.Size.size5}`
      });
      // let productamountcontainer = this.getOrderItem({
      //   tagName: "div",
      //   className: "product-amount-container lang",
      //   textName: "Count:",
      //   key:"order-product-amount"
      // });
      // let productamount = this.getOrderItem({
      //   tagName: "span",
      //   textName: `${this.Order[i].Amount}`,
      //   className: "product-amount"
      // });
      let productpricecontainer = this.getOrderItem({
        tagName: "div",
        className: "product-price-container"
      });
      let productprice = this.getOrderItem({
        tagName: "span",
        textName: `${this.Order[i].Price}`,
        className: "product-price"
      });
      let pricetextbefore = this.getOrderItem({
        tagName: "span",
        textName: "for",
        className: "product-pricetext lang",
        key: "order-product-price-text-before"
      });
      let priceforamount = this.getOrderItem({
        tagName: "span",
        textName: `${this.Order[i].Amount}`,
        className: "product-pricetext"
      });
      let pricetextafter = this.getOrderItem({
        tagName: "span",
        textName: "product",
        className: "product-pricetext lang",
        key: "order-product-price-text-after"
      });

      this.container.appendChild(ordercontaineritem);
      ordercontaineritem.appendChild(productphoto);
      ordercontaineritem.appendChild(productcontaineritem);
      productcontaineritem.appendChild(productnamecontainer);
      productnamecontainer.appendChild(productname);
      productcontaineritem.appendChild(productsizecontainer);
      productsizecontainer.appendChild(productsize);
      // productcontaineritem.appendChild(productamountcontainer);
      // productamountcontainer.appendChild(productamount);
      if (this.Order[i].ProductOrder.Size.size1 != undefined) {
        productsize.appendChild(option1);
      }
      if (this.Order[i].ProductOrder.Size.size2 != undefined) {
        productsize.appendChild(option2);
      }
      if (this.Order[i].ProductOrder.Size.size3 != undefined) {
        productsize.appendChild(option3);
      }
      if (this.Order[i].ProductOrder.Size.size4 != undefined) {
        productsize.appendChild(option4);
      }
      if (this.Order[i].ProductOrder.Size.size5 != undefined) {
        productsize.appendChild(option5);
      }
      productcontaineritem.appendChild(productpricecontainer);
      if (this.Order[i].ProductOrder.Discount != undefined) {
        if (
          Date.now() <
          Date.parse(
            `${this.Order[i].ProductOrder.Discount.dateEnd}T${this.Order[i].ProductOrder.Discount.timeEnd}`
          )
        ) {
          productprice = this.getOrderItem({
            tagName: "span",
            className: "product-price sale",
            textName: this.Order[i].ProductOrder.Price
          });
          let productsaleprice = this.getOrderItem({
            tagName: "span",
            textName: sale,
            className: "product-price"
          });
          productpricecontainer.appendChild(productprice);
          productpricecontainer.appendChild(productsaleprice);
        } else {
          productpricecontainer.appendChild(productprice);
        }
      } else {
        productpricecontainer.appendChild(productprice);
      }
      productpricecontainer.appendChild(pricetextbefore);
      productpricecontainer.appendChild(priceforamount);
      productpricecontainer.appendChild(pricetextafter);
    }
  }
  getOrderItem(tag) {
    let elem = document.createElement(tag.tagName);
    if ("className" in tag) {
      elem.setAttribute("class", tag.className);
    }
    if ("id" in tag) {
      elem.setAttribute("id", tag.id);
    }
    if ("textName" in tag) {
      elem.innerHTML = tag.textName;
    }
    if ("backgroundImage" in tag) {
      elem.style.backgroundImage = tag.backgroundImage;
    }
    if ("type" in tag) {
      elem.setAttribute("type", tag.type);
    }
    if ("value" in tag) {
      elem.setAttribute("value", tag.value);
    }
    if ("disabled" in tag) {
      elem.setAttribute("disabled", tag.disabled);
    }
    if ("key" in tag) {
      elem.setAttribute("key", tag.key);
    }
    return elem;
  }
}

class ViewReview {
  constructor(containerReview, Reviews) {
    this.container = document.querySelector(containerReview);
    this.Reviews = Reviews;
    this.CreateReview();
  }
  CreateReview() {
    for (let i = 0; i < this.Reviews.length; i++) {
      if (this.Reviews[i].ProductReview.Id == currentProduct.Id) {
        let reviewitem = this.getReviewItem({
          tagName: "div",
          className: `review-item`
        });
        let reviewtitle = this.getReviewItem({
          tagName: "div",
          className: `review-title`
        });
        let profileicon = this.getReviewItem({
          tagName: "div",
          className: `profile-icon`,
          textName: `${this.Reviews[i].CustomerReview.FirstName.substr(
            0,
            1
          ).toUpperCase()}${this.Reviews[i].CustomerReview.LastName.substr(
            0,
            1
          ).toUpperCase()}`
        });
        let profileinfo = this.getReviewItem({
          tagName: "div",
          className: `profile-info`
        });
        let h3 = this.getReviewItem({
          tagName: "h3",
          textName: `${this.Reviews[i].CustomerReview.FirstName} ${this.Reviews[i].CustomerReview.LastName}`
        });
        let spanDate = this.getReviewItem({
          tagName: "span",
          textName: `${this.Reviews[i].DateReview}`
        });
        let spanTime = this.getReviewItem({
          tagName: "span",
          textName: `${this.Reviews[i].TimeReview}`
        });
        let reviewdescription = this.getReviewItem({
          tagName: "div",
          className: `review-description`,
          textName: `${this.Reviews[i].Description}`
        });
        this.container.appendChild(reviewitem);
        reviewitem.appendChild(reviewtitle);
        reviewtitle.appendChild(profileicon);
        reviewtitle.appendChild(profileinfo);
        profileinfo.appendChild(h3);
        profileinfo.appendChild(spanDate);
        profileinfo.appendChild(spanTime);
        reviewitem.appendChild(reviewdescription);
      }
    }
  }
  getReviewItem(tag) {
    let elem = document.createElement(tag.tagName);
    if ("className" in tag) {
      elem.setAttribute("class", tag.className);
    }
    if ("id" in tag) {
      elem.setAttribute("id", tag.id);
    }
    if ("textName" in tag) {
      elem.innerHTML = tag.textName;
    }
    if ("backgroundImage" in tag) {
      elem.style.backgroundImage = tag.backgroundImage;
    }
    if ("type" in tag) {
      elem.setAttribute("type", tag.type);
    }
    if ("value" in tag) {
      elem.setAttribute("value", tag.value);
    }
    if ("disabled" in tag) {
      elem.setAttribute("disabled", tag.disabled);
    }
    if ("key" in tag) {
      elem.setAttribute("key", tag.key);
    }
    return elem;
  }
}

class ViewBlog {
  constructor(containerBlog, Blog) {
    this.container = document.querySelector(containerBlog);
    this.Blog = Blog;
    this.CreateBlog();
  }
  CreateBlog() {
    for (let i = 0; i < this.Blog.length; i++) {
      let blogitem = this.getBlogItem({
        tagName: "div",
        className: `blog-item`,
        id:`blog-item${i}`
      });
      let blogphoto = this.getBlogItem({
        tagName: "div",
        className: `blog-photo`,
        backgroundImage:`url(${this.Blog[i].Photo.url1})`
      });
      let blogcontentcontainer = this.getBlogItem({
        tagName: "div",
        className: `blog-content-container`
      });

      let title = this.getBlogItem({
        tagName: "span",
        className:"blog-title",
        textName: `${this.Blog[i].Title}`
      });
      let subtitle = this.getBlogItem({
        tagName: "span",
        className:"blog-subtitle",
        textName: `${this.Blog[i].SubTitle}`
      });

      this.container.appendChild(blogitem);
      blogitem.appendChild(blogphoto);
      blogitem.appendChild(blogcontentcontainer);
      blogcontentcontainer.appendChild(title);
      blogcontentcontainer.appendChild(subtitle);
    }
    for(let i=0; this.Blog.length;i++) {
      document.getElementById(`blog-item${i}`).addEventListener("click", ()=> {
        sessionStorage.setItem("CurrentBlog", JSON.stringify(this.Blog[i]));
        document.location.href = "./single-blog.html";
      })
  }
  }
  getBlogItem(tag) {
    let elem = document.createElement(tag.tagName);
    if ("className" in tag) {
      elem.setAttribute("class", tag.className);
    }
    if ("id" in tag) {
      elem.setAttribute("id", tag.id);
    }
    if ("textName" in tag) {
      elem.innerHTML = tag.textName;
    }
    if ("backgroundImage" in tag) {
      elem.style.backgroundImage = tag.backgroundImage;
    }
    if ("type" in tag) {
      elem.setAttribute("type", tag.type);
    }
    if ("value" in tag) {
      elem.setAttribute("value", tag.value);
    }
    if ("disabled" in tag) {
      elem.setAttribute("disabled", tag.disabled);
    }
    if ("key" in tag) {
      elem.setAttribute("key", tag.key);
    }
    return elem;
  }
}

class ViewSingleBlog {
  constructor(containerSingleBlog, SingleBlog) {
    this.container = document.querySelector(containerSingleBlog);
    this.SingleBlog = SingleBlog;
    this.CreateSingleBlog();
  }
  CreateSingleBlog() {
      let singleblogitem = this.getSingleBlogItem({
        tagName: "div",
        className: `single-blog-item`
      });
      let singleblogphoto = this.getSingleBlogItem({
        tagName: "div",
        className: `single-blog-photo`,
        backgroundImage:`url(${this.SingleBlog.Photo.url1})`
      });
      let singleblogtitle = this.getSingleBlogItem({
        tagName: "span",
        className:"single-blog-title",
        textName: `${this.SingleBlog.Title}`
      });
      let singleblogdesc = this.getSingleBlogItem({
        tagName: "span",
        className:"single-blog-description",
        textName: `${this.SingleBlog.Description}`
      });

      this.container.appendChild(singleblogitem);
      singleblogitem.appendChild(singleblogtitle);
      singleblogitem.appendChild(singleblogphoto);
      singleblogitem.appendChild(singleblogdesc);
      document.getElementById("currentblog").innerHTML = `Blog ${this.SingleBlog.Id}`;
    
  }
  getSingleBlogItem(tag) {
    let elem = document.createElement(tag.tagName);
    if ("className" in tag) {
      elem.setAttribute("class", tag.className);
    }
    if ("id" in tag) {
      elem.setAttribute("id", tag.id);
    }
    if ("textName" in tag) {
      elem.innerHTML = tag.textName;
    }
    if ("backgroundImage" in tag) {
      elem.style.backgroundImage = tag.backgroundImage;
    }
    if ("type" in tag) {
      elem.setAttribute("type", tag.type);
    }
    if ("value" in tag) {
      elem.setAttribute("value", tag.value);
    }
    if ("disabled" in tag) {
      elem.setAttribute("disabled", tag.disabled);
    }
    if ("key" in tag) {
      elem.setAttribute("key", tag.key);
    }
    return elem;
  }
}