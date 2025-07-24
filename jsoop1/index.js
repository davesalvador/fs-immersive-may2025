// Create a car class that has a top speed property and a function that prints out that top speed property.
// Use this class to write a program that creates a car object and prints out its topspeed.
// Using the class that you created in the last task create a location property that starts at 0. Then create a drive() function that increases the location variable by 10 miles. Create a stop() function that prints out you’re final location.




class Car{
    constructor(topSpeed){
        this.topSpeed = topSpeed;
    }

    printTopSpeed(){
        console.log(`The top speed of the car is ${this.topSpeed} mph.`);
    }
}


const myCar = new Car(200);
myCar.printTopSpeed();


class EnhancedCar{
    constructor(topSpeed){
        this.topSpeed = topSpeed;

        this.location = 0; 
    }

    printTopSpeed(){
        console.log(`The top speed of the car is ${this.topSpeed} mph.`);
    }


    drive(){
        // this.location = this.location + 10;
        this.location += 10;
        console.log(`The car has driven to a new location: ${this.location} miles.`);
    }

    stop(){
        console.log(`The car has stopped at location: ${this.location} miles.`);
    }

}


const myEnhancedCar = new EnhancedCar(180);

myEnhancedCar.drive();
myEnhancedCar.drive();
myEnhancedCar.drive();

myEnhancedCar.printTopSpeed();

myEnhancedCar.stop();