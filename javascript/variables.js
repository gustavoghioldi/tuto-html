/* esta es la forma vieja */
var hi = "HOla como estas"
console.log(hi)

/* variables */
let hi2 = "Hola !!!"

/* constantes */
const num = 12

console.log(hi2)
console.log(num)

/* primitivos 
 numbers <-- numeros 1, 1.2
 strings <-- cadenas de caracters "a" , "Hola"
 booleans <-- verdaderos o falsos (true or false)
*/
console.log("---------------")
/* JSON */

const user = {
    "name" : "Gustavo",
    "age": 45,
    "id": {
        "number" : 28372837,
        "type": "DNI"
    }
}

console.log(user.name)
console.log(user.age)
console.log(user.id)
console.log(user.id.number)
console.log("---------------")

/* Arrays
*/
let arr = [1, 2, 1233, "asdqdsa",  4, {"num": 12}]
console.log(arr)
console.log(arr.length) // largo
arr.push("HOLA")
console.log(arr)
console.log(arr[2])