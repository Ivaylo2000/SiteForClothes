import { tops, shoes, jackets, pants } from "./products.js";
import productBuilder from "./productBuilder.js";

const stockDiv = document.querySelector(".stock");
const cartItems = document.querySelector(".cartItems");
const ShoesParagraph = document.querySelector(".shoes");
const JacketParagraph = document.querySelector(".jackets");
const TopsParagraph = document.querySelector(".tops");
const PantsParagraph = document.querySelector(".pants");
const opencart = document.querySelector(".opencart");
const changeDivName = document.querySelector("#carthui");
const cart = document.querySelector(".cart");
const logo = document.querySelector(".logo");
const items = document.querySelector(".items");
const totalPrice = document.querySelector(".TotalPrice");
cartItems.textContent = 0;
let TotalPrice = 0;
let i = parseInt(cartItems.textContent);
function productPrice() {
  const btns = document.querySelectorAll("button");
  btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const parent = button.parentNode;
      const price = [...parent.querySelector("p").textContent.trim("")]
        .filter((e) => !isNaN(e))
        .join("");
      TotalPrice = TotalPrice + parseInt(price);
      i++;
      cartItems.textContent = i;
      totalPrice.textContent = "Total price: " + TotalPrice + "$";

      const clonedContainer = parent.cloneNode(true);
      const clonedButton = clonedContainer.querySelector("button");
      clonedButton.remove();
      changeDivName.appendChild(clonedContainer);
    });
  });
}

ShoesParagraph.addEventListener("click", () => {
  stockDiv.innerHTML = "";
  shoes.forEach((obuvka) => {
    const product = productBuilder(
      obuvka.id,
      obuvka.src,
      obuvka.name,
      obuvka.price
    );
    stockDiv.appendChild(product);
  });
  productPrice();
});

TopsParagraph.addEventListener("click", () => {
  stockDiv.innerHTML = "";
  tops.forEach((top) => {
    const product = productBuilder(top.id, top.src, top.name, top.price);
    stockDiv.appendChild(product);
  });
  productPrice();
});

PantsParagraph.addEventListener("click", () => {
  stockDiv.innerHTML = "";
  pants.forEach((pant) => {
    const product = productBuilder(pant.id, pant.src, pant.name, pant.price);
    stockDiv.appendChild(product);
  });
  productPrice();
});

JacketParagraph.addEventListener("click", () => {
  stockDiv.innerHTML = "";
  jackets.forEach((jacket) => {
    const product = productBuilder(
      jacket.id,
      jacket.src,
      jacket.name,
      jacket.price
    );
    stockDiv.appendChild(product);
  });
  productPrice();
});

[opencart, cart].map((element2) =>
  element2.addEventListener("click", () => {
    changeDivName.className = "containerCart-flex";
  })
);

[logo, items].map((element) =>
  element.addEventListener("click", () => {
    changeDivName.className = "containerCart";
  })
);
