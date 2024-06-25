// 🟢 Including JS Code in TS Projects
function greet() {
  console.log("Hello from JavaScript!");
}

import * as _ from "lodash";

// 🟢 Type Checking JS Code
// example.js
/**
 * Greets a person.
 * @param {string} name - The name of the person to greet.
 * @returns {string} A greeting message.
 */
function greet(name) {
  return `Hello, ${name}!`;
}

// Usage
const message = greet("World");
console.log(message);

// 🟢 Describing Types Using JSDoc
/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}
