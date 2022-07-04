
const contenedorProductos = document.getElementById("producto-contenedor");
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')


//array carrito
let carrito = []
//cards//
    productos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =
                            `<div class="card-image">
                            <img class="card-image" src=${producto.img}></div>
                            <p class="card-title">${producto.nombre}</p>
                            <p class="card-title precioProducto">Precio:${producto.precio}</p>
                            <button id="agregar${producto.id}" class="boton-agregar">Agregar al carro <i class="fas fa-shopping-cart"></i><button>
                            
                        </div>
                        `
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`agregar${producto.id}`)

        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
            
        })
    });

//funcion agregar carro
const agregarAlCarrito = (prodId) => {
    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito() //llamado de la funcion, se agregan los prod al modal
    console.log(carrito)
    
};
//funcion actualizar
const actualizarCarrito = () => {

    contenedorCarrito.innerHTML = ""


    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

    })
    contadorCarrito.innerText = carrito.length    //le agrego el contador con un innertext
    
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0) //suma del total
    
};

//funcion eliminar carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito() //llamo a la funcion ya que en la funcion anterior en el button cree un evento onclick con el nombre de la funcion
}

//boton vaciar
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})


