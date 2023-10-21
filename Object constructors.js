function MyFunction (
    name,
    numberName,
    smallName1,
    smallName2,
    status
) {
    this.name = name;
    this.numberName = numberName;
    this.smallObject = {
        smallName1: smallName1,
        smallName2: smallName2
    }
    this.myStatus = status;
    this.myFunc = function(statusValue) {
        this.myStatus = statusValue;
    }
}