"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌


export default function isValid(letter) {
    let contador = 0;
    let dentroDeParentesis = false;
  
    for (let i = 0; i < letter.length; i++) {
      const char = letter[i];
  
      if (char === "(") {
        contador++;
        dentroDeParentesis = true; 
      } else if (char === ")") {
        contador--;
        if (contador < 0) {
          return false; 
        }
        if (dentroDeParentesis && letter[i-1] === '(') {
          return false; 
        }
        dentroDeParentesis = false; 
      } else if (dentroDeParentesis && (char === "{" || char === "[")) {
        return false; 
      }
    }
  
    return contador === 0;


   }