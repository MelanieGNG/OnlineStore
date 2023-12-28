let count = 0;
let sum = 0;
let cart = {};

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"));
}

if (localStorage.getItem("sum")) {
    sum = parseFloat(localStorage.getItem("sum"));
}

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

updateCart();

let btns = document.querySelectorAll(".products a");

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", add);
}

// let btn = document.querySelector(".producto button");
// btn.addEventListener("click",add);

function add(event) {
    let price = parseFloat(event.target.dataset.price);
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;
    let text = event.target.dataset.text;
    if (id in cart) {
        cart[id].cant++;
    } else {
        let cartItem = {
            title: title,
            price: price,
            desc: text,
            cant: 1
        };
        cart[id] = cartItem
    }

    count++;
    sum += price;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    localStorage.setItem("sum", sum);
    localStorage.setItem("count", count);
}