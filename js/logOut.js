let logout = document.getElementById('logout');

logout.addEventListener("click", () => {
    localStorage.setItem("user", JSON.stringify({}))

    let inicio = document.getElementById("inicio")
    inicio.innerHTML = `
        <a href="registro.html"><i class="bi-person-circle"></i></a>
        <a href="pedidos.html"><i class="bi-dropbox"></i></a>
    `
})
