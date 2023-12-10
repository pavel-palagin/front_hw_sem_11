function creatItem(docEl, id) {
  JSON.parse(dataFeaturedItems).forEach((item) => {
    if (id === item.id) {
      docEl.insertAdjacentHTML(
        "beforeend",
        getCart(
          item.img,
          item.subtitle,
          item.price,
          item.color,
          item.size,
          item.quantity
        )
      );
    }
  });
}

function getCart(img, subtitle, price, color, size, quantity) {
  return `
  <div class="product">
    <img width="262px" height="306px" src="${img}" alt="" class="product__image" />

    <div class="product__description">
      <h3 class="product__title">${subtitle}</h3>
      <p class="product__info">
        Price:<span class="product__info_price">${price}</span>
      </p>
      <p class="product__info">
        Color:<span class="product__info_color">${color}</span>
      </p>
      <p class="product__info">
        Size:<span class="product__info_size">${size}</span>
      </p>
      <form class="product__count">
        <label class="product__info" for="count">Quantity:</label>
        <input
          class="product__info_quantity"
          type="number"
          id="count"
          placeholder="${Number(quantity)}"
          name=""
          min="1"
        />
      </form>
      <svg
        class="product_close"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          class="product_close-path"
          d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
          fill="#575757"
        />
      </svg>
    </div>
  </div>
`;
}

const dignityEl = document.querySelector(".dignity");
dignityEl.insertAdjacentHTML(
  "afterend",
  '<div class="cart__items"><p class="cart__items_text">Cart Items</p></div>'
);
const cartItems = document.querySelector(".cart__items");
cartItems.style.display = "none";

const itemsEl = document.querySelectorAll(".items"); //поиск товаров
itemsEl.forEach((elem) => {
  const productAdd = elem.querySelector(".product__add");
  let count = 0;

  productAdd.addEventListener("click", () => {
    ++count;

    if (count === 1) {
      creatItem(cartItems, elem.id);
    } else {
      let quantity = document.querySelectorAll(".product__info_quantity");
      quantity.forEach((quantityEl) => {
        quantityEl.placeholder = count;
      });
    }

    const cartItemsText = document.querySelector(".cart__items_text");

    cartItemsText.style.fontSize = "30px";
    cartItemsText.style.paddingLeft = "687px";
    cartItems.style.display = "flex";
    cartItems.style.flexDirection = "column";
    cartItems.style.gap = "40px";

    cartItems.style.paddingTop = "96px";
    cartItems.style.paddingLeft = "230px"; //calc(50% - $widthContent/2)
    cartItems.style.paddingBottom = "96px";

    const product = document.querySelectorAll(".product"); //удаление из Cart items
    product.forEach((element) => {
      const close = element.querySelector(".product_close-path");
      close.addEventListener("click", (e) => {
        e.target.closest(".product").remove();
      });
      console.log(count);
    });
  });
});
