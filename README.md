## TypeScript Tutorial
## Advanced Types

### You'll learn
- Type aliases
- Unions and intersections
- Type narrowing
- Nullable types
- The unknown type
- The never type

### Type Aliases
Type aliases in TypeScript allow you to create a new name for an existing type. This can make your code more readable and easier to manage, especially when dealing with complex types.

### Example
Here's an example of how to use type aliases:

```typescript
// Type Aliases
type Student = {
  id: number;
  name: string;
  isEnrolled: boolean;
};

let student: Student = {
  id: 1,
  name: "John Doe",
  isEnrolled: true
};

function printStudent(student: Student) {
  console.log(student);
}

printStudent(student);
```

### Explanation
- `type Student = { ... }`: This creates a type alias named `Student` for an object type with properties `id`, `name`, and `isEnrolled`.
- `let student: Student = { ... }`: This declares a variable `student` of type `Student` and initializes it with an object that matches the `Student` type.
- `function printStudent(student: Student) { ... }`: This declares a function `printStudent` that takes a parameter `student` of type `Student`.

Type aliases help improve code readability and reusability by giving meaningful names to complex types.

## Union Types
Union types in TypeScript allow you to define a variable that can hold one of several types. This is useful when a value can be of multiple types, and you want to explicitly specify those possible types.

### Example
Here's an example of how to use union types:

```typescript
// Union Type
let id: number | string;

id = 101; // valid
id = "A101"; // also valid

function printId(id: number | string) {
  console.log(`ID: ${id}`);
}

printId(101); // valid
printId("A101"); // also valid
```

### Explanation
- `let id: number | string;`: This declares a variable `id` that can be either a `number` or a `string`.
- `id = 101;` and `id = "A101";`: Both assignments are valid because `id` can be either a `number` or a `string`.
- `function printId(id: number | string) { ... }`: This declares a function `printId` that takes a parameter `id` which can be either a `number` or a `string`.

Union types provide flexibility by allowing variables to hold multiple types, making your code more versatile.

### Intersection Types

Intersection types in TypeScript allow you to combine multiple types into one. This means that a value of an intersection type will have all the properties and methods of the combined types. Intersection types are useful when you want to merge multiple types into a single type that has all the characteristics of the combined types.

### Example
Here's an example of how to use intersection types:

```typescript
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
```

### Explanation
- `type Person = { ... }`: This defines a type alias `Person` with properties `name` and `age`.
- `type Employee = { ... }`: This defines a type alias `Employee` with properties `employeeId` and `department`.
- `type EmployeeDetails = Person & Employee;`: This creates an intersection type `EmployeeDetails` that combines `Person` and `Employee`. An `EmployeeDetails` object will have all the properties of both `Person` and `Employee`.
- `let employee: EmployeeDetails = { ... }`: This declares a variable `employee` of type `EmployeeDetails` and initializes it with an object that has all the properties required by both `Person` and `Employee`.
- `function printEmployeeDetails(employee: EmployeeDetails) { ... }`: This declares a function `printEmployeeDetails` that takes a parameter `employee` of type `EmployeeDetails` and logs its properties to the console.

Intersection types are powerful for creating types that need to satisfy multiple constraints, making your code more flexible and expressive.

### Literal Types

Literal types in TypeScript allow you to specify exact values a variable can hold. These can be string literals, number literals, or boolean literals. Literal types are useful for creating more precise and constrained types.

### Example
Here's an example of how to use literal types:

```typescript
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
```

### Explanation
- `let direction: "North" | "South" | "East" | "West";`: This declares a variable `direction` that can only hold one of the specified string literals: `"North"`, `"South"`, `"East"`, or `"West"`.
- `direction = "North";` and `direction = "South";`: Both assignments are valid because `direction` can be one of the specified string literals.
- `function move(direction: "North" | "South" | "East" | "West") { ... }`: This declares a function `move` that takes a parameter `direction` which can only be one of the specified string literals.

Literal types provide a way to enforce specific values for variables, making your code more predictable and type-safe.

### Nullable Types

In TypeScript, nullable types allow you to specify that a variable can hold a value of a certain type or `null` or `undefined`. This is useful when you want to explicitly indicate that a variable might not have a value.

### Example
Here's an example of how to use nullable types:

```typescript
let name: string | null;

name = "John Doe"; // valid
name = null; // valid
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
```

### Explanation
- `let name: string | null;`: This declares a variable `name` that can be either a `string` or `null`.
- `name = "John Doe";` and `name = null;`: Both assignments are valid because `name` can be either a `string` or `null`.
- `function printName(name: string | null) { ... }`: This declares a function `printName` that takes a parameter `name` which can be either a `string` or `null`.

Nullable types help you handle cases where a variable might not have a value, making your code more robust and type-safe.

### Null vs Undefined in TypeScript

In TypeScript, `null` and `undefined` are two distinct types that represent the absence of a value. Understanding the difference between them is crucial for writing robust and type-safe code.

#### `null`
- `null` is an assignment value that represents the intentional absence of any object value.
- It is typically used to indicate that a variable should be empty.

#### `undefined`
- `undefined` means a variable has been declared but has not yet been assigned a value.
- It is the default value for uninitialized variables.

### Example

```typescript
let value1: string | null = null;
let value2: string | undefined = undefined;

console.log(value1); // Output: null
console.log(value2); // Output: undefined

value1 = "Hello";
value2 = "World";

console.log(value1); // Output: Hello
console.log(value2); // Output: World
```

### Explanation
- `let value1: string | null;`: This declares a variable `value1` that can be either a `string` or `null`, and initializes it to `null`.
- `let value2: string | undefined;`: This declares a variable `value2` that can be either a `string` or `undefined`, and initializes it to `undefined`.
- `value1 = "Hello";` and `value2 = "World";`: Both variables are assigned string values, which are valid according to their types.

### Key Differences
- **Initialization**: `undefined` is the default value for uninitialized variables, while `null` is an assignment value that must be explicitly set.
- **Usage**: `null` is used to indicate the intentional absence of a value, whereas `undefined` indicates that a variable has been declared but not yet assigned a value.

Understanding these differences helps in writing clearer and more predictable TypeScript code.

### Optional Chaining

Optional chaining in TypeScript allows you to safely access deeply nested properties of an object without having to explicitly check if each reference in the chain is valid. If any reference in the chain is `null` or `undefined`, the expression short-circuits and returns `undefined`.

### Example

```typescript
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
console.log(user.address?.zipCode); // Output: undefined
```

### Explanation
- `type User = { ... }`: This defines a type alias `User` with an optional `address` property.
- `let user: User = { ... }`: This declares a variable `user` of type `User` and initializes it with an object.
- `user.address?.street`: This uses optional chaining to safely access the `street` property of `address`. If `address` is `undefined`, the expression returns `undefined` instead of throwing an error.
- `user.address?.zipCode`: This attempts to access a non-existent `zipCode` property. Since `zipCode` is not defined, the expression returns `undefined`.

Optional chaining helps prevent runtime errors when accessing properties of objects that may be `null` or `undefined`, making your code more robust and easier to read.

### Nullish Coalescing Operator

The nullish coalescing operator (`??`) in TypeScript is used to provide a default value when dealing with `null` or `undefined`. It is particularly useful when you want to assign a fallback value to a variable if the original value is `null` or `undefined`.

### Example

```typescript
let userInput: string | null = null;
let defaultText: string = "Default Text";

let text = userInput ?? defaultText;
console.log(text); // Output: Default Text
```

### Explanation
- `let userInput: string | null = null;`: This declares a variable `userInput` that can be either a `string` or `null`, and initializes it to `null`.
- `let defaultText: string = "Default Text";`: This declares a variable `defaultText` and initializes it with the string "Default Text".
- `let text = userInput ?? defaultText;`: This uses the nullish coalescing operator to assign `defaultText` to `text` if `userInput` is `null` or `undefined`. Since `userInput` is `null`, `text` is assigned the value of `defaultText`.
- `console.log(text);`: This logs the value of `text` to the console, which is "Default Text".

The nullish coalescing operator is a concise way to handle `null` or `undefined` values, ensuring that your variables have meaningful default values.

### Type Assertions in TypeScript

Type assertions in TypeScript allow you to override the inferred type of a variable or expression. This can be useful when you know more about the type of a value than TypeScript's type checker does. Type assertions do not perform any runtime checks or conversions; they simply tell the compiler to treat a value as a specific type.

### Example

```typescript
let someValue: unknown = "Hello, TypeScript";

// Using 'as' syntax
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 16

// Using angle-bracket syntax
let strLength2: number = (<string>someValue).length;

console.log(strLength2); // Output: 16
```

### Explanation
- `let someValue: unknown = "Hello, TypeScript";`: This declares a variable `someValue` of type `unknown` and initializes it with a string value.
- `let strLength: number = (someValue as string).length;`: This uses the `as` syntax to assert that `someValue` is of type `string`, allowing you to access the `length` property.
- `let strLength2: number = (<string>someValue).length;`: This uses the angle-bracket syntax to assert that `someValue` is of type `string`, allowing you to access the `length` property.

Both assertions tell the TypeScript compiler to treat `someValue` as a `string`, enabling you to access string-specific properties and methods.

### `unknown` Type in TypeScript

The `unknown` type in TypeScript is a type-safe counterpart to the `any` type. It represents any value, but unlike `any`, it requires you to perform type checks or assertions before performing operations on the value. This makes your code safer and more predictable.

### Example

```typescript
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
```

### Explanation
- `let value: unknown;`: This declares a variable `value` of type `unknown`.
- `value = "Hello, TypeScript";`: Assigns a string to `value`.
- `console.log((value as string).toUpperCase());`: Uses a type assertion to treat `value` as a string and calls the `toUpperCase` method.
- `value = 42;`: Assigns a number to `value`.
- `if (typeof value === "number") { ... }`: Checks if `value` is a number before calling the `toFixed` method.
- `value = true;`: Assigns a boolean to `value`.
- `if (typeof value === "boolean") { ... }`: Checks if `value` is a boolean before using it in a conditional expression.

The `unknown` type forces you to perform type checks or assertions, ensuring that you handle different types safely and appropriately.

### `never` Type in TypeScript

The `never` type in TypeScript represents values that never occur. It is used to indicate that a function never returns (e.g., it always throws an error or has an infinite loop) or that a variable is never true. The `never` type is useful for functions that are expected to never complete normally.

### Example

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}
```

### Explanation
- `function throwError(message: string): never { ... }`: This function takes a `message` parameter of type `string` and throws an error with that message. The return type is `never` because the function never returns a value; it always throws an error.
- `function infiniteLoop(): never { ... }`: This function contains an infinite loop and never returns. The return type is `never` because the function never completes normally.

The `never` type is a way to signal to the TypeScript compiler that certain code paths are not expected to produce a value, making your code more robust and type-safe.

## Summary
- Using a type alias we can create a new name (alias) for a type. We often use type aliases
  to create custom types.
- With union types, we can allow a variable to take one of many types (eg number |
  string).
- With intersection types, we can combine multiple types into one (eg Draggable &
  Resizable).
- Using optional chaining (?.) we can simplify our code and remove the need for null
  checks.
- Using the Nullish Coalescing Operator we can fallback to a default value when dealing
  with null/undefined objects.
- Sometimes we know more about the type of a variable than the TypeScript compiler. In
  those situations, we can use the as keyword to specify a different type than the one
  inferred by the compiler. This is called type assertion.
- The unknown type is the type-safe version of any. Similar to any, it can represent any
  value but we cannot perform any operations on an unknown type without first
  narrowing to a more specific type.
- The never type represents values that never occur. We often use them to annotate
  functions that never return or always throw an error.

## Cheat Sheet
### Type alias
```typescript
type Employee = {
id: number;
name: string;
retire: (date: Date) => void
```

### Union types
```typescript
let weight: number | string = 1;
weight = '1kg';
```

### Intersection types
```typescript
type UIWidget = Draggable & Droppable;
```

### Literal types
```typescript
type Quantity = 50 | 100;
```

### Nullable types
```typescript
let name: string | null = null;

Optional chaining (?.)
customer?.birthdate?.getFullYear();
customers?.[0];
log?.('message');
```

### Nullish coalescing operator
```typescript
someValue ?? 30
```

### Type assertion
```typescript
obj as Person
```

### The unknown type
```typescript
function render(document: unknown) {
// We have to narrow down to a specific
// type before we can perform any operations
// on an unknown type.
if (typeof document === 'string') {
}
}
```

### The never type
```typescript
function processEvents(): never {
// This function never returns because
// it has an infinite loop.
while (true) {}
}
```

## Compiler Options
- **strictNullChecks**: When enabled, null and undefined will not be
  acceptable values for variables unless you explicitly
  declare them as nullable. So, you’ll get an error if you
  set a variable to null or undefined.
- **allowUnreachableCode**: When set the false, reports error about unreachable
code.

## Exercises
- Given the data below, define a type alias for representing users.
```typescript
let users = [
{
name: 'John Smith',
age: 30,
occupation: 'Software engineer'
},
{
name: 'Kate Müller',
age: 28
}
];
```
- Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
- Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”,
  etc.
- Simplify the following code snippets:
```typescript
  let user = getUser();
  console.log(user && user.address ? user.address.street : undefined);

  let x = foo !== null && foo !== undefined ? foo : bar();
```
- What is the problem in this piece of code?
```typescript
  let value: unknown = 'a';
  console.log(value.toUpperCase());
```

## Solutions
- Given the data below, define a type alias for representing users.
```typescript
type User = {
  name: string;
  age: number;
  occupation?: string;
  };
```
- Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these
```typescript
  type Bird = {
  fly: () => void;
  };
  type Fish = {
  swim: () => void;
  };
  type Pet = Bird | Fish;
```
- Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”,
  etc.
```typescript
  type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' |
  ‘Friday' | 'Saturday' | 'Sunday';
```
- Simplify the following code snippets:
```typescript
  let user = getUser();
  console.log(user?.address?.street);

  let x = foo ?? bar();
```
- What is the problem in this piece of code?

value is declared as an unknown type. In order to call methods on an unknown object,
we have to use type narrowing first:

```typescript
let value: unknown = 'a';
if (typeof value === 'string')
console.log(value.toUpperCase());
```