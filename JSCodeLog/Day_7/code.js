/*jslint devel: true */

var x

//undefined is a primitive types in JS
console.log(x)
console.log(typeof x)

//the value null means the variable has no value
var y = null
console.log(y)
//type of y = object ==>
console.log(typeof y)

//Type Cohersion: This happens when JS converts one type to another
//this yields a string as JS converts the 5 to a string resulting in the value of 15 when done this way.
var z = "1" + 5
console.log(z)
console.log(typeof z)

//This example JS converts the 1 to a number yielding -4
z = "1" - 5
console.log(z)
console.log(typeof z)

//multiplication does not work with strings hencew NaN -> Not a Number which is also a number
z = "one" * 2
console.log(z)
console.log(typeof z)

//2 multiplied by 0 = 0
z = 2 * null
console.log(z)
console.log(typeof z)

//It converts 0 to false which makes the comparison true
console.log(0 == false)
//null cannot be converted to false
console.log(null == false)
//undefined cannot be converted to false
console.log(undefined == false)
console.log("" == false)

//undefined == null ==> ONly case where this is true
console.log(undefined == null)
console.log(null == null)
console.log(undefined == undefined)

//This will always yield false
console.log(NaN == NaN)
