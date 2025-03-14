/*
 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la 
 *   sucesión de Fibonacci (la función recibe la posición).
 */

/*
LA RECURSIVIDAD ES EL PROCESO EL CUAL UNA FUNCION SE LLAMA	A SI MISMA DIRECTA O INDIRECTAMENTE Y TIENE UNA
PARTE IMPORTANTE LA CUAL ES EL CASO BASE, EL CUAL ES EL QUE DETIENE LA RECURSIVIDAD.


*/

function numberHundred(n){
    if(n>0){ //CASO BASE
        console.log(n)
        numberHundred(n-1);
    }
}
numberHundred(100);



function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}
console.log(factorial(5)); 



function fibonacci(posicion, memo = {}) {
    if (posicion in memo) {
      return memo[posicion];
    }
    if (posicion <= 1) {
      return posicion;
    }
    memo[posicion] = fibonacci(posicion - 1, memo) + fibonacci(posicion - 2, memo);
    return memo[posicion];
  }
  
console.log(fibonacci(6))  