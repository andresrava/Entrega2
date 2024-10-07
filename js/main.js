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
let carrito = [];
let cuenta = 0;

compra = confirm("¿Le muestro el catálogo?");
if (!compra) {
    alert("Gracias por su visita!")
} else {
    while (true) {
        elije = prompt(catalogo + " \n Agregue un artículo al carrito ");
        console.log(catalogo.length)
        if (!(isNaN(elije) || (elije>articulos.length) || (elije<0)))
        {
            carrito.push(elije);
            let importe = articulos[elije].precio;
            cuenta =+ articulos[importe];
            let sigue = confirm("Hasta ahora su compra tiene un importe de: " + cuenta + "\n " + "¿quiere agregar otro artículo?");
            if (!sigue) {
                break;
            }
        } else {
            alert("Por favor ingresa un artículo válido");    
        }
    }
    alert("El total es de: " + cuenta);
        continua = confirm("¿Pagas contado?");
        if (continua) {
            alert("Muchas gracias por tu compra");
        }
        else {
            while (true)   {
                let cuotas = prompt("¿Cuántas cuotas mensuales? (la tasa anual es de 18%)");
                if (isNaN(cuotas)) {
                    alert("Por favor, ingrese solo números!")
                }
                else {
                    cuotas = parseInt(cuotas);
                    let cuota = calculaCuota(total, cuotas)            
                    alert("Tu cuota será: " + cuota);
                    break
                }
            } 
            
        }
}    
