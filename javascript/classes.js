class Person {
    name
    age
    tall
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

const p1 = new Person() // creo una nueva instancoa de la clase Person
const p2 = new Person()
const p3 = new Person()

p1.name = "Gustavo"
p1.age = 45
p2.name = "Favio"
p3.name = "Juan"

console.log(p1.name)
p1.hi()
p2.hi('EN')
p3.hi('AR')
p1.hello_EN()
//los metodos estaticos pueden ser utilizados sin instanciar
Person.genericHello()