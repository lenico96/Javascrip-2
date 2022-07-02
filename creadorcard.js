const mostrarProductos = () => {
    const cards = document.getElementById("producto-contenedor");

    productos.forEach( producto => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<div class="card-image">
                            <img class="card-image" src=${producto.img}></div>
                            <p class="card-title">${producto.nombre}</p>
                            <p class="card-title precioProducto">Precio:${producto.precio}</p>
                            <button id="agregar${producto.id}">Agregar <i class="fas fa-shopping-cart"></i><button>
                            
                        </div>
                        `
        cards.appendChild(div);
    });
};

mostrarProductos();