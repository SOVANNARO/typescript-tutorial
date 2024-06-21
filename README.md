## TypeScript Tutorials

## 🟢 You'll learn
- Introduction to object-oriented programming
- Class
- Constructors
- Properties and methods
- Access control keywords
- Getter and setter
- Static members
- Index signature
- Inheritance
- Polymorphism
- Abstract class
- Interfaces

## 🟢 What is Object-Oriented Programming?
- Procedural
- Functional
- Object-oriented
- Event-driven
- Aspect-oriented
- ...

In TypeScript, a class is a blueprint for creating objects with specific properties and methods. Classes encapsulate data and behavior, making it easier to manage and organize code. Here's a basic example to illustrate how classes work in TypeScript:

### Example: Defining a Class in TypeScript

```typescript
class Person {
  // Properties
  private name: string;
  private age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  public greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  // Getter
  public getName(): string {
    return this.name;
  }

  // Setter
  public setName(name: string): void {
    this.name = name;
  }
}

// Creating an instance of the Person class
const person1 = new Person("John Doe", 30);

// Accessing methods
person1.greet(); // Output: Hello, my name is John Doe and I am 30 years old.

// Using getter and setter
console.log(person1.getName()); // Output: John Doe
person1.setName("Jane Doe");
console.log(person1.getName()); // Output: Jane Doe
```

### Explanation

1. **Class Definition**: The `Person` class is defined with two properties: `name` and `age`. These properties are marked as `private`, meaning they can only be accessed within the class.

2. **Constructor**: The constructor is a special method that is called when a new instance of the class is created. It initializes the properties of the class.

3. **Methods**: The `greet` method is a public method that prints a greeting message. The `getName` and `setName` methods are getter and setter methods for the `name` property.

4. **Creating an Instance**: An instance of the `Person` class is created using the `new` keyword. The constructor is called with the arguments "John Doe" and 30.

5. **Accessing Methods**: The `greet` method is called on the `person1` instance, which prints the greeting message. The `getName` and `setName` methods are used to get and set the `name` property.

### Access Modifiers

- **public**: The member is accessible from anywhere.
- **private**: The member is accessible only within the class.
- **protected**: The member is accessible within the class and its subclasses.

### Inheritance

TypeScript also supports inheritance, allowing you to create a new class that extends an existing class. Here's an example:

```typescript
class Employee extends Person {
  private employeeId: number;

  constructor(name: string, age: number, employeeId: number) {
    super(name, age); // Call the constructor of the base class
    this.employeeId = employeeId;
  }

  public getEmployeeId(): number {
    return this.employeeId;
  }
}

const employee1 = new Employee("Alice", 28, 12345);
employee1.greet(); // Output: Hello, my name is Alice and I am 28 years old.
console.log(employee1.getEmployeeId()); // Output: 12345
```

In this example, the `Employee` class extends the `Person` class, inheriting its properties and methods. The `super` keyword is used to call the constructor of the base class.

This should give you a good understanding of how classes work in TypeScript.

## 🟢 Creating an object
Creating an object in TypeScript involves defining a class or an interface and then instantiating it. Here are a few examples to illustrate different ways to create objects in TypeScript:

### Example 1: Creating an Object Using a Class

As shown in the previous example, you can create an object by defining a class and then instantiating it using the `new` keyword.

```typescript
// Define a class
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

// Create an instance of the class
const person1 = new Person("John Doe", 30);

// Access methods
person1.greet(); // Output: Hello, my name is John Doe and I am 30 years old.
console.log(person1.getName()); // Output: John Doe
person1.setName("Jane Doe");
console.log(person1.getName()); // Output: Jane Doe
```

### Example 2: Creating an Object Using an Interface

You can also create an object using an interface. An interface defines the structure of the object but does not provide implementation details.

```typescript
// Define an interface
interface Car {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Create an object that adheres to the interface
const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  start() {
    console.log(`Starting ${this.make} ${this.model} (${this.year})`);
  }
};

// Access properties and methods
console.log(myCar.make); // Output: Toyota
myCar.start(); // Output: Starting Toyota Corolla (2020)
```

### Example 3: Creating an Object Using a Type Alias

Type aliases can also be used to define the structure of an object.

```typescript
// Define a type alias
type Book = {
  title: string;
  author: string;
  pages: number;
  read(): void;
};

// Create an object that adheres to the type alias
const myBook: Book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  pages: 250,
  read() {
    console.log(`Reading ${this.title} by ${this.author}`);
  }
};

// Access properties and methods
console.log(myBook.title); // Output: TypeScript Handbook
myBook.read(); // Output: Reading TypeScript Handbook by Microsoft
```

### Example 4: Creating an Object Using an Object Literal

You can also create an object directly using an object literal.

```typescript
// Create an object using an object literal
const user = {
  username: "john_doe",
  email: "john@example.com",
  login() {
    console.log(`${this.username} has logged in.`);
  }
};

// Access properties and methods
console.log(user.username); // Output: john_doe
user.login(); // Output: john_doe has logged in.
```

### Summary

- **Class**: Provides a blueprint for creating objects with specific properties and methods.
- **Interface**: Defines the structure of an object without implementation details.
- **Type Alias**: Similar to an interface but used to define the structure of an object.
- **Object Literal**: Directly creates an object with properties and methods.

These examples should give you a good understanding of how to create objects in TypeScript using different approaches.

## 🟢 Read-only and optional Properties
In TypeScript, you can define properties in interfaces or classes as read-only or optional. These features help you enforce certain constraints and provide flexibility in your code.

### 🟢 Read-Only Properties

A read-only property is a property that can only be assigned a value once, either at the time of declaration or in the constructor. Once assigned, its value cannot be changed.

#### Example: Read-Only Properties

```typescript
class Person {
  // Read-only properties
  public readonly name: string;
  public readonly age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  public greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("John Doe", 30);
console.log(person1.name); // Output: John Doe
console.log(person1.age); // Output: 30

// Attempting to change read-only properties will result in a compile-time error
// person1.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
```

In this example, the `name` and `age` properties are marked as `readonly`, meaning their values cannot be changed after they are set in the constructor.

### 🟢 Optional Properties

An optional property is a property that may or may not be present in an object. Optional properties are denoted by a question mark (`?`) after the property name.

#### Example: Optional Properties

```typescript
interface Car {
  make: string;
  model: string;
  year: number;
  color?: string; // Optional property
}

const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
  // color is not required
};

const anotherCar: Car = {
  make: "Honda",
  model: "Civic",
  year: 2019,
  color: "Red" // Optional property provided
};

console.log(myCar.color); // Output: undefined
console.log(anotherCar.color); // Output: Red
```

In this example, the `color` property in the `Car` interface is optional. This means that objects adhering to the `Car` interface may or may not include the `color` property.

### Combining Read-Only and Optional Properties

You can also combine read-only and optional properties in the same interface or class.

#### Example: Combining Read-Only and Optional Properties

```typescript
interface Book {
  readonly title: string;
  readonly author: string;
  pages: number;
  publisher?: string; // Optional property
}

const myBook: Book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  pages: 250
  // publisher is not required
};

console.log(myBook.title); // Output: TypeScript Handbook
console.log(myBook.publisher); // Output: undefined

// Attempting to change read-only properties will result in a compile-time error
// myBook.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property.
```

In this example, the `title` and `author` properties are read-only, while the `publisher` property is optional.

### Summary

- **Read-Only Properties**: Properties that can only be assigned a value once and cannot be changed thereafter. They are defined using the `readonly` keyword.
- **Optional Properties**: Properties that may or may not be present in an object. They are denoted by a question mark (`?`) after the property name.

These features help you enforce constraints and provide flexibility in your TypeScript code, making it more robust and easier to maintain.

## 🟢 Access Control Method
Access control keywords in TypeScript are used to define the visibility and accessibility of class members (properties and methods). These keywords help encapsulate the internal state and behavior of a class, ensuring that only the intended parts of the class are accessible from outside. TypeScript provides three main access control keywords:

1. **public**: The member is accessible from anywhere.
2. **private**: The member is accessible only within the class.
3. **protected**: The member is accessible within the class and its subclasses.

### Example: Access Control Keywords

Let's illustrate the use of these access control keywords with an example:

```typescript
class Animal {
  // Public property
  public name: string;

  // Private property
  private age: number;

  // Protected property
  protected species: string;

  // Constructor
  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  // Public method
  public describe(): void {
    console.log(`This is a ${this.species} named ${this.name}.`);
  }

  // Private method
  private getAge(): number {
    return this.age;
  }

  // Protected method
  protected getSpecies(): string {
    return this.species;
  }

  // Method to demonstrate access to private method
  public showAge(): void {
    console.log(`${this.name} is ${this.getAge()} years old.`);
  }
}

class Dog extends Animal {
  // Constructor
  constructor(name: string, age: number) {
    super(name, age, "Dog");
  }

  // Method to demonstrate access to protected method
  public showSpecies(): void {
    console.log(`${this.name} is a ${this.getSpecies()}.`);
  }
}

const myDog = new Dog("Buddy", 5);

// Accessing public property and method
console.log(myDog.name); // Output: Buddy
myDog.describe(); // Output: This is a Dog named Buddy.

// Accessing private property and method (will cause an error)
// console.log(myDog.age); // Error: Property 'age' is private and only accessible within class 'Animal'.
// myDog.getAge(); // Error: Property 'getAge' is private and only accessible within class 'Animal'.

// Accessing protected property and method (will cause an error)
// console.log(myDog.species); // Error: Property 'species' is protected and only accessible within class 'Animal' and its subclasses.
// myDog.getSpecies(); // Error: Property 'getSpecies' is protected and only accessible within class 'Animal' and its subclasses.

// Accessing public method that uses private method
myDog.showAge(); // Output: Buddy is 5 years old.

// Accessing public method that uses protected method
myDog.showSpecies(); // Output: Buddy is a Dog.
```

### Explanation

1. **Public Members**:
    - The `name` property and the `describe` method are marked as `public`, meaning they can be accessed from anywhere, including outside the class.
    - Example: `console.log(myDog.name);` and `myDog.describe();`.

2. **Private Members**:
    - The `age` property and the `getAge` method are marked as `private`, meaning they can only be accessed within the `Animal` class.
    - Attempting to access them from outside the class will result in a compile-time error.
    - Example: `console.log(myDog.age);` and `myDog.getAge();` will cause errors.

3. **Protected Members**:
    - The `species` property and the `getSpecies` method are marked as `protected`, meaning they can be accessed within the `Animal` class and its subclasses (e.g., `Dog`).
    - Attempting to access them from outside the class or subclass will result in a compile-time error.
    - Example: `console.log(myDog.species);` and `myDog.getSpecies();` will cause errors.

4. **Demonstrating Access**:
    - The `showAge` method is a public method that internally calls the private `getAge` method, demonstrating how private members can be used within the class.
    - The `showSpecies` method is a public method in the `Dog` subclass that internally calls the protected `getSpecies` method, demonstrating how protected members can be accessed within subclasses.

### Summary

- **public**: Members are accessible from anywhere.
- **private**: Members are accessible only within the class.
- **protected**: Members are accessible within the class and its subclasses.

These access control keywords help you encapsulate and protect the internal state and behavior of your classes, making your code more robust and maintainable.

## 🟢 Parameter Properties
Parameter properties in TypeScript provide a shorthand way to declare and initialize class properties directly within the constructor parameters. This feature allows you to avoid redundant code by combining property declaration and initialization into a single step.

### Example: Parameter Properties

Let's illustrate the use of parameter properties with an example:

```typescript
class Person {
  // Using parameter properties to declare and initialize properties
  constructor(
    public name: string, // Public property
    private age: number, // Private property
    protected address: string // Protected property
  ) {}

  // Method to display person's details
  public displayDetails(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
  }
}

// Creating an instance of the Person class
const person1 = new Person("John Doe", 30, "123 Main St");

// Accessing public property
console.log(person1.name); // Output: John Doe

// Accessing private property (will cause an error)
// console.log(person1.age); // Error: Property 'age' is private and only accessible within class 'Person'.

// Accessing protected property (will cause an error)
// console.log(person1.address); // Error: Property 'address' is protected and only accessible within class 'Person' and its subclasses.

// Using a method to display details
person1.displayDetails(); // Output: Name: John Doe, Age: 30, Address: 123 Main St
```

### Explanation

1. **Parameter Properties**:
    - In the constructor, the parameters `name`, `age`, and `address` are prefixed with access modifiers (`public`, `private`, and `protected` respectively).
    - This automatically declares these parameters as properties of the class and initializes them with the provided values.

2. **Access Modifiers**:
    - `public name: string`: Declares a public property `name` that can be accessed from anywhere.
    - `private age: number`: Declares a private property `age` that can only be accessed within the class.
    - `protected address: string`: Declares a protected property `address` that can be accessed within the class and its subclasses.

3. **Creating an Instance**:
    - An instance of the `Person` class is created using the `new` keyword, and the constructor parameters are passed to initialize the properties.

4. **Accessing Properties**:
    - The public property `name` can be accessed directly.
    - Attempting to access the private property `age` or the protected property `address` from outside the class will result in a compile-time error.

5. **Using Methods**:
    - The `displayDetails` method is a public method that can access all the properties (public, private, and protected) within the class.

### Summary

- **Parameter Properties**: Provide a shorthand way to declare and initialize class properties directly within the constructor parameters.
- **Access Modifiers**: Can be used with parameter properties to control the visibility and accessibility of the properties (`public`, `private`, `protected`).

Parameter properties help reduce boilerplate code and make class definitions more concise and readable.

## 🟢 Getters and Setters
Getters and setters in TypeScript are special methods that provide a way to access and update the properties of a class. They allow you to control how a property is accessed and modified, providing encapsulation and validation logic if needed.

### Example: Getters and Setters

Let's illustrate the use of getters and setters with an example:

```typescript
class Person {
  // Private property
  private _name: string;
  private _age: number;

  // Constructor
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  public get name(): string {
    return this._name;
  }

  // Setter for name
  public set name(newName: string) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      console.error("Name cannot be empty.");
    }
  }

  // Getter for age
  public get age(): number {
    return this._age;
  }

  // Setter for age
  public set age(newAge: number) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Age must be a positive number.");
    }
  }

  // Method to display person's details
  public displayDetails(): void {
    console.log(`Name: ${this._name}, Age: ${this._age}`);
  }
}

// Creating an instance of the Person class
const person1 = new Person("John Doe", 30);

// Accessing properties using getters
console.log(person1.name); // Output: John Doe
console.log(person1.age); // Output: 30

// Modifying properties using setters
person1.name = "Jane Doe";
person1.age = 25;

// Displaying updated details
person1.displayDetails(); // Output: Name: Jane Doe, Age: 25

// Attempting to set invalid values
person1.name = ""; // Output: Name cannot be empty.
person1.age = -5; // Output: Age must be a positive number.
```

### Explanation

1. **Private Properties**:
    - The properties `_name` and `_age` are declared as private, meaning they cannot be accessed directly from outside the class.

2. **Getters**:
    - The `get name()` method is a getter for the `_name` property. It allows you to access the value of `_name` from outside the class.
    - The `get age()` method is a getter for the `_age` property. It allows you to access the value of `_age` from outside the class.

3. **Setters**:
    - The `set name(newName: string)` method is a setter for the `_name` property. It allows you to update the value of `_name` from outside the class. The setter includes validation logic to ensure the new name is not empty.
    - The `set age(newAge: number)` method is a setter for the `_age` property. It allows you to update the value of `_age` from outside the class. The setter includes validation logic to ensure the new age is a positive number.

4. **Creating an Instance**:
    - An instance of the `Person` class is created using the `new` keyword, and the constructor parameters are passed to initialize the properties.

5. **Accessing and Modifying Properties**:
    - The properties `_name` and `_age` are accessed using the getters `name` and `age`.
    - The properties `_name` and `_age` are modified using the setters `name` and `age`.

6. **Validation Logic**:
    - The setters include validation logic to ensure that invalid values are not assigned to the properties. If an invalid value is provided, an error message is logged to the console.

### Summary

- **Getters**: Provide a way to access the value of a property from outside the class.
- **Setters**: Provide a way to update the value of a property from outside the class, with the ability to include validation logic.
- **Encapsulation**: Getters and setters help encapsulate the internal state of a class, allowing you to control how properties are accessed and modified.

Using getters and setters in TypeScript helps you create more robust and maintainable code by providing controlled access to class properties.

## 🟢 Index Signatures
Index signatures in TypeScript allow you to define the shape of objects that can have dynamic keys. They are useful when you want to create objects with properties that are not known at compile time but share a common type for their values.

### Example: Index Signatures

Let's illustrate the use of index signatures with an example:

```typescript
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["Hello", "World"];

console.log(myArray[0]); // Output: Hello
console.log(myArray[1]); // Output: World
```

In this example, the `StringArray` interface uses an index signature to define that any property with a numeric key will have a string value.

### Example: Index Signatures with Dynamic Keys

Here's another example where we use index signatures to define an object with dynamic keys:

```typescript
interface Dictionary {
  [key: string]: string;
}

let myDictionary: Dictionary = {
  "name": "John Doe",
  "occupation": "Software Developer"
};

console.log(myDictionary["name"]); // Output: John Doe
console.log(myDictionary["occupation"]); // Output: Software Developer

// Adding a new key-value pair
myDictionary["location"] = "New York";
console.log(myDictionary["location"]); // Output: New York
```

In this example, the `Dictionary` interface uses an index signature to define that any property with a string key will have a string value.

### Explanation

1. **Index Signature Syntax**:
    - The syntax for an index signature is `[key: KeyType]: ValueType;`.
    - `KeyType` is the type of the keys (e.g., `string` or `number`).
    - `ValueType` is the type of the values associated with the keys.

2. **StringArray Example**:
    - The `StringArray` interface defines an index signature with `number` as the key type and `string` as the value type.
    - This allows you to create an array-like object where the keys are numeric indices and the values are strings.

3. **Dictionary Example**:
    - The `Dictionary` interface defines an index signature with `string` as the key type and `string` as the value type.
    - This allows you to create an object with dynamic string keys and string values.

4. **Adding and Accessing Properties**:
    - You can add new key-value pairs to an object with an index signature.
    - You can access the values using the keys, just like you would with a regular object.

### Summary

- **Index Signatures**: Allow you to define the shape of objects with dynamic keys.
- **Syntax**: `[key: KeyType]: ValueType;`.
- **Use Cases**: Useful for creating objects with properties that are not known at compile time but share a common type for their values.

Index signatures provide flexibility in defining the structure of objects with dynamic keys, making your TypeScript code more versatile and adaptable to different scenarios.

## 🟢 Static Members
In TypeScript, static members (properties and methods) belong to the class itself rather than to instances of the class. This means that you can access static members without creating an instance of the class. Static members are useful for defining utility functions, constants, or any functionality that is related to the class but not to any specific instance.

### Example: Static Members

Let's illustrate the use of static members with an example:

```typescript
class MathUtils {
  // Static property
  static PI: number = 3.14;

  // Static method
  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

// Accessing static property
console.log(MathUtils.PI); // Output: 3.14

// Accessing static method
console.log(MathUtils.calculateCircumference(5)); // Output: 31.400000000000002
```

### Explanation

1. **Static Property**:
    - The `PI` property is defined as `static`, which means it belongs to the `MathUtils` class itself.
    - You can access `MathUtils.PI` directly without creating an instance of the `MathUtils` class.

2. **Static Method**:
    - The `calculateCircumference` method is defined as `static`, which means it belongs to the `MathUtils` class itself.
    - You can call `MathUtils.calculateCircumference(radius)` directly without creating an instance of the `MathUtils` class.

3. **Usage**:
    - Static members are accessed using the class name, not through an instance of the class.
    - This makes static members ideal for utility functions and constants that are related to the class but not to any specific instance.

### Example: Static Members in a Class

Here's another example where we use static members in a class to keep track of the number of instances created:

```typescript
class Counter {
  // Static property to keep track of the number of instances
  static count: number = 0;

  // Constructor
  constructor() {
    Counter.count++;
  }

  // Static method to get the current count
  static getCount(): number {
    return Counter.count;
  }
}

// Creating instances of the Counter class
const counter1 = new Counter();
const counter2 = new Counter();
const counter3 = new Counter();

// Accessing the static property and method
console.log(Counter.count); // Output: 3
console.log(Counter.getCount()); // Output: 3
```

### Explanation

1. **Static Property**:
    - The `count` property is defined as `static`, which means it belongs to the `Counter` class itself.
    - It keeps track of the number of instances created.

2. **Constructor**:
    - Each time a new instance of the `Counter` class is created, the `count` property is incremented.

3. **Static Method**:
    - The `getCount` method is defined as `static`, which means it belongs to the `Counter` class itself.
    - It returns the current value of the `count` property.

4. **Usage**:
    - Static members are accessed using the class name, not through an instance of the class.
    - This makes static members ideal for keeping track of class-level information, such as the number of instances created.

### Summary

- **Static Members**: Belong to the class itself rather than to instances of the class.
- **Static Property**: Accessed using the class name, useful for defining constants or class-level information.
- **Static Method**: Accessed using the class name, useful for defining utility functions or class-level operations.

Using static members in TypeScript helps you create more organized and maintainable code by providing a way to define class-level properties and methods.

## Inheritance
Inheritance is a fundamental concept in object-oriented programming that allows a class to inherit properties and methods from another class. In TypeScript, you can use the `extends` keyword to create a subclass (child class) that inherits from a superclass (parent class).

### Example: Inheritance

Let's illustrate the concept of inheritance with an example:

```typescript
// Base class (Parent class)
class Animal {
  // Properties
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

// Derived class (Child class)
class Dog extends Animal {
  // Additional property
  breed: string;

  // Constructor
  constructor(name: string, age: number, breed: string) {
    // Call the constructor of the parent class
    super(name, age);
    this.breed = breed;
  }

  // Overriding the makeSound method
  makeSound(): void {
    console.log(`${this.name} barks.`);
  }

  // Additional method
  fetch(): void {
    console.log(`${this.name} is fetching.`);
  }
}

// Creating an instance of the Dog class
const myDog = new Dog("Buddy", 3, "Golden Retriever");

// Accessing properties and methods
console.log(myDog.name); // Output: Buddy
console.log(myDog.age); // Output: 3
console.log(myDog.breed); // Output: Golden Retriever

myDog.makeSound(); // Output: Buddy barks.
myDog.fetch(); // Output: Buddy is fetching.
```

### Explanation

1. **Base Class (Parent Class)**:
    - The `Animal` class is the base class with properties `name` and `age`, and a method `makeSound`.
    - The constructor initializes the `name` and `age` properties.

2. **Derived Class (Child Class)**:
    - The `Dog` class extends the `Animal` class, inheriting its properties and methods.
    - The `Dog` class adds an additional property `breed` and a method `fetch`.
    - The constructor of the `Dog` class calls the constructor of the `Animal` class using the `super` keyword to initialize the inherited properties.

3. **Method Overriding**:
    - The `Dog` class overrides the `makeSound` method to provide a specific implementation for dogs.
    - When `makeSound` is called on an instance of the `Dog` class, the overridden method is executed.

4. **Creating an Instance**:
    - An instance of the `Dog` class is created using the `new` keyword, and the constructor parameters are passed to initialize the properties.

5. **Accessing Properties and Methods**:
    - The properties `name`, `age`, and `breed` are accessed directly.
    - The methods `makeSound` and `fetch` are called on the instance of the `Dog` class.

### Summary

- **Inheritance**: Allows a class to inherit properties and methods from another class using the `extends` keyword.
- **Base Class**: The class that is being inherited from (parent class).
- **Derived Class**: The class that inherits from the base class (child class).
- **Method Overriding**: Allows a derived class to provide a specific implementation of a method that is already defined in the base class.
- **super Keyword**: Used to call the constructor and methods of the base class from the derived class.

Inheritance helps you create a hierarchical class structure, promoting code reuse and making your code more organized and maintainable.

## 🟢 Method Overriding
Method overriding is a feature in object-oriented programming that allows a subclass (child class) to provide a specific implementation of a method that is already defined in its superclass (parent class). The method in the subclass should have the same name, return type, and parameters as the method in the superclass.

### Example: Method Overriding

Let's illustrate method overriding with an example:

```typescript
// Base class (Parent class)
class Animal {
  // Properties
  name: string;
  age: number;

  // Constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Method
  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

// Derived class (Child class)
class Dog extends Animal {
  // Additional property
  breed: string;

  // Constructor
  constructor(name: string, age: number, breed: string) {
    // Call the constructor of the parent class
    super(name, age);
    this.breed = breed;
  }

  // Overriding the makeSound method
  makeSound(): void {
    console.log(`${this.name} barks.`);
  }

  // Additional method
  fetch(): void {
    console.log(`${this.name} is fetching.`);
  }
}

// Creating an instance of the Dog class
const myDog = new Dog("Buddy", 3, "Golden Retriever");

// Accessing properties and methods
console.log(myDog.name); // Output: Buddy
console.log(myDog.age); // Output: 3
console.log(myDog.breed); // Output: Golden Retriever

myDog.makeSound(); // Output: Buddy barks.
myDog.fetch(); // Output: Buddy is fetching.
```

### Explanation

1. **Base Class (Parent Class)**:
    - The `Animal` class is the base class with properties `name` and `age`, and a method `makeSound`.
    - The constructor initializes the `name` and `age` properties.
    - The `makeSound` method prints a generic message indicating that the animal makes a sound.

2. **Derived Class (Child Class)**:
    - The `Dog` class extends the `Animal` class, inheriting its properties and methods.
    - The `Dog` class has an additional property `breed`.
    - The constructor of the `Dog` class calls the constructor of the `Animal` class using the `super` keyword to initialize the inherited properties.
    - The `makeSound` method in the `Dog` class overrides the `makeSound` method in the `Animal` class to provide a specific implementation for dogs.
    - The `Dog` class also has an additional method `fetch`.

3. **Creating an Instance**:
    - An instance of the `Dog` class is created with the name "Buddy", age 3, and breed "Golden Retriever".
    - The overridden `makeSound` method in the `Dog` class is called, which prints "Buddy barks." instead of the generic message from the `Animal` class.

By overriding the `makeSound` method in the `Dog` class, we provide a specific implementation that is more appropriate for dogs, demonstrating the power and flexibility of method overriding in TypeScript.

## 🟢 Polymorphism
Polymorphism is a core concept in object-oriented programming that allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms (data types). In TypeScript, polymorphism is typically achieved through inheritance and interfaces.

### Example: Polymorphism

Let's illustrate polymorphism with an example:

```typescript
// Base class (Parent class)
class Animal {
  // Properties
  name: string;

  // Constructor
  constructor(name: string) {
    this.name = name;
  }

  // Method
  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

// Derived class (Child class)
class Dog extends Animal {
  // Overriding the makeSound method
  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

// Another derived class (Child class)
class Cat extends Animal {
  // Overriding the makeSound method
  makeSound(): void {
    console.log(`${this.name} meows.`);
  }
}

// Function to demonstrate polymorphism
function makeAnimalSound(animal: Animal): void {
  animal.makeSound();
}

// Creating instances of the derived classes
const myDog = new Dog("Buddy");
const myCat = new Cat("Whiskers");

// Using the function to demonstrate polymorphism
makeAnimalSound(myDog); // Output: Buddy barks.
makeAnimalSound(myCat); // Output: Whiskers meows.
```

### Explanation

1. **Base Class (Parent Class)**:
    - The `Animal` class is the base class with a property `name` and a method `makeSound`.
    - The `makeSound` method in the `Animal` class provides a generic implementation.

2. **Derived Classes (Child Classes)**:
    - The `Dog` class extends the `Animal` class and overrides the `makeSound` method to provide a specific implementation for dogs.
    - The `Cat` class extends the `Animal` class and overrides the `makeSound` method to provide a specific implementation for cats.

3. **Polymorphism in Action**:
    - The `makeAnimalSound` function accepts an argument of type `Animal`.
    - When `makeAnimalSound` is called with an instance of `Dog` or `Cat`, the overridden `makeSound` method in the respective class is executed.
    - This demonstrates polymorphism, where the same function call can result in different behaviors depending on the actual object type passed to it.

## 🟢 Private vs Protected Members
In TypeScript, both `private` and `protected` access modifiers are used to control the visibility of class members (properties and methods). However, they have different levels of accessibility:

1. **Private Members**:
    - Members marked as `private` can only be accessed within the class they are declared in.
    - They are not accessible from outside the class or from any derived (subclass) classes.

2. **Protected Members**:
    - Members marked as `protected` can be accessed within the class they are declared in and by any subclasses (derived classes).
    - They are not accessible from outside the class hierarchy.

### Example

```typescript
class Animal {
  // Public property
  public name: string;

  // Private property
  private age: number;

  // Protected property
  protected species: string;

  // Constructor
  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  // Public method
  public describe(): void {
    console.log(`This is a ${this.species} named ${this.name}.`);
  }

  // Private method
  private getAge(): number {
    return this.age;
  }

  // Protected method
  protected getSpecies(): string {
    return this.species;
  }

  // Method to demonstrate access to private method
  public showAge(): void {
    console.log(`${this.name} is ${this.getAge()} years old.`);
  }
}

class Dog extends Animal {
  // Constructor
  constructor(name: string, age: number) {
    super(name, age, "Dog");
  }

  // Method to demonstrate access to protected method
  public showSpecies(): void {
    console.log(`${this.name} is a ${this.getSpecies()}.`);
  }
}

const myDog = new Dog("Buddy", 5);

// Accessing public property and method
console.log(myDog.name); // Output: Buddy
myDog.describe(); // Output: This is a Dog named Buddy.

// Accessing private property and method (will cause an error)
// console.log(myDog.age); // Error: Property 'age' is private and only accessible within class 'Animal'.
// myDog.getAge(); // Error: Property 'getAge' is private and only accessible within class 'Animal'.

// Accessing protected property and method (will cause an error)
// console.log(myDog.species); // Error: Property 'species' is protected and only accessible within class 'Animal' and its subclasses.
// myDog.getSpecies(); // Error: Property 'getSpecies' is protected and only accessible within class 'Animal' and its subclasses.

// Accessing public method that uses private method
myDog.showAge(); // Output: Buddy is 5 years old.

// Accessing public method that uses protected method
myDog.showSpecies(); // Output: Buddy is a Dog.
```

### Summary

- **Private Members**: Accessible only within the class they are declared in.
- **Protected Members**: Accessible within the class they are declared in and by subclasses.

## 🟢 Abstract Class and Methods
### Abstract Class and Methods in TypeScript

In TypeScript, an abstract class is a class that cannot be instantiated directly. It is designed to be a base class for other classes to extend. Abstract classes can contain abstract methods, which are methods that do not have an implementation in the abstract class and must be implemented in derived classes.

#### Key Points:
1. **Abstract Class**: A class that cannot be instantiated and is meant to be extended by other classes.
2. **Abstract Method**: A method declared in an abstract class without an implementation. Derived classes must provide an implementation for these methods.

### Example: Abstract Class and Methods

```typescript
// Abstract class
abstract class Animal {
  // Abstract method (must be implemented in derived classes)
  abstract makeSound(): void;

  // Concrete method
  move(): void {
    console.log("Moving...");
  }
}

// Derived class (Child class)
class Dog extends Animal {
  // Implementing the abstract method
  makeSound(): void {
    console.log("Bark");
  }
}

// Derived class (Child class)
class Cat extends Animal {
  // Implementing the abstract method
  makeSound(): void {
    console.log("Meow");
  }
}

// Creating instances of the derived classes
const myDog = new Dog();
const myCat = new Cat();

// Calling methods
myDog.makeSound(); // Output: Bark
myDog.move();      // Output: Moving...

myCat.makeSound(); // Output: Meow
myCat.move();      // Output: Moving...
```

### Explanation

1. **Abstract Class**:
   - The `Animal` class is declared as `abstract` using the `abstract` keyword.
   - It contains an abstract method `makeSound` which does not have an implementation.
   - It also contains a concrete method `move` which has an implementation.

2. **Derived Classes**:
   - The `Dog` and `Cat` classes extend the `Animal` class.
   - Both classes provide an implementation for the `makeSound` method, which is required because `makeSound` is an abstract method in the `Animal` class.

3. **Creating Instances**:
   - Instances of the `Dog` and `Cat` classes are created using the `new` keyword.
   - The `makeSound` and `move` methods are called on these instances, demonstrating that the abstract method has been implemented in the derived classes and the concrete method is inherited from the abstract class.

### Summary

- **Abstract Class**: A class that cannot be instantiated and is intended to be a base class for other classes.
- **Abstract Method**: A method without an implementation in the abstract class that must be implemented in derived classes.
- **Concrete Method**: A method with an implementation in the abstract class that can be inherited by derived classes.

Abstract classes and methods are useful for defining a common interface for a group of related classes while allowing each derived class to provide its own specific implementation.

## 🟢 Interfaces
### Interfaces in TypeScript

In TypeScript, an interface is a way to define the structure of an object. It specifies the properties and methods that an object should have, but it does not provide implementations for the methods. Interfaces are used to define contracts within your code and to ensure that classes or objects adhere to specific structures.

### Example: Interface

```typescript
// Define an interface
interface Car {
  make: string;
  model: string;
  year: number;
  start(): void;
  stop(): void;
}

// Create an object that adheres to the interface
const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  start() {
    console.log(`Starting ${this.make} ${this.model} (${this.year})`);
  },
  stop() {
    console.log(`Stopping ${this.make} ${this.model} (${this.year})`);
  }
};

// Access properties and methods
console.log(myCar.make); // Output: Toyota
myCar.start();           // Output: Starting Toyota Corolla (2020)
myCar.stop();            // Output: Stopping Toyota Corolla (2020)
```

### Explanation

1. **Define an Interface**:
   - The `Car` interface is defined with properties `make`, `model`, and `year`, and methods `start` and `stop`.
   - Each property and method in the interface specifies the type of value it should hold or return.

2. **Create an Object Adhering to the Interface**:
   - The `myCar` object is created with properties and methods that match the `Car` interface.
   - The `start` and `stop` methods are implemented within the `myCar` object.

3. **Access Properties and Methods**:
   - The properties `make`, `model`, and `year` are accessed directly.
   - The `start` and `stop` methods are called, demonstrating that the object adheres to the structure defined by the `Car` interface.

### Summary

- **Interface**: Defines the structure of an object, including properties and methods.
- **Implementation**: Objects or classes that adhere to the interface must implement the properties and methods defined by the interface.
- **Usage**: Interfaces are used to ensure that objects or classes follow a specific structure, providing a contract for the code.

## Interfaces vs Types
In TypeScript, interfaces and type aliases can be used interchangeably.
Both can be used to describe the shape of an object:

**Interface**
```typescript
interface Person {
name: string;
}
```
```typescript
let person: Person = {
name: 'Mosh',
};
```

**Type**
```typescript
type Person = {
name: string;
};
```
```typescript
let person: Person = {
name: ‘Mosh',
};
```


A class can also implement an interface or a type alias:
```typescript
class MyCalendar extends MyInterface {}
class MyCalendar extends MyType {}
```

It’s more conventional to use an interface in front of the **extends** keyword, though.

## Summary
### Classes and Interfaces
#### Summary
- Object-oriented programming is one of the many programming paradigms (styles of
  programming) in which objects are the building blocks of applications.
- An object is a unit that contains some data represented by properties and operations
  represented by methods.
- A class is a blueprint for creating objects. The terms class and object are often used
  interchangeably.
- We use access modifiers (public, private, protected) to control access to properties and
  methods of a class.
- A constructor is a special method (function) within a class that is called when instances
  of that class are created. We use constructors to initialize properties of an object.
- Static members are accessed using the class name. We use them where we need a single
  instance of a class member (property or method) in memory.
- Inheritance allows a class to inherit and reuse members of another class. The providing
  class is called the parent, super or base class while the other class is called the child, sub or
  derived class.
- An abstract class is a class with partial implementation. Abstract classes cannot be
  instantiated and have to be inherited.
- We use interfaces to define the shape of objects.

## Cheat Sheet
**Classes and constructors**
```typescript
class Account {
id: number;
constructor(id: number) {
this.id = id;
}
}
let account = new Account(1);
```

**Accessing properties and methods**
```typescript
`account.id = 1;
account.deposit(10);`
```

**Read-only and optional properties**
```typescript
class Account {
readonly id: number;
nickname?: string;
}
```

**Access modifiers**
```typescript
class Account {
private _balance: number;
// Protected members are inherited.
// Private members are not.
protected _taxRate: number;
}
```

**Parameter properties**
```typescript
class Account {
// With parameter properties we can
// create and initialize properties in one place.
constructor(public id: number, private _balance: number) {
}
}
```

**Getters and setters**
```typescript
class Account {
private _balance = 0;
get balance(): number {
return this._balance;
}
set balance(value: number) {
if (value < 0)
throw new Error();
this._balance = value;
}
```

**Index signatures**
```typescript
class SeatAssignment {
// With index signature properties we can add
// properties to an object dynamically
// without losing type safety.
[seatNumber: string]: string;
}
let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats.A2 = 'John';
```

**Static members**
```typescript
class Ride {
static activeRides = 0;
}
Ride.activeRides++;
```

**Inheritance**
```typescript
class Student extends Person {
}
```

**Method overriding**
```typescript
class Student extends Person {
override speak() {
console.log('Student speaking');
}
}
```

**Abstract classes and methods**
```typescript
abstract class Shape {
// Abstract methods don't have a body
abstract render();
}
class Circle extends Shape {
override render() {
console.log('Rendering a circle');
}
}
```

**Interfaces**
```typescript
interface Calendar {
name: string;
addEvent(): void;
}
class GoogleCalendar implements Calendar {
}
```

### Compiler Options
- **noImplicitOverride**: When enabled, then compiler will warn us if we try to
  override a method without using the override
  keyword.


## Exercises

- Define a class called Logger that takes the name of a file in its constructor and provides
  a method for writing messages to that file. Don’t worry about
- Given the Person class below, create a getter for getting the full name of a person.
```typescript
  class Person {
  constructor(public firstName: string, public lastName: string) {}
  }
```
- Create a new class called Employee that extends Person and adds a new property
  called salary.
- What is the difference between private and protected members?
- Given the data below, define an interface for representing employees:
```typescript
let employee = {
  name: 'John Smith',
  salary: 50_000,
  address: {
  street: 'Flinders st',
  city: 'Melbourne',
  zipCode: 3144,
  },
  };
```

## Solutions
- Define a class called Logger that takes the name of a file in its constructor and provides
  a method for writing messages to that file. Don’t worry about the actual file I/O
  operations. Just define the class with the right members.
```typescript
class Logger {
constructor(public logFile: string) {}
log(message: string) {}
}
```
- Given the Person class below, create a getter for getting the full name of a person.
```typescript
  class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
  return `${this.firstName} ${this.lastName}`;
  }
  }
```
- Create a new class called Employee that extends Person and adds a new property
  called salary.
```typescript
class Employee extends Person {
constructor(
firstName: string,
lastName: string,
public salary: number) {
super(firstName, lastName);
}
}
```
- What is the difference between private and protected members?
Private members are not inherited by child classes.
- Given the data below, define an interface for representing employees:
```typescript
interface Address {
street: string;
city: string;
zipCode: number;
}
interface Employee {
name: string;
salary: number;
address: Address;
}
```