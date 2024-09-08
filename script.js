class Car {
    constructor(name,color,topSpeed){
        this.name = name;
        this.color = color;
        this.topSpeed = topSpeed;
        this.currentSpeed = 0;
    }

    drive(){
        console.log('just drove 2 miles');
        this.currentSpeed += 10;
        console.log(`driving speed at ${this.currentSpeed} miles/hr`)
    }

    zeroToSixty(){
        setTimeout(() => {
            console.log('this is very fast acceleration');
            this.currentSpeed = 60;
            console.log(this.currentSpeed);
        }, 0);
    }

    brake(){
        console.log('breaking....');
        this.currentSpeed -= 10;
    }
}

const ferrari = new Car('ferrari','red',250);


ferrari.zeroToSixty();
console.log(ferrari.currentSpeed);