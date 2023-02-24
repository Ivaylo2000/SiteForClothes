function productBuilder(id, src, name, price) {
  const div = document.createElement("div");
  div.id = id;
  div.className = "card";
  const img = document.createElement("img");
  img.src = src;
  div.appendChild(img);
  const h2 = document.createElement("h2");
  h2.textContent = name;
  div.appendChild(h2);
  const p = document.createElement("p");
  p.textContent = `Price: ${price}` + "$";
  div.appendChild(p);
  const button = document.createElement("button");
  button.className = "cardbutton";
  button.id = "tri";
  button.textContent = "Add to cart";
  div.appendChild(button);
  return div;
}
export default productBuilder;
