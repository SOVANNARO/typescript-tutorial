// 🟢 A simple class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

const greeter = new Greeter("world");
console.log(greeter.greet()); // Output: Hello, world

// A simple method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };

  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(2, 3); // Output: Calling add with arguments: [2, 3]
//         Result: 5

// 🟢 Example of a Class Decorator
// A simple class decorator that logs the creation of a class instance
type Constructor<T = {}> = new (...args: any[]) => T;

function logClassCreation<T extends Constructor>(constructor: T) {
  const originalConstructor = constructor;

  function newConstructor(...args: any[]) {
    console.log(
      `Creating instance of ${originalConstructor.name} with arguments:`,
      args
    );
    return new originalConstructor(...args);
  }

  // Copy prototype so instanceof operator still works
  newConstructor.prototype = originalConstructor.prototype;

  return newConstructor as unknown as T;
}

@logClassCreation
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("John", 30);
console.log(person.introduce()); // Output: Creating instance of Person with arguments: ["John", 30]
//         Hello, my name is John and I am 30 years old.

// 🟢 Example of a Parameterized Class Decorator
// A parameterized class decorator that logs the creation of a class instance with a custom message
function logClassCreationWithMessage(message: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        console.log(
          `${message} - Creating instance of ${constructor.name} with arguments:`,
          args
        );
        super(...args);
      }
    };
  };
}

@logClassCreationWithMessage("Custom Message")
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

const animal = new Animal("Dog", 5);
console.log(animal.speak()); // Output: Custom Message - Creating instance of Animal with arguments: ["Dog", 5]
//         Dog makes a noise.

// 🟢 Example of a Parameterized Method Decorator
// A parameterized method decorator that logs the execution time of a method
function logExecutionTime(unit: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      const time = end - start;
      console.log(`Execution time of ${propertyKey}: ${time} ${unit}`);
      return result;
    };

    return descriptor;
  };
}

class MathOperations {
  @logExecutionTime("milliseconds")
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const math = new MathOperations();
math.multiply(5, 3); // Output: Execution time of multiply: X milliseconds

// 🟢 Example of Decorator Composition
// A method decorator that logs the execution time of a method
function logExecutionTimeComposition(unit: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      const time = end - start;
      console.log(`Execution time of ${propertyKey}: ${time} ${unit}`);
      return result;
    };

    return descriptor;
  };
}

// A method decorator that logs the arguments of a method
function logArgumentsComposition(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class MathOperationsComposition {
  @logExecutionTimeComposition("milliseconds")
  @logArgumentsComposition
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const mathComposition = new MathOperationsComposition();
math.multiply(5, 3); // Output:
// Calling multiply with arguments: [5, 3]
// Execution time of multiply: X milliseconds

// 🟢 Example of a Method Decorator
// A simple method decorator that logs the arguments and the result of a method
function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };

  return descriptor;
}

class CalculatorMethod {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calculatorMethod = new CalculatorMethod();
calculatorMethod.add(2, 3); // Output: Calling add with arguments: [2, 3]
//         Result: 5

// 🟢 Example of a Parameterized Method Decorator
// A parameterized method decorator that logs the execution time of a method
function logExecutionTimeMethod(unit: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = originalMethod.apply(this, args);
      const end = performance.now();
      const time = end - start;
      console.log(`Execution time of ${propertyKey}: ${time} ${unit}`);
      return result;
    };

    return descriptor;
  };
}

class MathOperationsMethod {
  @logExecutionTime("milliseconds")
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const mathMethod = new MathOperationsMethod();
math.multiply(5, 3); // Output: Execution time of multiply: X milliseconds

// 🟢 Example of an Accessor Decorator
// A simple accessor decorator that logs access to a property
function logAccess(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalGet = descriptor.get;
  const originalSet = descriptor.set;

  if (originalGet) {
    descriptor.get = function () {
      console.log(`Getting value of ${propertyKey}`);
      return originalGet.apply(this);
    };
  }

  if (originalSet) {
    descriptor.set = function (value: any) {
      console.log(`Setting value of ${propertyKey} to ${value}`);
      originalSet.apply(this, [value]);
    };
  }

  return descriptor;
}

class PersonAccessor {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  @logAccess
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const personAccessor = new PersonAccessor("John");
console.log(personAccessor.name); // Output: Getting value of name
//         John
personAccessor.name = "Jane"; // Output: Setting value of name to Jane
console.log(personAccessor.name); // Output: Getting value of name
//         Jane

// 🟢 Example of a Parameter Decorator
// A simple parameter decorator that logs the parameter index and the method name
function logParameter(
  target: any,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  console.log(
    `Parameter at index ${parameterIndex} in method ${String(
      propertyKey
    )} is being decorated`
  );
}

class PersonParameter {
  greet(@logParameter message: string, @logParameter name: string): string {
    return `${message}, ${name}!`;
  }
}

const personParameter = new PersonParameter();
personParameter.greet("Hello", "John"); // Output:
// Parameter at index 0 in method greet is being decorated
// Parameter at index 1 in method greet is being decorated

// 🟢 Example of a Parameter Decorator for Validation
// A parameter decorator that validates a parameter to ensure it is a non-empty string
function nonEmpty(
  target: any,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  const originalMethod = target[propertyKey];

  target[propertyKey] = function (...args: any[]) {
    if (args[parameterIndex] === "") {
      throw new Error(
        `Parameter at index ${parameterIndex} in method ${String(
          propertyKey
        )} cannot be an empty string`
      );
    }
    return originalMethod.apply(this, args);
  };
}

class User {
  setName(@nonEmpty name: string) {
    console.log(`Name set to: ${name}`);
  }
}

const user = new User();
user.setName("Alice"); // Output: Name set to: Alice
user.setName(""); // Throws Error: Parameter at index 0 in method setName cannot be an empty string
