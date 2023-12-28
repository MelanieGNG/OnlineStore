let user = {}

function handleFormularioInicioSesionSubmit(event)
{
    event.preventDefault();
    var usuario = document.querySelector('#Usuario').value;
    var contraseña = document.querySelector('#Contraseña').value;

    localStorage.setItem("user", JSON.stringify({usuario, contraseña}));

    //console.log(usuario, password);
    window.location.href = 'index.html'
}

document
    .querySelector('#Inicio-Sesion')
    .addEventListener('submit', handleFormularioInicioSesionSubmit);