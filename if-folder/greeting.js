var hour = 0;

if (hour < 10 && hour >= 0) {
    console.log("Good Morning!");
} else if (hour >= 10 && hour < 17) {
    console.log("Good Day!");
} else if (hour >= 17 && hour <= 23) {
    console.log("Good Evening!");
} else { 
    console.log("Invalid input. Try Again.");
}
