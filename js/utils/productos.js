let productos = [
    {
        nombre: "Laptop",
        precio: 100,
        descripcion: "Esto es un producto 1",
        imagen: "https://uneg.edu.mx/wp-content/uploads/2024/09/producto-en-mercadotecnia.jpg"
    },
    {
        nombre: "Auriculares",
        precio: 40,
        descripcion: "Esto es un producto 2",
        imagen: "https://uneg.edu.mx/wp-content/uploads/2024/09/producto-en-mercadotecnia.jpg"
    },
    {
        nombre: "Radio",
        precio: 500,
        descripcion: "Esto es un producto 3",
        imagen: "https://uneg.edu.mx/wp-content/uploads/2024/09/producto-en-mercadotecnia.jpg"
    },
];

let contenedorproductos = document.getElementById("producto");

productos.forEach(prod => {
    contenedorproductos.innerHTML += `
    <div class="col-md-4 mb-3">
        <div class="card h-100">
            <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">${prod.descripcion}</p>
                <p class="fw-bold">$${prod.precio}</p>
                <button class="btn btn-primary">Comprar</button>
            </div>
        </div>
    </div>
    `;
});