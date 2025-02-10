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

//Optional properties , just add; ?

type User={
    name?:string,
    surname?:string,
    age?:number
}

const person1:User = {
    name:"juan",
    surname:"perez"
}

const person2:User ={
    name:"Raul",
    surname:"perez",
    age:22
}

//Readonly nos permite que la variable o constante sean inmutables

type User={
    name?:string,
    surname?:string,
    age?:number,
    readonly location?:string
}

const person1:User = {
    name:"juan",
    surname:"perez",
    location:"colombia"
}

const person2:User ={
    name:"Raul",
    surname:"perez",
    age:22
}

person1.location="puerto rico";

