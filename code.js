/*jslint devel: true */
let grades = []
var gradeSum = 0
var passModule = 0
var average = 0
var results = "This is what you have scored today:\n\n<br><br>"

for(var i = 1; i <= 5; i++){
    grades[i] = prompt("Enter Grade For Module " + i)
    gradeSum += parseInt(grades[i])
    if(grades[i] >= 60){
        passModule++
    }
    results += "module " + i + ": " + grades[i] + ".\n\n<br><br>"
}
average = (gradeSum/5).toFixed(2)

if(average >= 60 && passModule >= 4){
    results += "You passed " + passModule + " modules\n<br>"
    results += "Your average is " + average + "\n<br>"
    results += "Congratulations you have passed!"
}else{
    results += "You have failed " + (5-passModule) + " module(s)\n<br>"
    results += "Your average is " + average + "\n<br>"
    results += "Wish you better luck next time :-("
}

document.getElementById("result").innerHTML = results
console.log(results)
