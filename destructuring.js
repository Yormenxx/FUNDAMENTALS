// es la manera de como dinamicamente podemos guardar valores de un objeto o array a constantes o variables
//independientes
let numeros  =[1,2,3]


let uno = numeros[0],
dos = numeros[1],
tres=numeros[2]

console.log(uno,dos,tres)

const [ one,two,three ] = numeros

console.log(one,two,three)

const persona = {
    nombre: "Ana",
    apellido:"perez",
    edad:12
   
};
//las variables , es recomendable llamarlas igual que los keys de los objetos

let{nombre,apellido,edad} = persona
console.log(nombre,apellido,edad)