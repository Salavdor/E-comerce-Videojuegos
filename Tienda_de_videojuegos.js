// TIENDA DE VIDEOJUEGOS

// ============================= OBJETOS ============================

//array de objetos literales
const Videojuegos = [{ id: 1,  titulo: "MAD MAX", plataforma:'PS4', clasificacion:'Adultos (Mayor de 18 años)', genero:'Accion',precio: 490, img: 'https://cdn.gameplanet.com/wp-content/uploads/2022/08/27023704/mad-max_5-1-510x630.jpg'},
                  {  id: 2,  titulo: "GOD OF WAR RAGNAROK", plataforma:'PS4', clasificacion:'Adultos (Mayor de 18 años)', genero:'Accion',precio: 1200.99,img: 'https://cdn.gameplanet.com/wp-content/uploads/2022/11/10112031/711719548171-ragnarok5ps5-2-510x651.jpg' },
                  {  id: 3,  titulo: "HOGWARTS LEGACY", plataforma:'PS5', clasificacion:'B15 (Mayor de 15 años)', genero:'Rol',precio: 709.71, img: 'https://cdn.gameplanet.com/wp-content/uploads/2023/02/09192657/883929730797-portada-hogwarts-legacy-ps5-510x630.jpg' },
                  {  id: 4,  titulo: "ELDEN RING", plataforma:'PS5', clasificacion:'Adultos (Mayor de 18 años)', genero:'Rol',precio: 1399.99, img: 'https://cdn.gameplanet.com/wp-content/uploads/2022/09/05000411/elden_ps5_1_1-510x630.jpg' },
                  {  id: 5,  titulo: "DEAD SPACE REMAKE", plataforma:'PS5', clasificacion:'Adultos (Mayor de 18 años)', genero:'Terror',precio: 999.99, img: 'https://cdn.gameplanet.com/wp-content/uploads/2023/01/27120802/014633381085-dead-space-ps5-1-510x630.jpg' },
                  {  id: 6,  titulo: "THE CALLISTO PROTOCOL", plataforma:'PS5', clasificacion:'Adultos (Mayor de 18 años)', genero:'Terror',precio: 1549.99, img: 'https://cdn.gameplanet.com/wp-content/uploads/2023/01/06152446/811949034458-The-Callisto-Protocol-PS5-510x630.jpg' }
                  ];

//Mostrar videojuegos en cartas

const loadObjects = (Videojuegos) =>
{
    // Revisa el estado del contenedor de cartas para borrar los resultados si es necesario
    let container = document.querySelector('.contenedorProductos');

    let cardsContainer = document.querySelector("#cardsContainer");
    
    if(cardsContainer)
    {
        cardsContainer.parentNode.removeChild(cardsContainer);
    }

    // construye las cartas con los productos nuevos 
    let div = document.createElement('div');
    div.setAttribute('id','cardsContainer');
    div.classList.add('row');

    for (const producto of Videojuegos)
    {
        div.innerHTML += `
        <div class="card col-6 col-md-4 col-lg-3">
        <img src="${producto.img}" class="card-img-top" alt="${producto.titulo}">
        <div class="card-body">
            <h5 class="card-title">${producto.titulo}</h5>
            <p class="card-text">${producto.plataforma}</p>
            <p class="card-text">${producto.genero}</p>
            <p class="card-text">${producto.clasificacion}</p>
            <p class="card-text">$ ${producto.precio}</p>
            <button id='${producto.id}' href="#" class="btn btn-primary comprar" value="${producto.precio}">Comprar</button>
        </div>
        </div>
        `;
    }
    container.appendChild(div);

    Videojuegos.forEach((btn)=>{
        document.getElementById(`${btn.id}`).addEventListener('click',()=>{
            agregaCarrito(btn);
    });
    });
}

loadObjects(Videojuegos);

let precioBajo = document.querySelector('#precioBajo');
let precioMedio = document.querySelector('#precioMedio');
let presioAlto = document.querySelector('#presioAlto');
let Accion = document.querySelector('#Accion');
let Rol = document.querySelector('#Rol');
let Terror = document.querySelector('#Terror');
let todo = document.querySelector('#todo');

precioBajo.addEventListener('click',()=>{
    let filtroVideojuego = Videojuegos.filter(element => element.precio < 500);
    loadObjects(filtroVideojuego);
});

precioMedio.addEventListener('click',()=>{
    let filtroVideojuego = Videojuegos.filter(element => element.precio >= 500 && element.precio < 1000);
    loadObjects(filtroVideojuego);
});

presioAlto.addEventListener('click',()=>{
    let filtroVideojuego = Videojuegos.filter(element => element.precio > 1000);
    loadObjects(filtroVideojuego);
});

Accion.addEventListener('click',()=>{
    let filtroVideojuego = Videojuegos.filter(element => element.genero == 'Accion' );
    loadObjects(filtroVideojuego);
});

Rol.addEventListener('click',()=>{
    let filtroVideojuego = Videojuegos.filter(element => element.genero == 'Rol' );
    loadObjects(filtroVideojuego);
});

Terror.addEventListener('click',()=>{
    let filtroVideojuego = Videojuegos.filter(element => element.genero == 'Terror' );
    loadObjects(filtroVideojuego);
});

todo.addEventListener('click',()=>{
    loadObjects(Videojuegos);
});


// Carrito

const sumaCompras = [];

console.table(Videojuegos);

let contenedor = document.getElementById("misprods");

function agregaCarrito(videojuegoAgregado){
    sumaCompras.push(videojuegoAgregado);
    alert(`Agregaste ${videojuegoAgregado.titulo} al carrito!`);
    
    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${videojuegoAgregado.id}</td>
            <td>${videojuegoAgregado.titulo}</td>
            <td>${videojuegoAgregado.plataforma}</td>
            <td>${videojuegoAgregado.precio}</td>
        </tr>
    `;
  
    let totalCompra = sumaCompras.reduce((acumulador,videojuego)=>acumulador+videojuego.precio,0);
    document.getElementById('total').innerText = 'Total: $'+totalCompra;
}
