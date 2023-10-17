const myObject = {};

function addProperty() {
    myObject.ny = 10
    console.log(myObject)
}

function removeProperty() {
    delete myObject.ny
    console.log(myObject)
}