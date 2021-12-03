export const Catalog = (harvestedArr) => {
  const mainContainer = document.querySelector("#container");

  let htmlString = harvestedArr.map((seed) => {
    return `<section class="plant">${seed.type}</section>`
  }).join("");

  mainContainer.innerHTML = htmlString;
}