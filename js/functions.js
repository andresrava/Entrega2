function agrego(arti) {
    catalogo = catalogo + " -" + arti.id + "- " + arti.nombre + ": $" + arti.precio + " \n";
}

function calculaCuota (monto, cuotas) {
    let cuota = monto * 0.015 / (1-(1+0.015) ** (-cuotas));
    return cuota.toFixed(1);
}
