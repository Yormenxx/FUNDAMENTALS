

const reverseNumber = num =>{
    let numToString = num.toString()
    let reverseString = numToString.split("").reverse().join("")
    let result =  parseInt(reverseString) * Math.sign(num)

    return result

}

console.log(reverseNumber(123))
console.log(reverseNumber(122343243))
console.log(reverseNumber(-123))


