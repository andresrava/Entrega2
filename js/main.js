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

const articulos = [zapatos, camisa, pantalon, campera, mochila];
let catalogo = "Catálogo: \n";
articulos.forEach(agrego);
const carrito = [];
let cuenta = 0;

// Inicio
compra = confirm("¿Le muestro el catálogo?");
if (!compra) {
    // Si no quiere ver el catálogo termina el programa
    alert("Gracias por su visita!")
} else {
    // Si quiere ver el catálogo se lo muestro y le pido que ingrese el artículo
    while (true) {
        elije = prompt(catalogo + " \n Agregue un artículo al carrito ");
        if (!(isNaN(elije) || (elije>articulos.length) || (elije<=0))) // Valido la opción
        {
            // Agrego el artículo al carrito
            carrito.push(parseInt(elije));
            //Actualizo la cuenta
            cuenta = cuenta + articulos[elije-1].precio;
            //Consulto por más artículos
            let sigue = confirm("Hasta ahora su compra tiene un importe de: $" + cuenta + "\n " + "¿quiere agregar otro artículo?");
            if (!sigue) {
                break;
            }
        } else {
            alert("Por favor ingresa un artículo válido");    
        }
    }
    let lista = "Su compra: \n";
    for (let i=0; i<carrito.length; i++ ) {
        lista = lista + articulos[parseInt(carrito[i])-1].nombre + ": $" + articulos[parseInt(carrito[i])-1].precio + "\n"
    }
    alert(lista + "El total es de: $" + cuenta);
    //Comienza el proceso de pago
        continua = confirm("¿Pagas contado?");
        if (continua) {
            // Si paga contado se termina el programa
            alert("Muchas gracias por tu compra");
        }
        else {
            //Si no paga contado la pregunto en cuántas cuotas
            while (true)   {
                let cuotas = prompt("¿Cuántas cuotas mensuales? (la tasa anual es de 18%)");
                if (isNaN(cuotas)) {
                    //Valido
                    alert("Por favor, ingrese solo números!")
                }
                else {
                    //Calculo las cuotas
                    cuotas = parseInt(cuotas);
                    let cuota = calculaCuota(cuenta, cuotas) 
                    //Informo           
                    alert("Tu cuota será: " + cuota);
                    break
                }
            } 
            
        }
}    
