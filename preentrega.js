// let edadUsuario= prompt("Ingrese su edad");
// if  (edadUsuario >= 18){
//         alert("Puedes ingresar")
// }else{
//         alert("No puedes ingresar")
// }

class Producto {
constructor (id, nombre, tamanio, precio) {
    this.id = id;
    this.nombre = nombre.toUpperCase();
    this.tamanio = tamanio;
    this.precio = parseFloat(precio);

    }
sumaIva() {
    this.precio = this.precio * 1.21;
    }
}

// let eleccionuser = prompt("Ingresa el ID del producto");
//     alert("El producto seleccionado $(this.id) sale $(this.precio");

const producto0 = new Producto(0, "aros dobles", 10, 620);
const producto1 = new Producto(1,"aro flecha", 10, 620);
const producto2 = new Producto(2, "expansores", 10, 540);
const producto3 = new Producto(3, "ombligo", 7, 620);
const producto4 = new Producto(4, "expansores falsos", 12, 420);

const misProductos = [producto0, producto1, producto2, producto3, producto4]

let opcionUser =  4
for (const producto of misProductos)
producto.sumaIva();
console.log(misProductos);

const productoElegido = misProductos.find(elemento => elemento.id === opcionUser);
console.log(productoElegido);

let carrito = document.getElementById("carro");
console.log(carro.innerHTML);
carro.style.background="green";

let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
console.log("Respuesta evento");
}

localStorage.setItem("usuario","David Perez");

let usuarioEnSesion = localStorage.getItem("usuario");
console.log(usuarioEnSesion);

const objetoAJson = JSON.stringify(misProductos)
console.log(objetoAJson);
localStorage.setItem("misProductos",objetoAJson);



// let aros=prompt("Selecciona el producto que quieres comprar) ");
// while(aros != "salir"){
//     switch(aros){
//         case "aros dobles":
//         case "aro flecha":
//             alert("Precio por unidad $620");
//             break;
//         case "Expansores 10mm":
//         case "Ombligo":
//             alert("Precio por unidad $540");
//             break;
//         case "Expansores falsos 12mm":
//             alert("Precio por unidad $420");
//             break;
//         case "Expansor 8mm":
//         case "Expansor 12mm":
//         case "Expansor falso 8mm":
//         case "Bull Colores":
//             alert("Precio por par");
//             break;
//             default:
//                 alert("Producto sin stock");
//     }
//     aros=prompt("Ingresa el producto y te dire el precio por unidad/par: (salir para finalizar) ");
// }

