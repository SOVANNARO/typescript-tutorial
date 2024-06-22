// 🟢 Problem
function getFirstElement(arr: any[]): any {
  return arr[0];
}

const firstNumber = getFirstElement([1, 2, 3]); // firstNumber is of type 'any'
const firstString = getFirstElement(["a", "b", "c"]); // firstString is of type 'any'

// 🟢 solution
function getFirstElementSolution<T>(arr: T[]): T {
  return arr[0];
}

class DataContainer<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }
}

const numberContainer = new DataContainer<number>(123);
console.log(numberContainer.getData()); // Output: 123

const stringContainer = new DataContainer<string>("Hello");
console.log(stringContainer.getData()); // Output: Hello

//🟢  Generic Classes in TypeScript
class DataContainerClass<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }

  setData(data: T): void {
    this.data = data;
  }
}

// 🟢 Using the generic class with different types
const numberContainerClass = new DataContainerClass<number>(123);
console.log(numberContainerClass.getData()); // Output: 123

numberContainerClass.setData(456);
console.log(numberContainerClass.getData()); // Output: 456

const stringContainerClass = new DataContainerClass<string>("Hello");
console.log(numberContainerClass.getData()); // Output: Hello

stringContainerClass.setData("World");
console.log(stringContainerClass.getData()); // Output: World

// 🟢 Basic Example of a Generic Function
function identity<T>(arg: T): T {
  return arg;
}

// Usage with different types
let output1 = identity<string>("Hello, TypeScript!");
let output2 = identity<number>(42);

console.log(output1); // Output: Hello, TypeScript!
console.log(output2); // Output: 42

// 🟢 Generic Function with Multiple Type Parameters
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Usage with different types
let mergedObject = merge({ name: "Alice" }, { age: 30 });

console.log(mergedObject); // Output: { name: "Alice", age: 30 }

// 🟢 Generic Function with Constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Usage with a type that has a length property
logLength("Hello, TypeScript!"); // Output: 17
logLength([1, 2, 3, 4, 5]); // Output: 5

// Usage with a type that does not have a length property will result in a compile-time error
// logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

// 🟢 Generic Interfaces in TypeScript
// Example of a Generic Interface
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Usage with different types
const numberStringPair: KeyValuePair<number, string> = { key: 1, value: "One" };
const stringBooleanPair: KeyValuePair<string, boolean> = {
  key: "isActive",
  value: true,
};

console.log(numberStringPair); // Output: { key: 1, value: 'One' }
console.log(stringBooleanPair); // Output: { key: 'isActive', value: true }

// 🟢 Example of a Generic Function with Constraints
interface Lengthwise {
  length: number;
}

function logLengthConstranints<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// Usage with a type that has a length property
logLengthConstranints("Hello, TypeScript!"); // Output: 17
logLengthConstranints([1, 2, 3, 4, 5]); // Output: 5

// Usage with a type that does not have a length property will result in a compile-time error
// logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

// 🟢 Example of Extending a Generic Class
class DataContainerExtending<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  getData(): T {
    return this.data;
  }

  setData(data: T): void {
    this.data = data;
  }
}

// Extended generic class
class TimestampedDataContainerExtending<T> extends DataContainerExtending<T> {
  private timestamp: Date;

  constructor(data: T) {
    super(data);
    this.timestamp = new Date();
  }

  getTimestamp(): Date {
    return this.timestamp;
  }

  setTimestamp(timestamp: Date): void {
    this.timestamp = timestamp;
  }
}

// Usage
const timestampedNumberContainer =
  new TimestampedDataContainerExtending<number>(123);
console.log(timestampedNumberContainer.getData()); // Output: 123
console.log(timestampedNumberContainer.getTimestamp()); // Output: current date and time

timestampedNumberContainer.setData(456);
timestampedNumberContainer.setTimestamp(new Date("2023-01-01"));
console.log(timestampedNumberContainer.getData()); // Output: 456
console.log(timestampedNumberContainer.getTimestamp()); // Output: 2023-01-01

// 🟢 Example of Using the `keyof` Operator
interface Person {
  name: string;
  age: number;
  isEmployed: boolean;
}

type PersonKeys = keyof Person; // "name" | "age" | "isEmployed"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "Alice",
  age: 30,
  isEmployed: true,
};

const nameKeyof = getProperty(person, "name"); // "Alice"
const age = getProperty(person, "age"); // 30
const isEmployed = getProperty(person, "isEmployed"); // true

//🟢 Example of Type Mapping
interface Person {
  name: string;
  age: number;
  isEmployed: boolean;
}

// Making all properties of Person optional
type PartialPerson = {
  [P in keyof Person]?: Person[P];
};

// Making all properties of Person readonly
type ReadonlyPerson = {
  readonly [P in keyof Person]: Person[P];
};

// Changing the types of all properties to string
type StringifiedPerson = {
  [P in keyof Person]: string;
};
