


function pintarArbolDeNavidad(altura) {

    if(altura < 1 || altura > 100 || !Number.isInteger(altura)){
        console.log(`la altura debe comprender entre 1 y 100`)
        return;
    }
    const anchoBase = 2 * altura - 1

    for (let i = 0; i < altura; i++) {
        let asteriscos = '*'.repeat(2 * i + 1);
        let espacios = '_'.repeat((anchoBase - asteriscos.length) / 2);
        console.log(espacios + asteriscos + espacios);
    }

    let espaciosTronco = '_'.repeat(Math.floor((anchoBase - 1) / 2)); 
    console.log(espaciosTronco + "#" + espaciosTronco);
    console.log(espaciosTronco + "#" + espaciosTronco);

}


pintarArbolDeNavidad(5);
console.log("\nOtro árbol:\n")
pintarArbolDeNavidad(3);
console.log("\nOtro árbol:\n")
pintarArbolDeNavidad(1);