
class Dog {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    bark() {
        console.log("Class dog is barking")
    }
    birth() {
        let today = new Date()
        return today.getFullYear() - this.age
    }
}



function objDog(name, age) {
    this.name = name
    this.age = age
    this.bark = function() {
        console.log("Obj dog is barking")
    }
    this.birth = function() {
        let today = new Date()
        return today.getFullYear() - this.age
    }
}


const myDog = new objDog("Spot", 3)
myDog.bark()
console.log("classDog birth year: " + myDog.birth())



/* const dog = {
    name: "Rex",
    age: 5,
    bark: function () {
        console.log("Bark bark!")
    },
}; */