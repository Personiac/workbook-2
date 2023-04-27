// Declare variable
var count;
//assign variable
count = 0;

/* Multi-line
comment block */

//Declare and assign variable
var count = 0;
console.log(count);
count = count + 1;
console.log(count);
updateCount = count++;
console.log(count);

var numInt = "123";
var numInt2 = "456";
console.log(numInt + numInt2);
console.log(parseInt(numInt).toFixed(2));
console.log(parseFloat(parseInt(numInt)) + parseInt(numInt2));

var newInt = parseInt(numInt);
var newInt2 = parseInt(numInt2);

console.log(newInt + newInt2);

var test = {x: 1, y: 5, z: 0};
var loopNum = 1;
do {
    console.log("Value of Z: " + test.z);
    // console.log("Value of X: " + test.x);
    test.z += test.x;
    console.log("Loop number: " + loopNum);
    loopNum++;
} while (test.z < test.y);

var stringFloat = "123"
var numFloat = "123.6742"
// console.log(typeof(parseInt(numFloat).toFixed(2)));
console.log(parseInt(numFloat).toFixed(2));
console.log(parseFloat(numFloat));
console.log(parseFloat(numFloat).toFixed(2) + 500);


var unaryTest = "10.1234";

console.log(+unaryTest);
console.log("Type of data unaryTest is: " + typeof(+unaryTest));

if (test.x < test.y) {
do {
    console.log("Value of X: " + test.x);
    console.log("Value of Y: " + test.y);
    test.x += test.x;
    loopNum = 1;
    console.log("Loop number: " + loopNum);
    loopNum++;
} while (test.x < test.y);
}