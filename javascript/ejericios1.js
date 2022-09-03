class Car {
    color 
    max_speed
    speed

    constructor (max_speed=100, color='WHITE') {
        this.speed = 0
        this.max_speed = max_speed
        this.color = color
    }

    speedUp(speed) {
        if ((speed+this.speed) > this.max_speed) {
            console.log("no puede acelerar tanto")
        } else {
            this.speed += speed
        }
    }

    speedDown(speed) {
        if ((speed+this.speed) < 0) {
            this.speed = 0
        } else {
            this.speed -= speed
        }
    }

    paint(color) {
        this.color = color
    }
}

const c1 = new Car()
