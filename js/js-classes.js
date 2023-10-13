(() => {
    // class Dog {
    //     constructor(name,gender,breed, weight, color,altered) {
    //         this.name = name;
    //         this.gender = gender;
    //         this.breed = bredd;
    //         this.weight = weight;
    //         this.color = color;
    //         this.altered = altered;
    //     }
    //     bark(){
    //         console.log(`${this.name}, a ${this.breed}, barked`);
    //     }
    // }
    // const createDog = (name,gender,breed, weight, color,altered) => {
    //     let result = {
    //         name,
    //         gender,
    //         breed,
    //         weight,
    //         color,
    //         altered,
    //         bark: function (){
    //             console.log(`${this.name}, a ${this.breed}, barked`);
    //         }
    //     }
    //
    //     return result
    //
    // }
    //
    // //creating a dog object with a function
    // //i.e factory function
    //
    // // dogs as an example
    // let dog1 = new Dog ("mi", "male", "corgi", 23, "true");


// CLASS EXAMPLE !
    class Car {
        constructor(make, model, color, year, mileage) {
            this.make = make;
            this.model = model;
            this.color = color;
            this.year = year;
            this.mileage = mileage;
        }
        beep(){
            console.log(`this is a ${this.make}, ${this.model} the color is ${this.color} the year is ${this.year} and the mileage is ${this.mileage}`)
        }
    }

    let car1 = new Car("dodge", "Challanger", "Silver", 2023, 900)
    console.log(car1)

})();