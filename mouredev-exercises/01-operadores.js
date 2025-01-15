/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

// for(let i = 10; i <= 55; i++ ){
//     console.log(i)
// }

// let x = 10;

// while (x <=55 ){
//    console.log(x++)
// }


// console.log(`suma : ${1+1}`)
// console.log(`resta : ${5-4}`)
// console.log(`division: ${10/2}`)
// console.log(`modulo : ${10%2}`)

// console.log(`mayor : ${2>1}`)
// console.log(`menor : ${1<3}`)
// console.log(`igual : ${3==3}`)
// console.log(`diferente : ${2 !=3}`)


for(let i = 10; i<=55; i++){
    if((i%2===0)){
    }if ((i != 16) && (i%3!=0)){
        console.log(i)
    }
}