let first = "a";
let second = "b";
let third = "c";

let alphabet = first + second + third;
console.log(alphabet);

//Traditional variable implementation
alphabet = "Now I know my " + first + ", " + second + ", " + third + "'s";
console.log(alphabet);

//More efficient format to use variables in sentences
alphabet = `Now I know my ${first}, ${second}, ${third}'s`
console.log(alphabet);