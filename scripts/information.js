class Customer {
  constructor(Id, Email, Password, FirstName, LastName, DateOfBirth, Address) {
    this.Id = Id;
    this.Email = Email;
    this.Password = Password;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.DateOfBirth = DateOfBirth;
    this.Address = Address;
  }
}

class Product {
  constructor(
    Id,
    Type,
    SubType,
    Brand,
    Price,
    Size,
    Color,
    Сomposition,
    CountryOfOrigin,
    Photo,
    Discount,
    Description
  ) {
    this.Id = Id;
    this.Type = Type;
    this.SubType = SubType;
    this.Brand = Brand;
    this.Price = Price;
    this.Size = Size;
    this.Color = Color;
    this.Сomposition = Сomposition;
    this.CountryOfOrigin = CountryOfOrigin;
    this.Photo = Photo;
    this.Discount = Discount;
    this.Description = Description;
  }
}

class Cart {
  constructor(ProductCart, CustomerCart, Amount, PriceForOne, PriceForMore) {
    this.ProductCart = ProductCart;
    this.CustomerCart = CustomerCart;
    this.Amount = Amount;
    this.PriceForOne = PriceForOne;
    this.PriceForMore = PriceForMore;
  }
}

class Wishlist {
  constructor(ProductWishlist, CustomerWishlist) {
    this.ProductWishlist = ProductWishlist;
    this.CustomerWishlist = CustomerWishlist;
  }
}

class Order {
  constructor(ProductOrder, CustomerOrder, Size, Amount, Price) {
    this.ProductOrder = ProductOrder;
    this.CustomerOrder = CustomerOrder;
    this.Size = Size;
    this.Amount = Amount;
    this.Price = Price;
  }
}

class Review {
  constructor(
    ProductReview,
    CustomerReview,
    Description,
    DateReview,
    TimeReview
  ) {
    this.ProductReview = ProductReview;
    this.CustomerReview = CustomerReview;
    this.Description = Description;
    this.DateReview = DateReview;
    this.TimeReview = TimeReview;
  }
}

class Blog {
  constructor(Id, Title, SubTitle, Photo, Description) {
    this.Id = Id;
    this.Title = Title;
    this.SubTitle = SubTitle;
    this.Photo = Photo;
    this.Description = Description;
  }
}

let Customers = [];
let Customer1 = new Customer(
  1,
  "nik@gmail.com",
  "123",
  "Nikita",
  "Petukh",
  "07.04.2000",
  "Yakubova"
);
Customers.push(Customer1);

let Products = [];
let Product1 = new Product(
  1,
  "Clothes",
  "T-shirt",
  "Levi's",
  57,
  { size1: "46/48", size2: "48/50", size3: "50/52" },
  "White",
  "Cotton - 100%",
  "India",
  {
    url1: "../images/Product/Clothes/T-shirts/LEV1.1.png",
    url2: "../images/Product/Clothes/T-shirts/LEV1.2.png",
    url3: "../images/Product/Clothes/T-shirts/LEV1.3.png"
  },
  {
    percentageShare: 10,
    dateEnd: "2020-01-13",
    timeEnd: "21:25"
  },
  "Classic polo. Fabric structure in a classic hem. Embroidered logo on the chest."
);
let Product2 = new Product(
  2,
  "Clothes",
  "T-shirt",
  "Levi's",
  157,
  { size1: "46/48", size2: "48/50", size3: "50/52", size4: "52/54" },
  "Yellow",
  "Cotton - 100%",
  "India",
  {
    url1: "../images/Product/Clothes/T-shirts/LEV2.1.png",
    url2: "../images/Product/Clothes/T-shirts/LEV2.2.png",
    url3: "../images/Product/Clothes/T-shirts/LEV2.3.png"
  },
  {
    percentageShare: 10,
    dateEnd: "2020-01-13",
    timeEnd: "21:59"
  },
  "T-shirt made of cotton material. Straight cut model. Details: round neckline, short sleeves."
);
let Product3 = new Product(
  3,
  "Clothes",
  "T-shirt",
  "Levi's",
  57,
  { size1: "46/48", size2: "48/50", size3: "50/52" },
  "Dark Blue",
  "Cotton - 100%",
  "India",
  {
    url1: "../images/Product/Clothes/T-shirts/LEV3.1.png",
    url2: "../images/Product/Clothes/T-shirts/LEV3.2.png",
    url3: "../images/Product/Clothes/T-shirts/LEV3.3.png"
  },
  {
    percentageShare: 80,
    dateEnd: "2020-01-14",
    timeEnd: "21:32"
  },
  "Classic polo. Fabric structure in a classic hem. Embroidered logo on the chest."
);
let Product4 = new Product(
  4,
  "Clothes",
  "T-shirt",
  "Tommy Hilfiger",
  107,
  { size1: "46/48" },
  "Gray",
  "Cotton - 100%",
  "Turkey",
  {
    url1: "../images/Product/Clothes/T-shirts/TH1.1.png",
    url2: "../images/Product/Clothes/T-shirts/TH1.2.png",
    url3: "../images/Product/Clothes/T-shirts/TH1.3.png"
  },
  {
    percentageShare: 20,
    dateEnd: "2020-01-14",
    timeEnd: "21:32"
  },
  "Classic polo. Fabric structure in a classic hem. Embroidered logo on the chest."
);
let Product5 = new Product(
  5,
  "Clothes",
  "T-shirt",
  "Tommy Hilfiger",
  79,
  { size1: "46/48", size2: "48/50", size3: "50/52" },
  "Red",
  "Cotton - 100%",
  "Turkey",
  {
    url1: "../images/Product/Clothes/T-shirts/TH2.1.png",
    url2: "../images/Product/Clothes/T-shirts/TH2.2.png",
    url3: "../images/Product/Clothes/T-shirts/TH2.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-20",
    timeEnd: "21:32"
  },
  "Classic polo. Fabric structure in a classic hem. Embroidered logo on the chest."
);
let Product6 = new Product(
  6,
  "Clothes",
  "T-shirt",
  "Tommy Hilfiger",
  72,
  { size1: "46/48", size2: "48/50", size3: "50/52" },
  "Black",
  "Cotton - 100%",
  "Turkey",
  {
    url1: "../images/Product/Clothes/T-shirts/TH3.1.png",
    url2: "../images/Product/Clothes/T-shirts/TH3.2.png",
    url3: "../images/Product/Clothes/T-shirts/TH3.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-20",
    timeEnd: "21:32"
  },
  "Classic polo. Fabric structure in a classic hem. Embroidered logo on the chest."
);
let Product7 = new Product(
  7,
  "Clothes",
  "Sweatshirt",
  "Nike",
  100,
  { size1: "46/48", size2: "48/50", size3: "50/52" },
  "Black",
  "Cotton - 62%, Polyester - 38%",
  "Cambodia",
  {
    url1: "../images/Product/Clothes/Sweatshirts/N1.1.png",
    url2: "../images/Product/Clothes/Sweatshirts/N1.2.png",
    url3: "../images/Product/Clothes/Sweatshirts/N1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-20",
    timeEnd: "21:32"
  },
  "The sweatshirt is made of thick cotton-based knitwear. Straight silhouette model. Details: combined design, zipper, hood with an adjustable volume cord, raglan sleeve, 2 pockets."
);
let Product8 = new Product(
  8,
  "Clothes",
  "Sweatshirt",
  "Nike",
  89,
  { size1: "46/48", size2: "48/50", size3: "50/52" },
  "Red",
  "Cotton - 82%, Polyester - 18%",
  "Cambodia",
  {
    url1: "../images/Product/Clothes/Sweatshirts/N2.1.png",
    url2: "../images/Product/Clothes/Sweatshirts/N2.2.png",
    url3: "../images/Product/Clothes/Sweatshirts/N2.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-10",
    timeEnd: "21:32"
  },
  "The sweatshirt is made of thick cotton knitwear. Straight cut model. Details: zipper, hood with adjustable volume, 2 side pockets without fasteners, fleece lining."
);
let Product9 = new Product(
  9,
  "Clothes",
  "Sweatshirt",
  "Levi's",
  100,
  { size1: "46/48", size2: "48/50", size3: "50/52" },
  "Gray",
  "Cotton - 90%, Polyester - 10%",
  "Turkey",
  {
    url1: "../images/Product/Clothes/Sweatshirts/L1.1.png",
    url2: "../images/Product/Clothes/Sweatshirts/L1.2.png",
    url3: "../images/Product/Clothes/Sweatshirts/L1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-10",
    timeEnd: "21:32"
  },
  "The classic base model combines sporty style with everyday comfort. The famous Batwing logo on the chest."
);
let Product10 = new Product(
  10,
  "Clothes",
  "Trouser",
  "Tommy Hilfiger",
  230,
  { size1: "30/32", size2: "31/32", size3: "32/33" },
  "Dark Blue",
  "Cotton - 70%, Tensel - 28%, Elastane - 2%",
  "Turkey",
  {
    url1: "../images/Product/Clothes/Trousers/TH1.1.png",
    url2: "../images/Product/Clothes/Trousers/TH1.2.png",
    url3: "../images/Product/Clothes/Trousers/TH1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-10",
    timeEnd: "21:32"
  },
  "Trousers made of thick cotton textile."
);
let Product11 = new Product(
  11,
  "Clothes",
  "Trouser",
  "Tommy Hilfiger",
  200,
  { size1: "30/32", size2: "31/32", size3: "32/33" },
  "Black",
  "Cotton - 100%",
  "Turkey",
  {
    url1: "../images/Product/Clothes/Trousers/TH2.1.png",
    url2: "../images/Product/Clothes/Trousers/TH2.2.png",
    url3: "../images/Product/Clothes/Trousers/TH2.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-10",
    timeEnd: "21:32"
  },
  "Trousers made of thick cotton textile."
);
let Product12 = new Product(
  12,
  "Clothes",
  "Trouser",
  "Nike",
  125,
  { size1: "30/32", size2: "31/32", size3: "32/33" },
  "Green",
  "Cotton - 100%",
  "Vietnam",
  {
    url1: "../images/Product/Clothes/Trousers/N1.1.png",
    url2: "../images/Product/Clothes/Trousers/N1.2.png",
    url3: "../images/Product/Clothes/Trousers/N1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-28",
    timeEnd: "21:32"
  },
  "Trousers made of thick cotton textile. Details: straight fit, zipper and button closure, two side and two rear pockets, cargo pockets, bottom of the leg on the drawstring."
);
let Product13 = new Product(
  13,
  "Clothes",
  "Outerwear",
  "Levi's",
  155,
  { size1: "46/48", size2: "48/50", size3: "50/52" },
  "Blue",
  "Cotton - 100%",
  "Vietnam",
  {
    url1: "../images/Product/Clothes/Outerwear/L1.1.png",
    url2: "../images/Product/Clothes/Outerwear/L1.2.png",
    url3: "../images/Product/Clothes/Outerwear/L1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-28",
    timeEnd: "21:32"
  },
  "The jacket is made of denim. Straight cut model. Details: a turn-down collar, button closure, textile inner trim from a bike, long sleeves with button-on cuffs, 2 chest pockets with a flap, 2 side pockets, stitched seams."
);
let Product14 = new Product(
  14,
  "Clothes",
  "Outerwear",
  "Nike",
  110,
  { size1: "46/48", size2: "48/50", size3: "50/52" },
  "Yellow",
  "Polyester - 100%",
  "Columbia",
  {
    url1: "../images/Product/Clothes/Outerwear/N1.1.png",
    url2: "../images/Product/Clothes/Outerwear/N1.2.png",
    url3: "../images/Product/Clothes/Outerwear/N1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-16",
    timeEnd: "21:32"
  },
  "The windbreaker is made of lightweight water-repellent textile. Straight silhouette model. Details: reflective details, zip fastener, hood with a windproof stand, 2 outer pockets with zippers and 2 inner pockets."
);
let Product15 = new Product(
  15,
  "Clothes",
  "Outerwear",
  "Nike",
  210,
  { size1: "46/48", size2: "48/50", size3: "50/52" },
  "White",
  "Polyester - 100%",
  "Vietnam",
  {
    url1: "../images/Product/Clothes/Outerwear/N2.1.png",
    url2: "../images/Product/Clothes/Outerwear/N2.2.png",
    url3: "../images/Product/Clothes/Outerwear/N2.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-16",
    timeEnd: "21:32"
  },
  "The jacket provides comfort at a new level in cold weather. The design with the legendary Chevron Windrunner is made of Sherpa soft fleece. Details: straight fit, zipper, raglan sleeves, side pockets with zippers."
);
let Product16 = new Product(
  16,
  "Shoes",
  "Boot",
  "Nike",
  99,
  { size1: "40", size2: "41", size3: "42" },
  "Black",
  "faux leather, genuine leather, textiles",
  "Vietnam",
  {
    url1: "../images/Product/Shoes/Boots/N1.1.png",
    url2: "../images/Product/Shoes/Boots/N1.2.png",
    url3: "../images/Product/Shoes/Boots/N1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-20",
    timeEnd: "21:32"
  },
  "Nike Men's Boots in black - an everyday option. A model of a combination of natural and artificial leather is trimmed inside with mesh textiles. Details: functional lacing, embossed rubber sole, embossed brand logo."
);
let Product17 = new Product(
  17,
  "Shoes",
  "Boot",
  "Tommy Hilfiger",
  270,
  { size1: "40", size2: "41", size3: "42" },
  "Black",
  "natural nubuck, genuine leather",
  "Columbia",
  {
    url1: "../images/Product/Shoes/Boots/TH1.1.png",
    url2: "../images/Product/Shoes/Boots/TH1.2.png",
    url3: "../images/Product/Shoes/Boots/TH1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-16",
    timeEnd: "21:32"
  },
  "A model of a combination of natural and artificial leather is trimmed inside with mesh textiles. Details: functional lacing, embossed rubber sole, embossed brand logo."
);
let Product18 = new Product(
  18,
  "Shoes",
  "Boot",
  "Levi's",
  99,
  { size1: "40", size2: "41", size3: "42" },
  "Yellow",
  "canvas, genuine leather",
  "Turkey",
  {
    url1: "../images/Product/Shoes/Boots/L1.1.png",
    url2: "../images/Product/Shoes/Boots/L1.2.png",
    url3: "../images/Product/Shoes/Boots/L1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-16",
    timeEnd: "21:32"
  },
  "Nike Men's Boots in black - an everyday option. A model of a combination of natural and artificial leather is trimmed inside with mesh textiles. Details: functional lacing, embossed rubber sole, embossed brand logo."
);
let Product19 = new Product(
  19,
  "Shoes",
  "Sneakers",
  "Nike",
  200,
  { size1: "40", size2: "41", size3: "42" },
  "Blue",
  "faux leather, genuine leather, textiles",
  "Vietnam",
  {
    url1: "../images/Product/Shoes/Sneakers/N1.1.png",
    url2: "../images/Product/Shoes/Sneakers/N1.2.png",
    url3: "../images/Product/Shoes/Sneakers/N1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-16",
    timeEnd: "21:32"
  },
  "Men's sneakers - a legendary silhouette and protection against shock loads. Details: the top made of high-quality leather is wear-resistant, the foam sole structure is equipped with a Max Air air cushion in the heel to absorb shock loads, and the rubber sole with a “waffle” tread provides reliable grip."
);
let Product20 = new Product(
  20,
  "Shoes",
  "Gumshoes",
  "Levi's",
  160,
  { size1: "40", size2: "41", size3: "42" },
  "White",
  "polymer, textile",
  "Columbia",
  {
    url1: "../images/Product/Shoes/Gumshoes/L1.1.png",
    url2: "../images/Product/Shoes/Gumshoes/L1.2.png",
    url3: "../images/Product/Shoes/Gumshoes/L1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-16",
    timeEnd: "21:32"
  },
  "Details: the top made of high-quality leather is wear-resistant, the foam sole structure is equipped with a Max Air air cushion in the heel to absorb shock loads, and the rubber sole with a “waffle” tread provides reliable grip."
);
let Product21 = new Product(
  21,
  "Shoes",
  "Slippers",
  "Levi's",
  160,
  { size1: "40", size2: "41", size3: "42" },
  "Black",
  "textile",
  "India",
  {
    url1: "../images/Product/Shoes/Slippers/TH1.1.png",
    url2: "../images/Product/Shoes/Slippers/TH1.2.png",
    url3: "../images/Product/Shoes/Slippers/TH1.3.png"
  },
  {
    percentageShare: 30,
    dateEnd: "2020-01-20",
    timeEnd: "21:32"
  },
  "Slippers from the premium brand are made of textiles."
);
Products.push(Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9, Product10, Product11, Product12, Product13, Product14, Product15, Product16, Product17, Product18, Product19, Product20, Product21);

let Blog1 = new Blog(1,
  "How to protect yourself from fake?",
  "The clothes of the well-known brands are faked. How not to buy a fake?",
  { url1: "../images/Blog/blog1.jpg" },
  `3 steps to protect against buying fakes:
To order real and high-quality clothes, you need to follow only 3 rules
1. Order and buy in official stores.
2. Be wary of clothing with too low a cost.
3. Find out if the seller has a quality certificate for the product.
We wish all clothing buyers only good emotions from a perfect shopping!`
);

let Blog2 = new Blog(2,
  "How to buy clothes for sale that you will wear often and with pleasure?",
  "The answer was received from the managers of our online store. For 7 years they have been advising clients on beautiful outfits.",
  { url1: "../images/Blog/blog2.png" },
  `It is easy to recognize such clothes, because after all, 2-3 months your whole city goes crazy. And after a season a new hit appears.
  Synthetic clothing is always cheaper than cotton and linen. "Catching" her on sale is not interesting. But the value for the buyer of things 
  made of cotton, polyester at a discount really increases. Look for clothes that are close in tone to your favorite things. Or things of 
  black, gray and white colors that are suitable for everything. Choose things whose price is reduced by at least 20-30%.`
);
let Blogs = [];
Blogs.push(Blog1, Blog2);
for (let i = 0; i < Products.length; i++) {
  if (Products[i].Discount != undefined) {
    if (
      Date.now() >
      Date.parse(
        `${Products[i].Discount.dateEnd}T${Products[i].Discount.timeEnd}`
      )
    ) {
      Products[i].Discount.isDiscaunt = false;
    }
  }
}
let setProductStorage = sessionStorage.setItem(
  "Products",
  JSON.stringify(Products)
);
let ProductsStorage = JSON.parse(sessionStorage.getItem("Products"));
let CartCustomer = [];
let WishlistCustomer = [];
let OrderCustomer = [];
let ReviewCustomer = [];
