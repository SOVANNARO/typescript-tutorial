// file: mathUtils.ts
// Named Exports
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14;

// file: mathUtils.js

function addModuleFormat(a: number, b: number) {
  return a + b;
}

function subtractModuleFormat(a: number, b: number) {
  return a - b;
}

const PIModuleFormat = 3.14;

module.exports = {
  add,
  subtract,
  PI,
};
