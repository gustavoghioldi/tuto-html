class Person {
    name
    age
    tall
    
    constructor (name, age) {
        console.log("se ejecuto el constructor")
        this.name = name
        this.age = age
    }

    hi(lang='ES') {
        if (lang=='ES'){
            console.log(`hola : ${this.name}`)
        } else if (lang=='EN') {
            console.log(`hello : ${this.name}`)
        } else {
            console.log("no se tu idioma")
        }
        
    }

    hello_EN() {
        this.hi('EN')
    }

    static genericHello() {
        console.log("HOLA!!!!")
    }
}

const p1 = new Person("Gustavo", 45) // cuando la instancio se ejecuta el constructor
console.log(p1.name)
console.log(p1.age)