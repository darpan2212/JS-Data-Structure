let originDogs = ["Bulldog", "Beagle", "Labrador"];
let cats = new Array("Americal curl", "Bengal");
let birds = new Array("Falcon", "Ducks", "Flamingoes");

console.log(originDogs);

let sliceDogs = originDogs.slice(1, 2);
let copyDogs = [...originDogs];
let dogs = originDogs.slice(0);
console.log(sliceDogs);
console.log(copyDogs);
console.log(dogs);

let pushDog = dogs.push("Golden Retriever");
console.log(pushDog);
let popDog = dogs.pop();
console.log(popDog);
dogs[dogs.length] = "Poodle";
console.log(dogs);

let addFirst = dogs.unshift("Golden Retriever");
console.log(addFirst);
console.log(dogs);
let shiftDog = dogs.shift();
console.log(shiftDog);
console.log(dogs);

dogs.splice(2, 1, "Pug", "Huskey", "Boxer");
console.log(dogs);

let animal = dogs.concat(cats, birds);
console.log(animal);

let newAnimal = [...dogs, ...cats, ...birds].toString();
console.log(newAnimal);

let sortDog = dogs.slice(0).sort();
console.log(sortDog);
console.log(dogs);

function scanArray([first, second]) {
    console.log("Scan : " + first + "\t" + second);
}

scanArray(animal);

let joinAnimals = animal.join("-");
console.log(joinAnimals);

let allAnimals = "";

console.log(allAnimals);

for (let a of animal) {
    allAnimals += a + " ";
}
console.log(allAnimals);