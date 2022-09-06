function multipl3 (n1, n2) {
    let acum = 0
    for (i = n1; i<=n2; i++) {
        if (i%3 === 0) {
            console.log(i)
            acum += i 
        }
    }
    return acum
}

console.log(multipl3(1, 3))
console.log(multipl3(1, 6))