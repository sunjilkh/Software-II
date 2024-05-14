const product = [
  {
    id: 1,
    title: "NIKE Sports X",
    price: 5200,
    image: "image/shoes.png",
  },
  {
    id: 2,
    title: "NIKE Air Max",
    price: 3220,
    image: "image/shoes1.png",
  },
  {
    id: 3,
    title: "NIKE Black Fit",
    price: 8520,
    image: "image/shoes2.png",
  },
  {
    id: 4,
    title: "NIKE Special",
    price: 4220,
    image: "image/shoes3.png",
  },
  {
    id: 5,
    title: "NIKE Fashion II",
    price: 5202,
    image: "image/shoes4.png",
  },
  {
    id: 6,
    title: "NIKE Lab",
    price: 3220,
    image: "image/shoes5.png",
  },
  {
    id: 7,
    title: "NIKE Free",
    price: 4120,
    image: "image/shoes6.png",
  },
  {
    id: 8,
    title: "NIKE Air Jordan",
    price: 6220,
    image: "image/shoes7.png",
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class = 'Box'>
            <div class = 'img-box'>
                <img class = 'images' src=${image}></img>
            </div>
         <div class ='bottom'><p>${title}</p>
                    <h2>৳ ${price}</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `
        </div>
      </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function displaycart(a) {
  //console.log(000);
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "৳ " + 0 + "";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.getElementById("total").innerHTML = "৳ " + total +"";
        return (
          `<div class ='cart-item'>
          <div class='row-img'>
            <img class='rowing' src=${image}>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size:16px;'>
          $ ${price}</h2>` +
          "<i class='fa-solid fa-trash'onclick='delElement(" +
          j++ +
          ")' ></i></div>"
        );
      })
      .join("");
  }
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

// Fashion Shoes

const product1 = [
  {
    id: 11,
    title: "NIKE Sports X",
    price: 5200,
    image: "image/Fashion/1.png",
  },
  {
    id: 12,
    title: "NIKE Air Max",
    price: 3220,
    image: "image/Fashion/2.png",
  },
  {
    id: 13,
    title: "NIKE Black Fit",
    price: 8520,
    image: "image/Fashion/3.png",
  },
  {
    id: 14,
    title: "NIKE Special",
    price: 4220,
    image: "image/Fashion/4.png",
  },
  {
    id: 15,
    title: "NIKE Air",
    price: 5202,
    image: "image/Fashion/5.png",
  },
  {
    id: 16,
    title: "NIKE Lab",
    price: 3220,
    image: "image/Fashion/6.png",
  },
  {
    id: 17,
    title: "NIKE Free",
    price: 4120,
    image: "image/Fashion/7.png",
  },
  {
    id: 18,
    title: "NIKE Air Jordan",
    price: 6220,
    image: "image/Fashion/8.png",
  },
  {
    id: 18,
    title: "NIKE Air Jordan",
    price: 6220,
    image: "image/Fashion/9.png",
  },
];

const categorie = [
  ...new Set(
    product1.map((item1) => {
      return item1;
    })
  ),
];
let ii = 0;
document.getElementById("root1").innerHTML = categorie
  .map((item1) => {
    var { image, title, price } = item1;
    return (
      `<div class = 'Box'>
            <div class = 'img-box'>
                <img class = 'images' src=${image}></img>
            </div>
         <div class ='bottom'><p>${title}</p>
                    <h2>৳ ${price}</h2>` +
      "<button onclick='addtocart1(" +
      ii++ +
      ")'>Add to cart</button>" +
      `
        </div>
      </div>`
    );
  })
  .join("");
  function addtocart1(a) {
    cart.push({ ...categorie[a] });
    displaycart();
  }



// Ladies shoes

const product2 = [
  {
    id: 11,
    title: "Xen Vidi",
    price: 5200,
    image: "image/Ladies/1.png",
  },
  {
    id: 12,
    title: "Jimmy Choo",
    price: 3220,
    image: "image/Ladies/2.png",
  },
  {
    id: 13,
    title: " VEJA",
    price: 8520,
    image: "image/Ladies/3.png",
  },
  {
    id: 14,
    title: "BIRKENSTOCK",
    price: 4220,
    image: "image/Ladies/4.png",
  },
  {
    id: 15,
    title: "NET-A-PORTER",
    price: 5202,
    image: "image/Ladies/5.png",
  },
  {
    id: 16,
    title: "Christian Louboutin",
    price: 3220,
    image: "image/Ladies/6.png",
  },
  {
    id: 17,
    title: "Stuart Weitzman",
    price: 4120,
    image: "image/Ladies/7.png",
  },
  {
    id: 18,
    title: "Manolo Blahnik",
    price: 6220,
    image: "image/Ladies/8.png",
  },
  {
    id: 29,
    title: "Dr. Martens ",
    price: 6220,
    image: "image/Ladies/9.png",
  },

];

const categori = [
  ...new Set(
    product2.map((item1) => {
      return item1;
    })
  ),
];
let iii = 0;
document.getElementById("root2").innerHTML = categori
  .map((item1) => {
    var { image, title, price } = item1;
    return (
      `<div class = 'Box'>
            <div class = 'img-box'>
                <img class = 'images' src=${image}></img>
            </div>
         <div class ='bottom'><p>${title}</p>
                    <h2>৳ ${price}</h2>` +
      "<button onclick='addtocart2(" +
      iii++ +
      ")'>Add to cart</button>" +
      `
        </div>
      </div>`
    );
  })
  .join("");
  function addtocart2(a) {
    cart.push({ ...categori[a] });
    displaycart();
  }
