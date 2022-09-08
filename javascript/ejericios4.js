function multipl3 (n1, n2) {
    if (n1 > n2) {
        throw 'error n1 > n2'
    }
    let acum = 0
    for (i = n1; i<=n2; i++) {
        if (i%3  === 0) {
            acum += i
        }
    }
    return acum
}

try {
    console.log(multipl3(12, 6))
} catch (error) {
    console.log(error)
}




console.log(multipl3(2, 20))
console.log(multipl3(1, 3))
console.log(multipl3(1, 6))
