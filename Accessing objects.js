
class = MyClass
constructor(
    name,
    numberName,
    smallObject {
        smallName1,
        smallName2
    }
) {
    this.name = name;
    this.numberName = numberName
    this.smallObject = smallObject {
        smallName1
        smallName2
    }
}



const myObject = {
    name: "value",
    numberName: 20,
    smallObject: {
        smallName1: 30,
        smallName2: 30,
    }
};

//Legger til en ny property til myObject
myObject.numberName2 = 30;



const myObject = {
    name: "value",
    numberName: 20,
    smallObject: {
        smallName1: 30,
        smallName2: 30,
    }
};

//Sletter en property fra myObject
delete myObject.numberName;


// du kan velge å gjøre console.log(myObject) eller du kan skrive en beskrivelse først "blabla", myObject
console.log("skriver ut myObject i consollen", myObject)