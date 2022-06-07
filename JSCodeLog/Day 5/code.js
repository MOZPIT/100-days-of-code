/*jslint devel: true */

var speedLimitMiles = 50

var speedLimitKm = speedLimitMiles * 1.61

var speedFineMiles = speedLimitMiles * 1.1 + 2

console.log(speedFineMiles.toFixed(2))

var speedFineKm = speedFineMiles * 1.61

console.log(speedFineKm.toFixed(2))

var x = 1

console.log(typeof x)

//fractional numbers
var y = 2.4

// 5.3 * 10^8
var z = 5.3e8

console.log(z)

//64 bits is the allocation for numbers type variables in JS
//max number in JS
var max = Number.MAX_VALUE
console.log(max)
//min val number in JS
var min = Number.MIN_VALUE
console.log(min)

//arithmetic operation
var a = 4 + 9
console.log(a)
  
a = 3 * 4
console.log(a)

a = y - x
console.log(a)

var b = 3
//b = b + 2
b += 2
console.log(b)

b += 1
console.log(b)

b++
console.log(b)

b -= 1
console.log(b)

b--
console.log(b)

//division
console.log(12/4)

//operator precedence
var x = 4 * 5 + 3
console.log(x)

var x = 4 * (5 + 3)
console.log(x)

++ x
console.log(x)

//the ++ operator preceded the equals operator
var d = ++ x
console.log(x)
console.log(d)

//the equal operator preceded the ++ operator
var e = x ++
console.log(x)
console.log(e)

//remainder operator
var f = 17 % 3
console.log(f)

//exponent operator 3^4. It returns the base to the exponent power
var g = 3 ** 4
console.log(g)

var h = Infinity
console.log(h)
console.log(3/0)

//NaN stands for non-a-number 
var i = 0/0
console.log(i)

//power method
var j = Math.pow(2, 53)
console.log(j)

//big number. Any number that is greateest than the max number will yield infinity
var k = Math.pow(2, 2000)
console.log(k)

var number = '3'
console.log(typeof
            parseInt(number))

console.log(typeof parseInt('not a number'))

//Strings: are sequences of characters
var job = 'Web Developer'
console.log(job)

var town = "London"
console.log(town)

//escape the normal process and treat quotation marks as punctuation marks.
var greeting = 'Hello, I\'m glad to see you'
console.log(greeting)

//Special characters
var quote = "This is a \n a new line"
console.log(quote)

quote = "Here is a \t tab"
console.log(quote)

var s = 'apple'
//methods with the primitive type and object type. 
console.log(s.length)
console.log(s.charAt(2))
console.log(s.indexOf('l'))
console.log(s.lastIndexOf('p'))

//How old will you be in 2040?
var firstname = prompt('Please enter your first name:')
var lastname = prompt('Please enter your last name:')
var year = prompt('Pleae enter your year of birth:')

var sentence1 = 'Hello ' + firstname + ' ' + lastname + '.'

console.log(year)

var futureAge = 2040 - year
var sentence2 = 'Your age in 2040 will be ' + futureAge + '.'

var result = sentence1 + '\n' + sentence2

//add extra sentence to result
result += '\nI wish a long life fulll of success and happiness!!'
console.log(result)