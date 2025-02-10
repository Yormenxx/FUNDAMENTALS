
//RETORNA FALSE SI NO ES PALINDROMA, TRUE SI LO ES.


const palindrome = (str) =>{
    let reverseWord = str.split("")
    .reverse()
    .join("")

    return reverseWord ? str===reverseWord: false;
}

console.log(palindrome("gato"))
console.log(palindrome("abba"))
console.log(palindrome("ana"))



