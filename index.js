// Create a constructor function for each of the following:

// Scooter with year, color, and model properties
// Driver with name, age, and experience properties
// PickupLocation with address and city properties

function Scooter (year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
const newScooter = new Scooter(1971, "blue", "ford")
console.log(newScooter)

function Driver (name, age, experience){
    this.name = name;
    this.age = age;
    this.experience = experience;
}
const newDriver = new Driver("Jay", 29, "none")
console.log(newDriver)

function PickupLocation (address, city ){
    this.address = address;
    this.city = city;
}
