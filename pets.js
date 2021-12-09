function printPetPreference (animal) {
    if (animal === undefined) {
        return "I like Cats";
    }
    else {
        return "my favorite dog breed is " + animal;
    }
}


let dog= "great dane";
let cat;


console.log(printPetPreference(dog));
console.log(printPetPreference(cat));
console.log(printPetPreference());