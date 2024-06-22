## TypeScript Tutorial

### 🟢 Decorators

### You'll Learn

- What are decorators
- Class decorators
- Method decorators
- Property decorators
- Accessor decorators
- Parameter decorators

### 🟢 What are Decorators?

Decorators in TypeScript are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. Decorators are a way to add metadata or modify the behavior of the target they are applied to. They are a stage 2 proposal for JavaScript and are available as an experimental feature in TypeScript.

### What are Decorators?

Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members. They are functions that are prefixed with an `@` symbol and can be used to modify or annotate classes and their members.

### Example of a Class Decorator

A class decorator is a function that takes a class constructor as an argument and can be used to modify or annotate the class.

Here's a simple example:

```typescript
// A simple class decorator
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
```

In this example, the `@sealed` decorator is applied to the `Greeter` class. The `sealed` function seals the constructor and its prototype, preventing any new properties from being added to them.

### Example of a Method Decorator

A method decorator is a function that takes three arguments: the target (either the constructor function of the class for a static method or the prototype of the class for an instance method), the property key of the method, and the property descriptor.

Here's an example:

```typescript
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
```

In this example, the `@log` decorator is applied to the `add` method of the `Calculator` class. The `log` function wraps the original method, logging the arguments and the result whenever the method is called.

### Other Types of Decorators

- **Property Decorators**: Used to observe, modify, or replace a property definition.
- **Accessor Decorators**: Used to observe, modify, or replace an accessor's definition.
- **Parameter Decorators**: Used to observe, modify, or replace a parameter's definition.

Decorators are a powerful feature in TypeScript that can help you write cleaner and more maintainable code by separating concerns and adding metadata to your classes and their members.

### 🟢 Class Decorators

Class decorators in TypeScript are a type of decorator that can be applied to a class declaration. They are used to modify or annotate the class in some way. A class decorator is a function that takes a single parameter, which is the constructor of the class to which the decorator is applied.

### How Class Decorators Work

A class decorator is defined just like any other function, but it is prefixed with an `@` symbol when applied to a class. The decorator function can modify the class constructor, add properties or methods, or perform other operations.

### Example of a Class Decorator

Let's look at a simple example of a class decorator that logs the creation of a class instance:

```typescript
// A simple class decorator that logs the creation of a class instance
function logClassCreation(constructor: Function) {
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

  return newConstructor as any;
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
```

### Explanation

1. **Decorator Function**: The `logClassCreation` function is a class decorator. It takes the class constructor as an argument and returns a new constructor function that logs the creation of a class instance.

2. **Original Constructor**: The original constructor is saved in the `originalConstructor` variable.

3. **New Constructor**: A new constructor function `newConstructor` is created. This function logs the creation of a class instance and then calls the original constructor with the provided arguments.

4. **Prototype Copying**: The prototype of the original constructor is copied to the new constructor to ensure that the `instanceof` operator still works correctly.

5. **Applying the Decorator**: The `@logClassCreation` decorator is applied to the `Person` class. When a new instance of `Person` is created, the decorator logs the creation of the instance and the arguments passed to the constructor.

### Benefits of Class Decorators

- **Code Reusability**: Decorators allow you to encapsulate common functionality and reuse it across multiple classes.
- **Separation of Concerns**: Decorators help separate concerns by allowing you to add functionality to classes without modifying their implementation.
- **Metadata**: Decorators can be used to add metadata to classes, which can be useful for frameworks and libraries.

Class decorators are a powerful feature in TypeScript that can help you write cleaner and more maintainable code by adding functionality to classes in a declarative way.

## 🟢 Parameterized Decorators

Parameterized decorators in TypeScript are decorators that accept arguments. These arguments can be used to customize the behavior of the decorator. Parameterized decorators are useful when you need to pass configuration options or other data to the decorator.

### How Parameterized Decorators Work

A parameterized decorator is a function that returns a decorator function. The outer function accepts the parameters, and the inner function is the actual decorator that gets applied to the class, method, property, or parameter.

### Example of a Parameterized Class Decorator

Let's look at an example of a parameterized class decorator that accepts a configuration object to log the creation of a class instance with a custom message:

```typescript
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
```

### Explanation

1. **Outer Function**: The `logClassCreationWithMessage` function is the outer function that accepts a `message` parameter. This function returns the actual decorator function.

2. **Decorator Function**: The inner function is the actual decorator that gets applied to the class. It takes the class constructor as an argument and returns a new class that extends the original class.

3. **Extended Class**: The new class extends the original class and overrides the constructor. In the new constructor, the custom message and the arguments are logged, and then the original constructor is called using `super`.

4. **Applying the Decorator**: The `@logClassCreationWithMessage("Custom Message")` decorator is applied to the `Animal` class. When a new instance of `Animal` is created, the custom message and the arguments passed to the constructor are logged.

### Example of a Parameterized Method Decorator

Let's look at an example of a parameterized method decorator that logs the execution time of a method:

```typescript
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
```

### Explanation

1. **Outer Function**: The `logExecutionTime` function is the outer function that accepts a `unit` parameter. This function returns the actual decorator function.

2. **Decorator Function**: The inner function is the actual decorator that gets applied to the method. It takes the target, property key, and property descriptor as arguments.

3. **Modified Method**: The original method is saved in the `originalMethod` variable. The method is then modified to log the execution time. The `performance.now()` function is used to measure the start and end times, and the execution time is logged.

4. **Applying the Decorator**: The `@logExecutionTime("milliseconds")` decorator is applied to the `multiply` method of the `MathOperations` class. When the `multiply` method is called, the execution time is logged in milliseconds.

Parameterized decorators provide a flexible way to customize the behavior of decorators by passing configuration options or other data. They are useful for creating reusable and configurable decorators in TypeScript.

### 🟢 Decorator Composition

Decorator composition in TypeScript refers to the ability to apply multiple decorators to a single class, method, property, or parameter. When multiple decorators are applied, they are evaluated in a specific order, allowing you to combine their effects.

### How Decorator Composition Works

When multiple decorators are applied to a single target, they are evaluated in the following order:

1. **Class Decorators**: From bottom to top.
2. **Method, Accessor, and Property Decorators**: From top to bottom.
3. **Parameter Decorators**: From top to bottom.

### Example of Decorator Composition

Let's look at an example where we compose multiple method decorators to log the execution time and the arguments of a method:

```typescript
// A method decorator that logs the execution time of a method
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

// A method decorator that logs the arguments of a method
function logArguments(
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

class MathOperations {
  @logExecutionTime("milliseconds")
  @logArguments
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const math = new MathOperations();
math.multiply(5, 3); // Output:
// Calling multiply with arguments: [5, 3]
// Execution time of multiply: X milliseconds
```

### Explanation

1. **logExecutionTime Decorator**: This decorator logs the execution time of a method. It accepts a `unit` parameter and returns a decorator function that modifies the method to log the execution time.

2. **logArguments Decorator**: This decorator logs the arguments of a method. It returns a decorator function that modifies the method to log the arguments.

3. **Applying Multiple Decorators**: The `@logExecutionTime("milliseconds")` and `@logArguments` decorators are applied to the `multiply` method of the `MathOperations` class. The `@logExecutionTime` decorator is applied first, followed by the `@logArguments` decorator.

4. **Order of Execution**: When the `multiply` method is called, the `@logArguments` decorator is executed first, logging the arguments. Then, the `@logExecutionTime` decorator is executed, logging the execution time.

### Benefits of Decorator Composition

- **Modularity**: Decorator composition allows you to create small, reusable decorators that can be combined to achieve complex behavior.
- **Separation of Concerns**: Each decorator can focus on a single concern, making the code easier to understand and maintain.
- **Flexibility**: You can easily add, remove, or change the order of decorators to modify the behavior of the target.

Decorator composition is a powerful feature in TypeScript that allows you to combine multiple decorators to achieve complex behavior in a modular and flexible way.

### 🟢 Method Decorators

Method decorators in TypeScript are a type of decorator that can be applied to methods of a class. They are used to modify or annotate the method in some way. A method decorator is a function that takes three arguments:

1. **Target**: The prototype of the class for instance methods, or the constructor of the class for static methods.
2. **Property Key**: The name of the method.
3. **Property Descriptor**: The property descriptor for the method.

### How Method Decorators Work

A method decorator can modify the method's behavior by wrapping the original method, changing its descriptor, or adding additional functionality.

### Example of a Method Decorator

Let's look at an example of a method decorator that logs the arguments and the result of a method:

```typescript
// A simple method decorator that logs the arguments and the result of a method
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
```

### Explanation

1. **Decorator Function**: The `log` function is a method decorator. It takes the target, property key, and property descriptor as arguments.

2. **Original Method**: The original method is saved in the `originalMethod` variable.

3. **Modified Method**: The method is modified to log the arguments and the result. The `originalMethod.apply(this, args)` call ensures that the original method is executed with the correct context and arguments.

4. **Applying the Decorator**: The `@log` decorator is applied to the `add` method of the `Calculator` class. When the `add` method is called, the decorator logs the arguments and the result.

### Example of a Parameterized Method Decorator

Let's look at an example of a parameterized method decorator that logs the execution time of a method:

```typescript
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
```

### Explanation

1. **Outer Function**: The `logExecutionTime` function is the outer function that accepts a `unit` parameter. This function returns the actual decorator function.

2. **Decorator Function**: The inner function is the actual decorator that gets applied to the method. It takes the target, property key, and property descriptor as arguments.

3. **Modified Method**: The original method is saved in the `originalMethod` variable. The method is then modified to log the execution time. The `performance.now()` function is used to measure the start and end times, and the execution time is logged.

4. **Applying the Decorator**: The `@logExecutionTime("milliseconds")` decorator is applied to the `multiply` method of the `MathOperations` class. When the `multiply` method is called, the execution time is logged in milliseconds.

### Benefits of Method Decorators

- **Code Reusability**: Method decorators allow you to encapsulate common functionality and reuse it across multiple methods.
- **Separation of Concerns**: Decorators help separate concerns by allowing you to add functionality to methods without modifying their implementation.
- **Metadata**: Decorators can be used to add metadata to methods, which can be useful for frameworks and libraries.

Method decorators are a powerful feature in TypeScript that can help you write cleaner and more maintainable code by adding functionality to methods in a declarative way.

### 🟢 Accessor Decorators

Accessor decorators in TypeScript are a type of decorator that can be applied to the getters and setters of a class. They are used to observe, modify, or replace an accessor's definition. Accessor decorators are similar to method decorators but are specifically designed for properties that have getters and/or setters.

### How Accessor Decorators Work

An accessor decorator is a function that takes three arguments:

1. **Target**: The prototype of the class for instance accessors, or the constructor of the class for static accessors.
2. **Property Key**: The name of the accessor.
3. **Property Descriptor**: The property descriptor for the accessor.

### Example of an Accessor Decorator

Let's look at an example of an accessor decorator that logs access to a property:

```typescript
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

class Person {
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

const person = new Person("John");
console.log(person.name); // Output: Getting value of name
//         John
person.name = "Jane"; // Output: Setting value of name to Jane
console.log(person.name); // Output: Getting value of name
//         Jane
```

### Explanation

1. **Decorator Function**: The `logAccess` function is an accessor decorator. It takes the target, property key, and property descriptor as arguments.

2. **Original Get and Set**: The original getter and setter methods are saved in the `originalGet` and `originalSet` variables.

3. **Modified Get and Set**: The getter and setter methods are modified to log access to the property. The `originalGet.apply(this)` and `originalSet.apply(this, [value])` calls ensure that the original methods are executed with the correct context and arguments.

4. **Applying the Decorator**: The `@logAccess` decorator is applied to the `name` accessor of the `Person` class. When the `name` property is accessed or modified, the decorator logs the access or modification.

### Benefits of Accessor Decorators

- **Code Reusability**: Accessor decorators allow you to encapsulate common functionality and reuse it across multiple accessors.
- **Separation of Concerns**: Decorators help separate concerns by allowing you to add functionality to accessors without modifying their implementation.
- **Metadata**: Decorators can be used to add metadata to accessors, which can be useful for frameworks and libraries.

Accessor decorators are a powerful feature in TypeScript that can help you write cleaner and more maintainable code by adding functionality to accessors in a declarative way.

### 🟢 Property Decorators

Property decorators in TypeScript are a type of decorator that can be applied to properties of a class. They are used to observe, modify, or replace a property definition. Unlike method and accessor decorators, property decorators do not receive a property descriptor as an argument. Instead, they receive the target object and the property key.

### How Property Decorators Work

A property decorator is a function that takes two arguments:

1. **Target**: The prototype of the class for instance properties, or the constructor of the class for static properties.
2. **Property Key**: The name of the property.

### Example of a Property Decorator

Let's look at an example of a property decorator that logs access to a property:

```typescript
// A simple property decorator that logs access to a property
function logProperty(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = () => {
    console.log(`Getting value of ${propertyKey}: ${value}`);
    return value;
  };

  const setter = (newValue: any) => {
    console.log(`Setting value of ${propertyKey} to ${newValue}`);
    value = newValue;
  };

  // Delete the property and re-define it with getter and setter
  if (delete target[propertyKey]) {
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
}

class User {
  @logProperty
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Alice");
console.log(user.name); // Output: Getting value of name: Alice
user.name = "Bob"; // Output: Setting value of name to Bob
console.log(user.name); // Output: Getting value of name: Bob
```

### Explanation

1. **Decorator Function**: The `logProperty` function is a property decorator. It takes the target and property key as arguments.

2. **Getter and Setter**: The decorator defines a getter and setter for the property. The getter logs access to the property, and the setter logs modifications to the property.

3. **Redefine Property**: The original property is deleted, and a new property is defined with the getter and setter using `Object.defineProperty`.

4. **Applying the Decorator**: The `@logProperty` decorator is applied to the `name` property of the `User` class. When the `name` property is accessed or modified, the decorator logs the access or modification.

### Benefits of Property Decorators

- **Code Reusability**: Property decorators allow you to encapsulate common functionality and reuse it across multiple properties.
- **Separation of Concerns**: Decorators help separate concerns by allowing you to add functionality to properties without modifying their implementation.
- **Metadata**: Decorators can be used to add metadata to properties, which can be useful for frameworks and libraries.

Property decorators are a powerful feature in TypeScript that can help you write cleaner and more maintainable code by adding functionality to properties in a declarative way.

### 🟢 Decorators Summary

- Decorators are often used in frameworks (eg Angular, Vue) to chance and enhance
  classes and how they behave.
- We can apply decorators on classes, properties, methods, parameters, and accessors
  (getters and setters).
- A decorator is just a function that gets called by the JavaScript runtime. In that function,
  we have a chance to modify a class and its members.
- To use decorators, we have to enable the experimentalDecorators setting in tsconfig.
- We can apply more than one decorator to a class or its members. Multiple decorators
  are applied in the reverse order.

### 🟢 Cheat Sheet

**Class decorators**

```typescript
function Component(constructor: Function) {
  // Here we have a chance to modify members of
  // the target class.
  constructor.prototype.uniqueId = Date.now();
}

@Component
class ProfileComponent {}
```

**Parameterized decorators**

```typescript
function Component(value: number) {
  return (constructor: Function) => {
    // Here we have a chance to modify members of
    // the target class.
    constructor.prototype.uniqueId = Date.now();
  };
}
@Component(1)
class ProfileComponent {}
```

**Decorator composition**

```typescript
// Multiple decorators are applied in reverse order.
// Pipe followed by Component.
@Component
@Pipe
class ProfileComponent {}
```

**Method decorators**

```typescript
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // We get a reference to the original method
  const original = descriptor.value as Function;
  // Then, we redefine the method
  descriptor.value = function (...args: any) {
    // We have a chance to do something first
    console.log("Before");
    // Then, we call the original method
    original.call(this, ...args);
    // And we have a chance to do something after
    console.log("After");
  };
}
class Person {
  @Log
  say(message: string) {}
}
```

**Accessor decorators**

```typescript
function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original.call(this);
    return "newResult";
  };
}
class Person {
  @Capitalize
  get fullName() {}
}
```

**Property decorators**

```typescript
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    // We use this variable to hold the value behind the
    // target property.
    let value: string;
    // We create a descriptor for the target property.
    const descriptor: PropertyDescriptor = {
      // We're defining the setter for the target property.
      set(newValue: string) {
        if (newValue.length < length) throw new Error();
        value = newValue;
      },
    };
    // And finally, we redefine the property.
    Object.defineProperty(target, propertyName, descriptor);
  };
}
class User {
  @MinLength(4)
  password: string;
}
```
