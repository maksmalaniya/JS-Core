// Battery
class Battery {
    constructor (energy, composition, hoursToUse){
        this.energy = energy;
        this.composition = composition;
        this.hoursToUse = hoursToUse;
    };

    loading(){
        let energyPerHour = this.energy / this.hoursToUse;
        this.energy = 100;
        this.hoursToUse = this.energy / energyPerHour;
        console.log('You may use this battery for ' + this.hoursToUse + ' hours')
    }
}

let battery = new Battery(10, 'li-ion', 2);
console.log(battery.loading());

// Table
class Table {
    constructor(composition, places, legs, square){
        this.composition = composition;
        this.places = places;
        this.legs = legs;
        this.square = square;
    }
};

let table = new Table('wooden', 8, 4, 1800)
console.log(table);

//Door
class Door{
    constructor(composition, hasGlass, color){
        this.composition = composition;
        this.hasGlass = hasGlass;
        this.color = color;
    }

    openDoor(){
        console.log('The door is opened.')
    };

    closeDoor(){
        console.log('The door is closed.')
    }
}

let door = new Door('plastic', true, 'white');
console.log(door)

//Conditioner
class Conditioner{
    constructor(minTEmperature, maxTemperature, power, model, price){
        this.minTEmperature = minTEmperature;
        this.maxTemperature = maxTemperature;
        this.power = power;
        this.model = model;
        this.price = price;
    }

    
}