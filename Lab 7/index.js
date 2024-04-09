var items = [];
function show() {
    var cards = document.querySelectorAll(".card");
    cards.forEach(function (el, id) {
        var randomPrice;
        var showBtn = el.querySelector(".showItem");
        var para = el.querySelector(".show");
        var inputContainer = el.querySelector(".input-container");
        randomPrice = ((id + Math.random()) * 10);
        showBtn === null || showBtn === void 0 ? void 0 : showBtn.addEventListener("click", function () {
            para.innerHTML = "\n                <h2 class=\"SP\">S\u1EA3n ph\u1EA9m ".concat(id, "</h2>\n                <p class=\"Price\">Gi\u00E1: ").concat(randomPrice.toPrecision(2), "</p>\n            ");
            inputContainer.innerHTML = "\n            <input type=\"number\" min=\"0\" step=\"1\" placeholder=\"H\u1ED9p ch\u1ECDn s\u1ED1 l\u01B0\u1EE3ng\">\n            ";
        });
    });
}
function cart() {
    var cards = document.querySelectorAll(".card");
    cards.forEach(function (el) {
        var title = el.querySelector("h2");
        var price = el.querySelector("p");
        var addToCart = el.querySelector(".addToCart");
        // addToCart.addEventListener("click", () => {
        var numberProduct = el.querySelector("input");
        var inputValue;
        numberProduct.addEventListener("change", function (e) {
            inputValue = e.target.value;
            console.log(e);
        });
        console.log(inputValue, title.textContent, price.textContent);
        var elToCart = document.createElement('div');
        elToCart.innerHTML = "".concat(title.textContent, " ").concat(price.textContent, " ").concat(numberProduct.value);
        // console.log(elToCart);
        items.push(elToCart);
        // })
    });
    var checkout = document.querySelector(".cart");
    items.map(function (el) {
        return checkout.appendChild(el);
    });
}
window.addEventListener("load", function () {
    show();
    // cart()
});
