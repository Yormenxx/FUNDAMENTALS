type Person={
    name :string
}

const persona :Person = {
    name: "juan",
}

console.log(persona.name);
//string
let surname : string;
let person2 : string = "ana";
//number
let favNumber : number;
let favNumber2 : number  = 2;
//boolean
let isHard : boolean = false;


//Inferencia de tipos
let tech = "typescript";
let favNumber3  =6;
let isHard2 = true;

console.log(typeof(tech));
console.log(typeof(favNumber3));
console.log(typeof(isHard2));

//Objetos

const persona : {nombre:string; apellido:string; edad:number} = {
    nombre:"juan",
    apellido:"perez",
    edad:12
}
console.log(persona.nombre + persona.apellido + persona.edad)



function printUser():{nombre:string; apellido:string;}{
    return {
        nombre:"juan",
        apellido:"perez"
    }
}

const res = printUser();

console.log(res)


//type aliases

type Person = {
    nombre: string,
    apellido : string
}

function printUser(person:Person):void{
    console.log(`Tu nombre es: ${person.nombre} ${person.apellido}`)
}

const myPerson:Person = {
    nombre:"juan",
    apellido:"perez"
}

printUser(myPerson)


