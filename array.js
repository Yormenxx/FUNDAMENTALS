

const a = [1,2,34,54]
console.log(a)
console.log(a[2])

const numeros = [1, 2, 3, 4, 5];
const frutas= ["manzana", "pera", "plátano"];
const mezclado = [1, "dos", true, { clave: "valor" }];

const numeros2 = new Array(1, 32, 33, 34, 35);

console.log(numeros)
console.log(numeros2)

frutas.push("uva");
frutas.unshift("mango")

console.log(frutas)
frutas.shift()
console.log(frutas)
console.log(frutas.indexOf("uva")); 
console.log(frutas.includes("mango"))
const numeros3 = [3,5,3,3,146,43,1,2]
console.log(numeros3.sort())