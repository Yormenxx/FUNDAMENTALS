
function sumar(a,b,...c){
    let resultado= a+b

    c.forEach(function(n){
        resultado += n
    })

    return resultado
}

console.log(sumar(1,2))

console.log(sumar(1,2,3,4))

console.log(sumar(1,2,3))



