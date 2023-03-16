// TIENDA DE VIDEOJUEGOS

// ============================= OBJETOS ============================

// Objeto Videojuego

function Videojuego(titulo, plataforma, clasificacion, genero, precio){
    this.titulo = titulo;
    this.plataforma = plataforma;
    this.clasificacion = clasificacion;
    this.genero = genero;
    this.precio = precio;
    // metodo
    this.mostrarVideojuego = function(){
        let mostrar = '=================\n'+this.titulo + '\nPlataforma: ' +this.plataforma+ ' Clasificación: ' +this.clasificacion+ ' Genero: ' +this.genero+ '\n$...' +this.precio+ '\n=================';
        return mostrar;
    }
}

// ACCIÓN
const accion1= new Videojuego('MAD MAX','PS4','Adultos (Mayor de 18 años)','Accion',500);
const accion2= new Videojuego('GOD OF WAR RAGNAROK','PS4','Adultos (Mayor de 18 años)','Accion',1399.99);

// ROL
const rol1= new Videojuego('HOGWARTS LEGACY','PS5','B15 (Mayor de 15 años)','Rol',1709.71);
const rol2= new Videojuego('ELDEN RING','PS5','Adultos (Mayor de 18 años)','Rol',1399.99);

// TERROR
const terror1= new Videojuego('DEAD SPACE REMAKE','PS5','Adultos (Mayor de 18 años)','Terror',1399.99);
const terror2= new Videojuego('THE CALLISTO PROTOCOL','PS5','Adultos (Mayor de 18 años)','Terror',1549.99);


// ============================= METODOS ============================

// ACUMULADOR

let acumuladorTotal = 0;

function sumaAcumulador(precioVideojuego) {
    precioVideojuego = parseFloat(precioVideojuego);
    acumuladorTotal = acumuladorTotal + precioVideojuego;
    return acumuladorTotal;
}

// DESCUENTOS

let totalDescuento = 0;

function descuento(descuento){
    totalDescuento = descuento - (descuento * 0.15);
    return totalDescuento;
}

// ============================= CICLO DE COMPRA ============================

let mensajeTienda = prompt('Desea comprar un producto? (s-si / n-no)')
while(mensajeTienda == 's'){

    let producto = prompt('TECLEA EL NÚMERO DE LA OPCION DEL PRODUCTO PARA AGREGAR AL CARRITO\n'+
    '=================\n'+
    'Opcion 1 \n'+accion1.mostrarVideojuego() + '\n'+
    'Opcion 2 \n'+accion2.mostrarVideojuego() + '\n'+
    'Opcion 3 \n'+rol1.mostrarVideojuego() + '\n'+
    'Opcion 4 \n'+rol2.mostrarVideojuego() + '\n'+
    'Opcion 5 \n'+terror1.mostrarVideojuego() + '\n'+
    'Opcion 6 \n'+terror2.mostrarVideojuego() );


    if(producto == '1' ){
        alert(accion1.titulo + '\n$...' + accion1.precio+ '\nAGREGADO AL CARRO!');
        sumaAcumulador(accion1.precio);
    }
    else if(producto == '2' ){
        alert(accion2.titulo + '\n$...' + accion2.precio+ '\nAGREGADO AL CARRO!');
        sumaAcumulador(accion2.precio);
    }
    else if(producto == '3' ){
        alert(rol1.titulo + '\n$...' + rol1.precio+ '\nAGREGADO AL CARRO!');
        sumaAcumulador(rol1.precio);
    }
    else if(producto == '4' ){
        alert(rol2.titulo + '\n$...' + rol2.precio+ '\nAGREGADO AL CARRO!');
        sumaAcumulador(rol2.precio);
    }
    else if(producto == '5' ){
        alert(terror1.titulo + '\n$...' + terror1.precio+ '\nAGREGADO AL CARRO!');
        sumaAcumulador(terror1.precio);
    }
    else if(producto == '6' ){
        alert(terror2.titulo + '\n$...' + terror2.precio+ '\nAGREGADO AL CARRO!');
        sumaAcumulador(terror2.precio);
    }
    else{
        alert('Codigo de producto inexistente');
    }
    mensajeTienda = prompt('Desea comprar otro producto? (s-si / n-no)')
}

alert('Su compra total es: $ ' +acumuladorTotal);

if(acumuladorTotal > 4000){
    alert('Usted tiene un descuento del 15%');
    descuento(acumuladorTotal);
    alert('Su nuevo total es $ '+ totalDescuento);
    alert('Gracias por su compra');
}else{
    alert('Gracias por su compra');
}
