// d = √[(x2 − x1)2 + (y2 − y1)2]
var point = {x1: 5, x2: 7, y1: 6, y2: 6};
var distance = Math.sqrt((point.x2 - point.x1) ** 2) + ((point.y2 - point.y1) ** 2);
console.log(distance);