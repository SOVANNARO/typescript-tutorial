
// 🔴 create a new class called Person
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

// 🔴 Creating an instance of the Person class
const person1 = new Person("John Doe", 30);

// Accessing methods
person1.greet(); // Output: Hello, my name is John Doe and I am 30 years old.

// Using getter and setter
console.log(person1.getName()); // Output: John Doe
person1.setName("Jane Doe");
console.log(person1.getName()); // Output: Jane Doe

// Creating an Object Using an Interface
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

// Creating an Object Using a Type Alias
// Define a type alias
type BookObject = {
  title: string;
  author: string;
  pages: number;
  read(): void;
};

// Create an object that adheres to the type alias
const myBook: BookObject = {
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


// 🔴 Create an object using an object literal
const user = {
  username: "john_doe",
  email: "john@example.com",
  login() {
    console.log(`${this.username} has logged in.`);
  }
};

// 🔴 Access properties and methods
console.log(user.username); // Output: john_doe
user.login(); // Output: john_doe has logged in.

// 🔴 Read-Only Properties
class PersonReadOnly {
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

const personReadOnly = new PersonReadOnly("John Doe", 30);
console.log(personReadOnly.name); // Output: John Doe
console.log(personReadOnly.age); // Output: 30

// Attempting to change read-only properties will result in a compile-time error
// person1.name = "Jane Doe"; // Error: Cannot assign to 'name' because it is a read-only property.

// 🔴 Optional Properties
interface CarOptional {
  make: string;
  model: string;
  year: number;
  color?: string; // Optional property
}

const myCarOptional: CarOptional = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
  // color is not required
};

const anotherCarOptional: CarOptional = {
  make: "Honda",
  model: "Civic",
  year: 2019,
  color: "Red" // Optional property provided
};

console.log(myCarOptional.color); // Output: undefined
console.log(anotherCarOptional.color); // Output: Red

// Combining Read-Only and Optional Properties
interface Book {
  readonly title: string;
  readonly author: string;
  pages: number;
  publisher?: string; // Optional property
}

const myBookOptional: Book = {
  title: "TypeScript Handbook",
  author: "Microsoft",
  pages: 250
  // publisher is not required
};

console.log(myBookOptional.title); // Output: TypeScript Handbook
console.log(myBookOptional.publisher); // Output: undefined

// Attempting to change read-only properties will result in a compile-time error
// myBook.title = "New Title"; // Error: Cannot assign to 'title' because it is a read-only property.

// 🔴 Access Control Keywords
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

// 🔴 Parameter Properties
class PersonParameter {
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
const personParameter = new PersonParameter("John Doe", 30, "123 Main St");

// Accessing public property
console.log(personParameter.name); // Output: John Doe

// Accessing private property (will cause an error)
// console.log(person1.age); // Error: Property 'age' is private and only accessible within class 'Person'.

// Accessing protected property (will cause an error)
// console.log(person1.address); // Error: Property 'address' is protected and only accessible within class 'Person' and its subclasses.

// Using a method to display details
personParameter.displayDetails(); // Output: Name: John Doe, Age: 30, Address: 123 Main St

// 🔴 Example: Getters and Setters
class PersonGettersSetters {
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
const personGettersSetters = new PersonGettersSetters("John Doe", 30);

// Accessing properties using getters
console.log(personGettersSetters.name); // Output: John Doe
console.log(personGettersSetters.age); // Output: 30

// Modifying properties using setters
personGettersSetters.name = "Jane Doe";
personGettersSetters.age = 25;

// Displaying updated details
personGettersSetters.displayDetails(); // Output: Name: Jane Doe, Age: 25

// Attempting to set invalid values
personGettersSetters.name = ""; // Output: Name cannot be empty.
personGettersSetters.age = -5; // Output: Age must be a positive number.

// 🔴 Index Signatures
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ["Hello", "World"];

console.log(myArray[0]); // Output: Hello
console.log(myArray[1]); // Output: World

// 🔴 Index Signatures with Dynamic Keys
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

// 🔴 Example: Static Members
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

// 🔴 Example: Static Members in a Class
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

// 🔴 Inheritance
// Base class (Parent class)
class AnimalInheritance {
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
class DogInheritance extends AnimalInheritance {
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
const myDogInheritance = new DogInheritance("Buddy", 3, "Golden Retriever");

// Accessing properties and methods
console.log(myDogInheritance.name); // Output: Buddy
console.log(myDogInheritance.age); // Output: 3
console.log(myDogInheritance.breed); // Output: Golden Retriever

myDogInheritance.makeSound(); // Output: Buddy barks.
myDogInheritance.fetch(); // Output: Buddy is fetching.

// Method Overriding
// Base class (Parent class)
class AnimalMethodOverriding {
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
class DogMethodOverriding extends AnimalMethodOverriding {
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
const myDogMethodOverriding = new DogMethodOverriding("Buddy", 3, "Golden Retriever");

// Accessing properties and methods
console.log(myDogMethodOverriding.name); // Output: Buddy
console.log(myDogMethodOverriding.age); // Output: 3
console.log(myDogMethodOverriding.breed); // Output: Golden Retriever

myDogMethodOverriding.makeSound(); // Output: Buddy barks.
myDogMethodOverriding.fetch(); // Output: Buddy is fetching.

// 🔴 Polymorphism
// Base class (Parent class)
class AnimalPolymorphism {
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
class DogPolymorphism extends AnimalPolymorphism {
  // Overriding the makeSound method
  makeSound(): void {
    console.log(`${this.name} barks.`);
  }
}

// Another derived class (Child class)
class Cat extends AnimalPolymorphism {
  // Overriding the makeSound method
  makeSound(): void {
    console.log(`${this.name} meows.`);
  }
}

// Function to demonstrate polymorphism
function makeAnimalSound(animal: AnimalPolymorphism): void {
  animal.makeSound();
}

// Creating instances of the derived classes
const myDogPolymorphism = new AnimalPolymorphism("Buddy");
const myCat = new Cat("Whiskers");

// Using the function to demonstrate polymorphism
makeAnimalSound(myDogPolymorphism); // Output: Buddy barks.
makeAnimalSound(myCat); // Output: Whiskers meows.

// 🔴 Private vs Protected Members
class AnimalPrivateVsProtected {
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

class DogPrivateVsProtected extends AnimalPrivateVsProtected {
  // Constructor
  constructor(name: string, age: number) {
    super(name, age, "Dog");
  }

  // Method to demonstrate access to protected method
  public showSpecies(): void {
    console.log(`${this.name} is a ${this.getSpecies()}.`);
  }
}

const myDogPrivateVsProtected = new Dog("Buddy", 5);

// Accessing public property and method
console.log(myDogPrivateVsProtected.name); // Output: Buddy
myDog.describe(); // Output: This is a Dog named Buddy.

// Accessing private property and method (will cause an error)
// console.log(myDog.age); // Error: Property 'age' is private and only accessible within class 'Animal'.
// myDog.getAge(); // Error: Property 'getAge' is private and only accessible within class 'Animal'.

// Accessing protected property and method (will cause an error)
// console.log(myDog.species); // Error: Property 'species' is protected and only accessible within class 'Animal' and its subclasses.
// myDog.getSpecies(); // Error: Property 'getSpecies' is protected and only accessible within class 'Animal' and its subclasses.

// Accessing public method that uses private method
myDogPrivateVsProtected.showAge(); // Output: Buddy is 5 years old.

// Accessing public method that uses protected method
myDogPrivateVsProtected.showSpecies(); // Output: Buddy is a Dog.

// 🔴 Abstract Class and Methods
// Abstract class
abstract class AnimalAbstractClass {
  // Abstract method (must be implemented in derived classes)
  abstract makeSound(): void;

  // Concrete method
  move(): void {
    console.log("Moving...");
  }
}

// Derived class (Child class)
class DogAbstract extends AnimalAbstractClass {
  // Implementing the abstract method
  makeSound(): void {
    console.log("Bark");
  }
}

// Derived class (Child class)
class CatAbstract extends AnimalAbstractClass {
  // Implementing the abstract method
  makeSound(): void {
    console.log("Meow");
  }
}

// Creating instances of the derived classes
const myDogAbstract = new DogAbstract();
const myCatAbstract = new CatAbstract();

// Calling methods
myDogAbstract.makeSound(); // Output: Bark
myDogAbstract.move();      // Output: Moving...

myCatAbstract.makeSound(); // Output: Meow
myCatAbstract.move();      // Output: Moving...

// 🔴 Interfaces
// Define an interface
interface CarInterface {
  make: string;
  model: string;
  year: number;
  start(): void;
  stop(): void;
}

// Create an object that adheres to the interface
const myCarInterface: CarInterface = {
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
console.log(myCarInterface.make); // Output: Toyota
myCarInterface.start();           // Output: Starting Toyota Corolla (2020)
myCarInterface.stop();            // Output: Stopping Toyota Corolla (2020)