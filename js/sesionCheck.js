let inicio = document.getElementById("inicio")

if(localStorage.getItem("user") === JSON.stringify({})){
    let btn = document.querySelector(".producto button");
    btn.disabled = true;

    inicio.innerHTML = `
    <a href="registro.html"><i class="bi-person-circle"></i></a>
    <a href="pedidos.html"><i class="bi-dropbox"></i></a>
    `
} else {
    inicio.innerHTML = `
    <button id="logout" class="btn btn-danger">
        Cerrar Sesion
    </button>
    <a href="pedidos.html"><i class="bi-dropbox"></i></a>
    `
}
