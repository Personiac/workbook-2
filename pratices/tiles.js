var room = {length: 5, width: 7};
var room = {area: room.length * room.width};
console.log(room.area + " square feet");
var tilesAmount = 12;

var boxes = {tiles: room.area / tilesAmount};
console.log(Math.ceil(boxes.tiles) + " boxes");

var more = {boxes: boxes.tiles * .10};

console.log(Math.ceil(more.boxes + boxes.tiles) + " boxes to cover at least 10% more tiles required.");