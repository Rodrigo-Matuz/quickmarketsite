/* @format */

var items = [];

document.querySelector("input[type=submit]").addEventListener("click", () => {
    var productName = document.querySelector("input[name=product_name]");
    var productValue = document.querySelector("input[name=product_value]");

    items.push({
        namep: productName.value,
        value: productValue.value,
    });
    let productList = document.querySelector(".list-products");
    let totalValue = 0;
    productList.innerHTML = "";
    items.map((valueForFunction) => {
        totalValue += parseFloat(valueForFunction.value);
        productList.innerHTML += `
        <div class="list-products-single">
        <h2 class="product-title">${valueForFunction.namep}</h2>
        <h2 class="product-price"><span>$${valueForFunction.value}</span></h2>
    </div>
        `;
    });
    totalValue = totalValue.toFixed(2);
    productValue.value = "";
    productName.value = "";

    let totalValueElement = document.querySelector(".total-value span");
    totalValueElement.innerHTML = totalValue;
});

document
    .querySelector("customButton[name=clear]")
    .addEventListener("click", () => {
        items = [];

        document.querySelector(".list-products").innerHTML = "";
        document.querySelector(".total-value span").innerHTML = "0";
    });
