let cart = {};
let count = 0;
let sum = 0;

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"));
}

if (localStorage.getItem("sum")) {
    sum = parseFloat(localStorage.getItem("sum"));
}

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

let tbody = document.getElementById("items");

for (let id in cart) {
    let item = cart[id];

    let tr = document.createElement('tr')

    let title_td = document.createElement('td')
    title_td.textContent = item.title
    tr.appendChild(title_td)

    let desc_td = document.createElement("td");
    desc_td.textContent = item.desc
    tr.appendChild(desc_td);

    let cant_td = document.createElement("td");
    cant_td.textContent = item.cant
    tr.appendChild(cant_td);

    let accion_td = document.createElement("td");
    accion_td.innerHTML = `
    <td>
        <button id="aumentar${id}" class="btn bg-Naranjillo btn-sm" data-id="${id}">
            +
        </button>
        <button id="reducir${id}" class="btn btn-danger btn-sm" data-id="${id}">
            -
        </button>
    </td>
    `
    tr.appendChild(accion_td)

    let price_td = document.createElement("td");
    price_td.textContent = item.price;
    tr.appendChild(price_td);

    tbody.appendChild(tr)
    let btna = document.getElementById(`aumentar${id}`)
    btna.addEventListener('click', (event) => {
        console.log(event.target['data-id']);
        cart[id].cant++;
        count++
        sum += cart[id].price;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
        location.reload()
    });

    let btnr = document.getElementById(`reducir${id}`)
    btnr.addEventListener('click', (event) => {
        if (cart[id].cant === 0) {
            delete cart[id]
            location.reload();
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            cart[id].cant--
            count--
            sum -= cart[id].price;
            location.reload();
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        }
    });

}



if (localStorage.getItem("cart") === JSON.stringify({})) {
    footer.innerHTML = `<tr scope="row" colspan="5">Carrito vacío - comience a comprar!</tr>`
} else {
    footer.innerHTML = `
    <tr>
        <th scope="row" colspan="2">Total productos</th>
        <td colspan="2">${count}</th>
        <td class="font-weight-bold">$ <span>${sum}</span></td>
    </tr>
    <tr>
        <th>
            <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                Vaciar Carrito
            </button>
        </th>
        <th colspan="4">
            <button class="btn btn-primary btn-sm" id="ordenar">
                Ordenar Pedido
            </button>
        </th>
    </tr>`
};

const btnVaciar = document.getElementById('vaciar-carrito')
btnVaciar.addEventListener('click', () => {
    localStorage.setItem("cart", JSON.stringify({}));
    localStorage.setItem("sum", 0);
    localStorage.setItem("count", 0);
    tbody.innerHTML = '';
    footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
});

const btnOrdenar = document.getElementById('ordenar')
btnOrdenar.addEventListener('click', () => {
    window.alert("Su pedido se realizo correctamente")
    localStorage.setItem("cart", JSON.stringify({}));
    localStorage.setItem("sum", 0);
    localStorage.setItem("count", 0);
    tbody.innerHTML = '';
    footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
})

function updateCart() {
    localStorage.setItem("sum", sum);
    localStorage.setItem("count", count);
}
