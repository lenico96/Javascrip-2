const contenedorProductos2 = document.getElementById("producto-contenedor2");

const Destacados = 
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

Destacados.forEach((destacado) => {
    const div = document.createElement("div");       //primero inyecto el html al doom
    div.classList.add("card");
    div.innerHTML =
                        `<div class="card-image">
                        <img class="card-image" src=${destacado.img}></div>
                        <p class="card-title">${destacado.nombre}</p>
                        <p class="card-title precioProducto">Precio:${destacado.precio}</p>
                        <button id="agregar${destacado.id}" class="boton-agregar">Agregar al carro <i class="fas fa-shopping-cart"></i><button>
                        
                    </div>
                    `
    contenedorProductos2.appendChild(div);

    const boton = document.getElementById(`agregar${destacado.id}`)


    boton.addEventListener('click', () => {
        agregarAlCarrito(destacado.id)     //le agrege el event al boton y ejecuto la funcion agregarAlCarrito
        
    })
});
