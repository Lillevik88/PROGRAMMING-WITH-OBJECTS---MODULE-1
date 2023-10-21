function Calculator (
    value1,
    value2
) {
    this.value1 = value1
    this.value2 = value2
    this.sum = function() {
        console.log(this.value1 + this.value2)
    }
    this.multiplication = function() {
        console.log(this.value1 * this.value2)
    }
}