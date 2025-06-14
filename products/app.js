let pagenesionLimit = 5;

const sortBeauty = (productsData) => {
  const newObj = {};

  productsData = productsData.products.filter((element) => {
    if (element.category == `groceries` || element.category == `furniture`) {
      return element;
    }
  });

  return productsData;
};

const getProductsDiv = async (productDatas, pagenesionLimitStart = 0) => {
  for (let i = pagenesionLimitStart; i < pagenesionLimit; i++) {
    const divDate = document.createElement("div");
    divDate.className = "data-card";

    const title = document.createElement("h2");
    const thumbnail = document.createElement("img");
    const price = document.createElement("p");
    const discountPercentage = document.createElement("p");
    const rating = document.createElement("p");
    const brand = document.createElement("p");
    const category = document.createElement("p");

    title.textContent = productDatas[i].title;
    thumbnail.id = "thumbnail";
    thumbnail.src = productDatas[i].thumbnail;
    price.textContent = productDatas[i].price;
    discountPercentage.textContent = productDatas[i].discountPercentage;
    rating.textContent = productDatas[i].rating;
    brand.textContent = productDatas[i].brand;
    category.textContent = productDatas[i].category;

    title.id = "title";
    price.id = "price";
    discountPercentage.id = "discountPercentage";
    rating.id = "rating";
    brand.id = "brand";
    category.id = "category";

    divDate.appendChild(title);
    divDate.appendChild(thumbnail);
    divDate.appendChild(price);
    divDate.appendChild(discountPercentage);
    divDate.appendChild(rating);
    divDate.appendChild(brand);
    divDate.appendChild(category);

    document.getElementById("datas").appendChild(divDate);
  }
};

const getProducts = async () => {
  let productDatas = await (
    await fetch(`https://dummyjson.com/products`)
  ).json();

  productDatas = sortBeauty(productDatas);

  setTimeout(() => {
    document.getElementById("datas").style.display = "flex";
    document.getElementById("loading").style.display = "none";
    document.getElementById("showAgain").style.display = "block";
  }, 2000);

  getProductsDiv(productDatas);
};

getProducts();

const showAgainDatas = async () => {
  document.getElementById("datas").style.display = "none";
  document.getElementById("showAgain").style.display = "none";
  document.getElementById("loading").style.display = "flex";
  setTimeout(() => {
    document.getElementById("datas").style.display = "flex";
    document.getElementById("loading").style.display = "none";
  }, 500);
  let productDatas = await (
    await fetch(`https://dummyjson.com/products`)
  ).json();

  productDatas = sortBeauty(productDatas);
  const limit = pagenesionLimit;
  pagenesionLimit = productDatas.length;
  getProductsDiv(productDatas, limit);
};

document
  .getElementById("showAgain")
  .addEventListener("click", () => showAgainDatas());
