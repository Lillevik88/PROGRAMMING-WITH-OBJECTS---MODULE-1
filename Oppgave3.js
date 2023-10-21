const jsonData = {
    "name": 'John',
    "age": 30,
    "car": null
}


//print JSON ovject to console
console.log("JSON data: " + JSON.stringify(jsonData))


//convert JSON to XML using json2xml
let xmlData = json2xml(jsonData)
console.log("XML data: " + JSON.stringify(xmlData))