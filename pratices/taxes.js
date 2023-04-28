var money = {taxes: 0.23, income: 87050};
var oweAmount = money.income * money.taxes;

console.log(oweAmount.toFixed(2));