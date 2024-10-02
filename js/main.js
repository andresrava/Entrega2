function Articulo(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }






const zapatos = new Articulo(1, "zapatos de temporada", 2000);
const camisa = new Articulo(2, "camisa de vestir", 1500);
const pantalon = new Articulo(3, "pantalón jean", 1800);
const campera = new Articulo(4, "Parca de salón", 4000);
const mochila = new Articulo(5, "Mochila aventurera", 3000);

console.log(zapatos)
const articulos = [zapatos, camisa, pantalon, campera, mochila];
console.log(articulos);
let catalogo = "Catálogo: \n";
articulos.forEach(agrego);
function agrego(arti) {
    catalogo = catalogo + " -" + arti.id + "- " + arti.nombre + " \n"
}

compra = confirm("¿Le muestro el catálogo?");
if (!compra) {
    alert("Gracias por su visita!")
} else {
    elije = confirm(catalogo + " \n Retenga el código del artículo ");
}
//     if (elije) {

//     }
//     while (true) {
//     entrada = prompt("Ingrese un importe: (ESC para salir)");
//     if ((entrada == "") || (entrada == null) || (entrada == "esc")) {
//         break;
//     }    
//     if (isNaN(entrada)) {
//         alert("Por favor, ingrese solo números!")
//     }
//     else{
//         entrada = parseInt(entrada);
//         total =total + entrada;
//         continua = confirm("Hasta el momento tu compra es de : " + total + "  ¿Quieres ingresar otro importe?");
//         if (!continua)  {
//             break
//         }
//     }
// }


// alert("El total es de: " + total);
// continua = confirm("¿Pagas contado?");
// if (continua) {
//     alert("Muchas gracias por tu compra");
// }
// else {
//     while (true)   {
//         cuotas = prompt("¿Cuántas cutas mensuales? (la tasa anual es de 18%)");
//         if (isNaN(cuotas)) {
//             alert("Por favor, ingrese solo números!")
//         }
//         else {
//             cuotas = parseInt(cuotas);
//             let cuota = calculaCuota(total, cuotas)            
//             alert("Tu cuota será: " + cuota);
//             break
//         }
//     } 
        
// }