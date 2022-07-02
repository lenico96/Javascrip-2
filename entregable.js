///////////////////////DESAFIO ENTREGABLE 3//////////////////////////////////////////////////////////////////////////////////////////////////////



//ARRAY DE PRODUCTOS CON LOS OBJETOS
const PRODUCTOS = [{
    "id": 1,
    "nombre": "AK47 automatica x3",
    "precio": 2500,
    "cantidad": 1
},
{
    "id": 2,
    "nombre": "LEMON HAZE automatica x3",
    "precio": 2500,
    "cantidad": 1
},
{
    "id": 3,
    "nombre": "BLUEBERRY automatica x6",
    "precio": 5000,
    "cantidad": 1
},
{
    "id": 4,
    "nombre": "PURPLE HAZE automaticas x6",
    "precio": 5000,
    "cantidad": 1
},

]



const CARRITO = [];

let compra = prompt(`
Bienvenido a EARTHBANK!
desea ver las siguientes ofertas?

escriba si y presione "aceptar" para continuar o cancele para finalizar.
    `);

if (compra == null) { 
alert(`
    Haz dado click en Cancelar
    Volve pronto para mas ofertas!♥`);
}
if (compra == "") {
alert("No seleccionaste nada."); 
}


if (compra.toLowerCase() == "si") { 

let filtrar = prompt(`
    Filtro disponible Si/No
`).toLowerCase();

if (filtrar == "si") { 

    let precio = Number(
         prompt(`Ingrese el precio en pesos Argentinos que desea filtrar:
         
         (min 2500 max 5000) `)
    );

    const productosFiltrados = filtrarPrecio(precio);
         

    alert("Filtro precios mayores a PESOS$" + precio + "\nContinue para ver los Productos");

    
    let eleccionFiltrados;
    
    while (eleccionFiltrados != 0) {

         eleccionFiltrados = prompt(`
              ${VerFiltro(productosFiltrados)}
              A continuación seleccione el producto por su ID
         `);
         

         if (eleccionFiltrados == null) {
              alert("Gracias por visitarnos, vuelva cuando quiera");
              break;
         }

         if (eleccionFiltrados == 0) {
              break;
         }

         agregarProductosAlCarrito(productosFiltrados, parseInt(eleccionFiltrados));
         console.log(sumarTotal()); 


    }
    
    
    let eliminar = prompt(`
    Deseas eliminar algun producto del carrito?
    Si / No
    `).toLowerCase();

    if (eliminar == "si") {
         console.log(CARRITO);

         eliminarProductoCarrito();

         alert(`
         La suma total del carrito es: USD ${sumarTotal(CARRITO)}
         `)
              
     


    } else {

         alert(`
         La suma total del carrito es: PESOS$ ${sumarTotal(CARRITO)}
         `)
              
    }




} else { 

    let eleccionProductos = ""; 

    while (eleccionProductos != "no") {
         eleccionProductos = prompt(`
         ¿Que productos deseas agregar al carrito?
         Para dejar de comprar, escribir NO
         
         Digita 1 para comprar: AK47 automatica x3 PRECIO: 2500$
         Digita 2 para comprar: LEMON automatica x3 PRECIO: 2500$
         Digita 3 para comprar: BLUEBERRY automatica x6 PRECIO: 5500$ 
         Digita 4 para comprar: PURPLE automatica x6 PRECIO: 5500$
         
         
         `).toLowerCase()

         if (eleccionProductos == null) {
              alert("Gracias por visitarnos y ver las ofertas, vuelva cuando quiera");
              break;
         }

         if (eleccionProductos == "no") {
              break;
         }

         agregarProductosAlCarrito(PRODUCTOS, parseInt(eleccionProductos));

         console.log(sumarTotal()); 
    }

    let eliminar = prompt(`
         Deseas eliminar algun producto del carrito?
         Si / No
         `).toLowerCase();


    if (eliminar == "si") {
         console.log(CARRITO);

         eliminarProductoCarrito();

         
         alert(`
         La suma total del carrito es: PESOS$ ${sumarTotal(CARRITO)}
         `)
         
             

    } else {

         alert(`
         La suma total del carrito es: PESOS$ ${sumarTotal(CARRITO)};
         `)
         alert("Gracias por su compra, su compra se agrego al carrito")
              
    }
}



} else {
alert("Gracias por visitarnos, volve pronto!♥");
    
}



//* FUNCIONES UTILIZADAS

//FILTRO DE PRECIO
function filtrarPrecio(precio) {

let filtrados = PRODUCTOS.filter(producto => producto.precio >= precio);

return filtrados;
}



//VER PRODUCTOS FILTRADOS
function VerFiltro(productosFiltrados) {
let verProdFiltrados = "Para terminar digite el número 0 (cero)\n\nProductos filtrados: \n"

productosFiltrados.forEach((producto) => verProdFiltrados += `
    ID: ${producto.id} - ${producto.nombre}  -  PESOS$ ${producto.precio}
    `);
return (verProdFiltrados);
};







//AGREGAR PRODUCTOS AL CARRITO
function agregarProductosAlCarrito(array,id) {

let producto = array.find(producto => producto.id === id);

let productoEnCarrito = CARRITO.find(producto => producto.id === id);


if (productoEnCarrito) {

    productoEnCarrito.cantidad++;
    console.log(CARRITO);

} else { 

    producto.cantidad = 1;
    CARRITO.push(producto);
    console.log(CARRITO);
}

}


// ELIMINAR PRODUCTOS DEL CARRITO
function eliminarProductoCarrito() {

let id = Number(prompt("Ingrese el id del producto que desea eliminar"));

let productoEnCarrito = CARRITO.find(producto => producto.id === id); 


if (productoEnCarrito) {

    if (productoEnCarrito.cantidad > 1) { 

         productoEnCarrito.cantidad--;
         console.log(CARRITO);

    } else {

         CARRITO.splice(CARRITO.indexOf(productoEnCarrito), 1);
         
         alert("eliminado con exito")

         console.log(CARRITO);
    }


} else {

    alert("El producto no existe en el carrito")
}
}






// SUMAR TOTAL (precio) DEL CARRITO 
function sumarTotal() {

let total = 0;

CARRITO.forEach(producto => {

    total += producto.cantidad * producto.precio;
})

return total;
}