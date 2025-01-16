const carta = 'bici coche balón _playstation bici coche peluche'

export default function listGifts(letter) {
    
    let letters = letter.trim().split(" ")
   
    const letterWithoutUnderscore =  letters.filter(element => !element.includes("_"))

    const finalLetter =  letterWithoutUnderscore.reduce((conteo,elemento)=>{
        conteo[elemento] = (conteo[elemento] || 0 ) +1
       return conteo
    },{})

    return finalLetter


   }

const regalos = listGifts(carta)

console.log(regalos)