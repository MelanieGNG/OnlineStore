let user = {}

function handleFormularioRegistroSubmit(event){
    event.preventDefault();
    var nombres = document.querySelector('#nombre').value;
    var fapellido = document.querySelector('#apellido').value;
    var correo = document.querySelector('#correo').value;
    var usuario = document.querySelector('#usuario').value;
    var contraseña = document.querySelector('#contraseña').value;
    var ccontraseña = document.querySelector('#ccontraseña').value;

    if(contraseña===ccontraseña){
        localStorage.setItem("user", JSON.stringify({usuario, contraseña}));
        //console.log(nombres, fapellido, correo, usuario, contraseña, ccontraseña);
        window.location.href = 'index.html'
    }else{
        window.alert('Su contraseña no coincide');
    }
}

document
    .querySelector('#registro')
    .addEventListener('submit', handleFormularioRegistroSubmit);
