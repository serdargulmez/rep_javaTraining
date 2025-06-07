const inventory = [
  { name: ["asparagus", "as", "us"], type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

var inv01 = inventory.at(0).name.at(1);
var inv02 = inventory.at(0).type;
var inv03 = inventory.at(0).quantity;

console.log("inv01: ", inv01);
console.log("inv02: ", inv02);
console.log("inv03: ", inv03);

console.log("inventory[0].name: ", inventory[0].name);
console.log("inventory[0]: ", inventory[0]);