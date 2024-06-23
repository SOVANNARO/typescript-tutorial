// Default Imports
import Calculator from "./calculator";
// Named Imports
import { PI, add, subtract } from "./mathUtils";
// Wildcard Imports
import * as MathUtils from "./mathUtils";

// Re-exporting Re-exports need create a file for each export
// re-exporting I commented because it's it duplicate so it's so error
// import { add, subtract, PI, Calculator } from './index';

// Named Imports
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(PI);

// Default Imports
const calc = new Calculator();
console.log(calc.add(2, 3));
console.log(calc.subtract(2, 3));

// Wildcard Imports
console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.subtract(5, 2)); // 3
console.log(MathUtils.PI); // 3.14
