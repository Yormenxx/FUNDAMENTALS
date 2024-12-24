// Son valores únicos e inmutables, diseñados para crear propiedades de objetos únicas que no colisionarán con otras propiedades. Esto los hace ideales para crear propiedades privadas o para nombrar eventos de forma única.














let id = Symbol("id")
let id2 = Symbol("id2")

console.log(id)
console.log(id2)
console.log(id===id2)
console.log(typeof id, typeof id2)

const NOMBRE = Symbol()

const persona  ={
    [NOMBRE]:  "juan"
}
console.log(persona)

persona.NOMBRE="juanma"
console.log(persona)
console.log(persona.NOMBRE)//se agrega una nueva propiedad NOMBRE
console.log(persona[NOMBRE])//con parentesis podemos acceder a los datos del symbol


