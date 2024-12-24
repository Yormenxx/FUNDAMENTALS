
//son ciudadanos de primera clase, pueden devolver un valor y pasarse como argumento 
function saludar(){
    console.log("hola mundo")
    console.log("1")
    console.log("2")
    console.log("3")
}

saludar()

function devolviendoValor(){
    return "hola otra vez"
}


let valorDevuelto = devolviendoValor()
console.log(valorDevuelto)

function saludo(nombre,edad){
    console.log(`hola soy ${nombre} y tengo ${edad}`)
}

saludo("juan",3)
//funcion declarada
funcionDeclarada()
function funcionDeclarada(){
    console.log("Esta funcion se puede invocar incluso antes de su creación")
}
funcionDeclarada()

const funcionExpresada=function(){
    console.log("Esta funcion no se puede llamar antes de su creacion")
}

funcionExpresada()

