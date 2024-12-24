

let nombre  ="juan";
let apellido ="perez"
let saludo = new String ("hola mundo")

console.log(nombre, apellido, saludo)
console.log(nombre.length, 
    apellido.length,
    saludo.length,
    nombre.toLocaleLowerCase(),
    apellido.toLocaleUpperCase()
)

let mensaje = saludo.concat(" ",nombre , " como estas? ")
//eliminar espacios al final de la cadena
console.log("hola   ".trim())
//repetir la cadena
console.log("hola".repeat(3))
//Devuelve el indice de la primera coincidencia
console.log(saludo.indexOf("mundo"))
//devuelve true si aparece una subcadena
console.log(saludo.includes("mundo"))
//Extrae elementos de una cadena con inicio y fin
console.log(saludo.slice(0,4))
console.log(saludo.split(" "))