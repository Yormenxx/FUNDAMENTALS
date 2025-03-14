/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */


let cadena = "Hola mundo";

console.log(cadena);

console.log(cadena.repeat(2));

console.log(cadena.at(0));
console.log(cadena.at(2));
console.log(cadena.at(-1));

console.log(cadena.charAt(0));
console.log(cadena.charAt(1));
console.log(cadena.charAt(2));
console.log(cadena.charAt(3));

console.log(cadena.concat(" a todos"));
console.log(cadena.includes("mundo"));
console.log(cadena.includes("Mundo"));

console.log(cadena.length);

console.log(cadena.padStart(10,"."));
console.log(cadena.padEnd(10,"."));

console.log(cadena.replace("Hola","adios"));

console.log(cadena.slice(1,5));

console.log(cadena.split(" "));

console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

console.log(cadena.trim());


const evaluateWord = (word) =>{





}


function isIsogram(IsogramWord) {

    if (!IsogramWord ) {
        return true; 
    }

    const cleanWord = IsogramWord.toLowerCase().split("")
    

    const contador = {};


    for (letra of cleanWord) {

        if (contador[letra]) {

            contador[letra]++

            if(contador[letra]>1){

                return false
            }

        } else {
            contador[letra]=1
        
        }

    }


    return true
}

function checkTwoIsograms(firstIsogramWord, secondIsogramWord) {

    if(isIsogram(firstIsogramWord) && isIsogram(secondIsogramWord)){
        console.log("Ambas palabras son isogramas")
    }else {
        console.log("No son isogramas")
    }


}


function isAnagram(firstAnagramWord, secondAnagramWord) {

        const cleanFirstWord = firstAnagramWord.toLowerCase().replace(/[^a-z0-9]/g, '').split("").sort().join("");
        const cleanSecondWord = secondAnagramWord.toLowerCase().replace(/[^a-z0-9]/g, '').split("").sort().join("");

        if (cleanFirstWord === cleanSecondWord) {
            console.log("Ambas palabras son anagramas")
        } else {
            console.log("No son anagramas")
        }

    }


function isPalindrome(firstword, secondword) {

        const cleanFirstWord = firstword.toLowerCase().replace(/[^a-z0-9]/g, '')
        const cleanSecondWord = secondword.toLowerCase().replace(/[^a-z0-9]/g, '')

        const newWordFirst = cleanFirstWord.split("").reverse().join("");
        const newWordSecond = cleanSecondWord.split("").reverse().join("");

        if (cleanFirstWord === newWordFirst && cleanSecondWord === newWordSecond) {
            console.log("Ambas palabras son palíndromos")
        } else if (cleanFirstWord === newWordFirst && cleanSecondWord !== newWordSecond) {
            console.log("La primera palabra es palíndromo y la segunda no lo es")
        } else if (cleanFirstWord !== newWordFirst && cleanSecondWord === newWordSecond) {
            console.log("La segunda palabra es palíndromo y la primera no lo es")
        } else {
            console.log("Ninguna de las palabras es palíndromo")
        }
    }


function kindOfWords(firstWord, secondWord) {

    checkTwoIsograms(firstWord, secondWord)
    isAnagram(firstWord, secondWord)
    isPalindrome(firstWord, secondWord)

}

kindOfWords("hola", "aloh")

