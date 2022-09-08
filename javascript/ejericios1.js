class Car {
    color
    max_speed
    speed
    constructor(max_speed=100, color='WHITE') {
        this.max_speed = max_speed
        this.color = color
        this.speed = 0
    }
    speedUP(speed) {
        if ((this.speed + speed) < this.max_speed) {
            this.speed += speed
        } else {
            this.speed = this.max_speed
        } 
    }
    speedDown(speed){
        if ((this.speed-speed)>=0) {
            this.speed -= speed // this.speed = this.speed - speed
        } else {
            this.speed = 0
        }
    }
    paint(color) {
        this.color = color
    }
}

const car = new Car()
console.log(car.speed)
console.log(car.color)
console.log(car.max_speed)

console.log("-----------")

const car1 = new Car(100, 'BLACK')
car1.speedUP(20)
car1.speedUP(10)
car1.speedDown(5)
car1.speedUP(12)
car1.speedDown(50)
console.log(car1.speed)
console.log(car1.color)
console.log(car1.max_speed)


// class Car {
//     color 
//     max_speed
//     speed

//     constructor (max_speed=100, color='WHITE') {
//         this.speed = 0
//         this.max_speed = max_speed
//         this.color = color
//     }

//     speedUp(speed) {
//         if ((speed+this.speed) > this.max_speed) {
//             console.log("no puede acelerar tanto")
//         } else {
//             this.speed += speed
//         }
//     }

//     speedDown(speed) {
//         if ((speed+this.speed) < 0) {
//             this.speed = 0
//         } else {
//             this.speed -= speed
//         }
//     }

//     paint(color) {
//         this.color = color
//     }
// }

// const c1 = new Car()
