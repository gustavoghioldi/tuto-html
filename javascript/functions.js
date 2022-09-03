// 1 + 34

function plus (n1=0, n2=0) {
    const rta = (n1+n2)
    return rta
}

function saludo () {
    return "hola"
}

function print_array(arr) {
    for (const a of arr) {
        console.log(a)
    }
}

console.log(plus(90, 33))
print_array([1, 2, 3, 4])
console.log(plus())


const getJSON = (myName)=> { // arrow function
    return {
        name: myName
    }
}

console.log(getJSON("Gustavo"))
console.log(getJSON("Gus").name)

const hi = () => console.log("hola")
hi()