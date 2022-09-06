function calc (symbol, n1, n2) {
    if (symbol == '+') {
        return n1 + n2
    }
    else if (symbol == '-') {
        return n1 -n2
    } 
    else  {
        console.log(`el simbolo ${symbol} no existe`)
    }
    
}

console.log(`suma de 3 y 4 = ${calc("+", 3, 4)}`)
console.log(`resta de 3 y 4 = ${calc("-", 3, 4)}`)