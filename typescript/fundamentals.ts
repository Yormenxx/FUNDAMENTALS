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


// la intersección de tipos te permite combinar múltiples tipos en uno solo. 
// El nuevo tipo resultante posee todas las propiedades de los tipos que lo componen.
//Se usa & para unirlos

type Person = {
    name?:string,
    age?:number
}

type Employee ={
    id?:number,
    title?:string
}

//hacemos las interseccion de tipos

type PersonAndEmloyee = Person & Employee;

const person1:PersonAndEmloyee={
    name:"juan",
    age:22,
    id:123,
    title:"manager"
}


 //las uniones te permiten crear un nuevo tipo que puede ser uno u otro de los tipos existentes. 
 //Esto es útil cuando una variable o propiedad 
 //puede tener diferentes tipos de valores. la union se hace con || 

let num1: number | string ;

type resultado = number | string;

function getResult(valor:boolean):resultado{
    if(valor){
        return 10;
    }else{
        return "Error"
    }
}


let resul1 = getResult(false)
console.log(resul1)






//Los tipos literales nos ayudan a fijas un valor que se de tipo e igual valor

let saludo :"hola" = "hola"
console.log(saludo)


let color: "red"|"blue"|"orange"
color = "red"
console.log(color)








