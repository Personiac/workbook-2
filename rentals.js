var people = {total: 35};
var vans = {rent: 250, seats: 15};
var numVans = people.total / vans.seats;
var cost = numVans * vans.rent;
var costPerPerson = cost / people.total;

console.log("Need " + Math.ceil(numVans) + " vans");
console.log("Total cost: $" + Math.ceil(cost));
console.log("Split $" + Math.ceil(costPerPerson) + " per person");
