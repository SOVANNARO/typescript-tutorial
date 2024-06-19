
// Type Aliases
type Student = {
  id: number;
  name: string;
  isEnrolled: boolean;
}

let student: Student = {
  id: 1,
  name: 'John',
  isEnrolled: true
}

function printStudent(student: Student) {
  console.log(student);
}

printStudent(student);

// Union Types
let id: number | string;

id = 101; // valid
id = "A101"; // also valid

function printId(id: number | string) {
  console.log(`ID: ${id}`);
}

function printId2(id: number | string) {
  if (typeof id ==='string')
    console.log(`ID: ${id.toUpperCase()}`);
  else
    console.log(`ID: ${id}`);
}

printId(101); // valid
printId("A101"); // also valid

printId2(101); // valid
printId2("A101"); // also valid

// Intersection Types
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeeDetails = Person & Employee;

let employee: EmployeeDetails = {
  name: "John Doe",
  age: 30,
  employeeId: 12345,
  department: "Engineering"
};

function printEmployeeDetails(employee: EmployeeDetails) {
  console.log(`Name: ${employee.name}`);
  console.log(`Age: ${employee.age}`);
  console.log(`Employee ID: ${employee.employeeId}`);
  console.log(`Department: ${employee.department}`);
}

printEmployeeDetails(employee);

// Literal Types
let direction: "North" | "South" | "East" | "West";

direction = "North"; // valid
direction = "South"; // valid
// direction = "Up"; // Error: Type '"Up"' is not assignable to type '"North" | "South" | "East" | "West"'.

function move(direction: "North" | "South" | "East" | "West") {
  console.log(`Moving ${direction}`);
}

move("East"); // valid
move("West"); // valid
// move("Up"); // Error: Argument of type '"Up"' is not assignable to parameter of type '"North" | "South" | "East" | "West"'.

let nameNulled: string | null;

nameNulled = "John Doe"; // valid
nameNulled = null; // valid
// name = undefined; // Error: Type 'undefined' is not assignable to type 'string | null'.

function printName(name: string | null) {
  if (name === null) {
    console.log("No name provided");
  } else {
    console.log(`Name: ${name}`);
  }
}

printName("John Doe"); // valid
printName(null); // valid

// Optional Chaining
type User = {
  name: string;
  address?: {
    street?: string;
    city?: string;
  };
};

let user: User = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
};

console.log(user.address?.street); // Output: 123 Main St

// Nullish Coalescing Operator
let userInput: string | null = null;
let defaultText: string = "Default Text";

let text = userInput ?? defaultText;
console.log(text); // Output: Default Text

// Type Assertions
let someValue: unknown = "Hello, TypeScript";

// Using 'as' syntax
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16

// Using angle-bracket syntax
let strLength2: number = (<string>someValue).length;

console.log(strLength2); // Output: 16

// unknown Type
let value: unknown;

value = "Hello, TypeScript";
console.log((value as string).toUpperCase()); // Output: HELLO, TYPESCRIPT

value = 42;
if (typeof value === "number") {
  console.log(value.toFixed(2)); // Output: 42.00
}

value = true;
if (typeof value === "boolean") {
  console.log(value ? "Yes" : "No"); // Output: Yes
}

// never Type
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}