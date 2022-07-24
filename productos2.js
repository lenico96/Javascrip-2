

//ROMPI TODO XDDDDDDD//

const contenedorProductos2 = document.getElementById("producto-contenedor2");

const destacados = 
[
{
    "id": 1,
    "nombre": "Zapatilla nike destacada1",
    "precio": 15000,
    "img": 'essets/img/zapas1.jpg',
    "cantidad": 1
    
},
{
    "id": 2,
    "nombre": "Zapatilla nike destacada2",
    "precio": 14300,
    "img": 'essets/img/zapas2.jpg',
    "cantidad": 1
    
},
{
    "id": 3,
    "nombre": "Zapatilla nike destacada3",
    "precio": 14000,
    "img": 'essets/img/zapas3.jpg',
    "cantidad": 1
    
},
{
    "id": 4,
    "nombre": "Zapatilla nike destacada4",
    "precio": 12000,
    "img": 'essets/img/zapas4.jpg',
    "cantidad": 1
    
    
}
];

destacados.forEach((destacado) => {
    const div = document.createElement("div");       //primero inyecto el html al doom
    div.classList.add("card");
    div.innerHTML =
                        `<div class="card-image">
                        <img class="card-image" src=${destacado.img}></div>
                        <p class="card-title">${destacado.nombre}</p>
                        <p class="card-title precioProducto">Precio:${destacado.precio}</p>
                        <button id="agregarDestacado${destacado.id}" class="boton-agregar">Agregar al carro <i class="fas fa-shopping-cart"></i><button>
                        
                    </div>
                    `
    contenedorProductos2.appendChild(div);

    const boton = document.getElementById(`agregarDestacado${destacado.id}`)


    boton.addEventListener('click', () => {
        agregarDestacados(destacado.id)     //le agrege el event al boton y ejecuto la funcion agregarAlCarrito
        
    })
});

const agregarDestacados = (destaId) => {
    const agreDesta = carrito.find (desta => desta.id === destaId) 

    if (agreDesta){ 
        const destaa = destacados.map (prod => { 
            if (destaId === prod.id){
                desta.cantidad++
            }
        })
    } else { 
        const item = destacados.find((desta) => desta.id === destaId)
       
        carrito.push(item)
    }
    actualizarDestacado() 
    

    
};

const actualizarDestacado = () => {

       //Cada vez que yo llame a actualizarCarrito, lo primero q hago
                                     //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info actualizado

                                                //lo mismo que en el paso 1 creo como se va a ver dentro del modal con sus respectivas
                                                //propiedades y clases que estan en los estilos, le hago un appendchil
    carrito.forEach((desta) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p><span id="nombre">${desta.nombre}</span></p>
        <p>Precio:$<span id="precio">${desta.precio}</span></p>
        <p>Cantidad: <span id="cantidad">${desta.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${desta.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

    })
    contadorCarrito.innerText = carrito.length    //le agrego el contador con un innertext
    
    precioTotal.innerText = destacados.reduce((acc, desta) => acc + desta.cantidad * desta.precio, 0) //suma del total

    guardarCarritoStorage(carrito);
    

    
    
};


//A solucionar: se me suman en el modal los id del otro array de objetos "productos"