let nombre = "juan",
edad =12

//tomar el valor de la variable que tiene el mismo nombre
const perro ={
    nombre:nombre,
    edad:edad,
    ladrar(){
        console.log("guau guau")
    }
}


console.log(perro)

//con los objetos literales nos evitamos escribir más codigo
const dog={
    nombre,
    edad
}

console.log(dog)