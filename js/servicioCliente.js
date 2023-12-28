var pedido = document.getElementById('botonOpcionPedidos');
var cuenta = document.getElementById('botonOpcionCuenta');
var web = document.getElementById('botonOpcionProblemaWeb');
var mensaje = document.getElementById('mensajeTexto');
var informacion = document.getElementById('texto-Ayuda');
var agradecimiento = document.getElementById('mensajeAgradecimiento')
var botonMuyBueno = document.getElementById('botonA1');
var botonRegular = document.getElementById('botonA2');
var botonMalo = document.getElementById('botonA3');

function FbotonOpcion1On() {    
    if (pedido.textContent === 'Tengo dudas con mis pedidos'){
        mensaje.textContent = '¿Que tipo de problema tiene?';
        pedido.textContent = 'No aparecen mis pedidos en la canasta';
        cuenta.textContent = 'No se cómo hacer un pedido en la pagina';
        web.textContent = 'Volver';
        pedido.addEventListener("click", eventoPedido);
        cuenta.addEventListener("click", eventoCuenta);
        web.addEventListener("click", eventoWeb);
        function eventoPedido(){
            informacion.textContent = 'Por favor vuelva a elegir los productos que usted haya puesto en la canasta, en dado caso de que no funcione por favor mande un mensaje a partir de los contactos que tenemos en la página, inmediatamente un trabajador lo atenderá y seguirá con su caso.';
        }
        function eventoCuenta(){
            informacion.textContent = '1. Vaya a la página principal.\n2. Seleccione un apartado de nuestro catálogo.\n3. Escoja un producto que a usted le guste y apriete el botón de “agregar a la canasta”.\n4. Por último, proceda con su compra.';
        }
        function eventoWeb(){
            pedido.textContent = 'Tengo dudas con mis pedidos';
            cuenta.textContent = 'Tengo duda con mi cuenta';
            web.textContent = 'Encontré un problema en la pagina';
            informacion.textContent = 'Aquí aparecerá la información que le brindamos a nuestros clientes.';
            mensaje.textContent = 'Hola en que puedo ayudarte';
        }
    }
}

function FbotonOpcion2On(){
    if (cuenta.textContent === 'Tengo duda con mi cuenta'){
        mensaje.textContent = '¿Que tipo de problema tiene?';
        pedido.textContent = 'No quiere abrir mi cuenta cuando ingreso';
        cuenta.textContent = 'Quiero recuperar mi cuenta';
        web.textContent = 'Volver';
        pedido.addEventListener("click", eventoPedido);
        cuenta.addEventListener("click", eventoCuenta);
        web.addEventListener("click", eventoWeb);
        function eventoPedido(){
            informacion.textContent = 'Intente ingresar nuevamente en 15 min, en dado caso de que no funcione por favor mande un mensaje a partir de los contactos que tenemos en la página, inmediatamente un trabajador lo atenderá y seguirá con su caso.';
        }
        function eventoCuenta(){
            informacion.textContent = 'Contáctese con nosotros y seguiremos su caso.';
        }
        function eventoWeb(){
            location.reload();
            // pedido.textContent = 'Tengo dudas con mis pedidos';
            // cuenta.textContent = 'Tengo duda con mi cuenta';
            // web.textContent = 'Encontré un problema en la pagina';
            // informacion.textContent = 'Aquí aparecerá la información que le brindamos a nuestros clientes.';
            // mensaje.textContent = 'Hola en que puedo ayudarte';
        }
    }
}

function FbotonOpcion3On(){
    if (web.textContent === 'Encontré un problema en la pagina'){
        mensaje.textContent = '¿Que tipo de problema tiene?';
        pedido.textContent = 'La página se cayo';
        cuenta.textContent = 'La página no responde';
        web.textContent = 'Volver';
        pedido.addEventListener("click", eventoPedido);
        cuenta.addEventListener("click", eventoCuenta);
        web.addEventListener("click", eventoWeb);
        function eventoPedido(){
            informacion.textContent = 'La pagina esta en mantenimiento, en un lapso de 1hr la página volverá a funcionar con normalidad.';
        }
        function eventoCuenta(){
            informacion.textContent = 'Por favor mándenos el reporte a partir de nuestro correo electrónico. En un lapso de 24hr la página volverá a funcionar con normalidad.';
        }
        function eventoWeb(){
            location.reload();
            // pedido.textContent = 'Tengo dudas con mis pedidos';
            // cuenta.textContent = 'Tengo duda con mi cuenta';
            // web.textContent = 'Encontré un problema en la pagina';
            // informacion.textContent = 'Aquí aparecerá la información que le brindamos a nuestros clientes.';
            // mensaje.textContent = 'Hola en que puedo ayudarte';
        }
    }

}

//Opciones de agradecimiento
function agradecimiento01(){
    agradecimiento.textContent = 'Muchas gracias por su opinión.';
}

function agradecimiento02(){
    agradecimiento.textContent = 'Muchas gracias, mejoraremos.';
}

function agradecimiento03(){
    agradecimiento.textContent = 'Muchas gracias, tomaremos en cuenta tu opinión.';
}