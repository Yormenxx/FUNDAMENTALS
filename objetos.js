const persona = {
    nombre: "Ana",
    apellido:"perez",
    edad:12,
    telefono:"234324",
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    },
};
persona.saludar();

for(clave in persona){
    console.log(`la clave ${clave} valor ${persona[clave]}`)
}

console.log(Object.keys(persona))
console.log(Object.values(persona))


let i = 1;

console.log(i++)
console.log(i)
console.log(++i)