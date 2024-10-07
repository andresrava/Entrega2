function agrego(arti) {
    catalogo = catalogo + " -" + arti.id + "- " + arti.nombre + " \n"
}

function calculaCuota (monto, cuotas) {
    let cuota = total * 1.5 / (1-(1+1.5) ** (-cuotas));
    return cuota.toFixed(1);
}