## TypeScript Tutorial

## Fundamentals
### You'll learn
- The any Type
- Arrays
- Tuples
- Enums
- Functions
- Objects

## Built-in Types
- JavaScript
  - number
  - string
  - boolean
  - null
  - undefined
  - object
- TypeScript
  - any
  - unknown
  - never
  - enum
  - tuple

### Array
In TypeScript, `string[]` and `Array<string>` are two syntaxes for defining an array of strings. They are functionally equivalent and can be used interchangeably. The difference lies mainly in the syntax and readability preferences:

- `string[]`: This is a shorthand syntax for defining an array of strings. It is concise and often preferred for its simplicity.
- `Array<string>`: This is a generic type syntax for defining an array of strings. It is more explicit and can be useful when working with more complex generic types.

Both syntaxes will result in the same type of array, and you can use either based on your coding style preference.

Here are examples of both syntaxes for defining an array of strings:

Using `string[]`:
```typescript
let courses: string[] = ["Angular", "React", "Vue"];
```

Using `Array<string>`:
```typescript
let courses: Array<string> = ["Angular", "React", "Vue"];
```

## Tuples
In TypeScript, a tuple is a special type of array that allows you to specify the types of elements at specific positions. Tuples are useful when you want to represent a fixed-size array with known types for each element.

Here's an explanation with an example based on the provided code:

### Tuple Definition
A tuple is defined by specifying the types of its elements in a specific order within square brackets `[]`.

### Example
In the provided code, the tuple `student` is defined as follows:
```typescript
let student: [number, string, boolean] = [1, "Angular", true];
```

### Explanation
- `student` is a tuple with three elements.
- The first element is of type `number` and has the value `1`.
- The second element is of type `string` and has the value `"Angular"`.
- The third element is of type `boolean` and has the value `true`.

Tuples enforce the order and types of elements, so if you try to change the order or types, TypeScript will throw an error. This makes tuples useful for representing structured data where the position and type of each element are known and fixed.

## Enums
In TypeScript, an `enum` (short for "enumeration") is a way to define a set of named constants. Enums allow you to define a collection of related values that can be numeric or string-based. They are useful for representing a fixed set of options or categories.

### Example
In the provided code, the `enum` `Level` is defined as follows:
```typescript
enum Level {
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3
}

let level: Level = Level.Intermediate;

reader(level);
```

### Explanation
- `enum Level`: This defines an enumeration named `Level` with three members: `Beginner`, `Intermediate`, and `Advanced`.
- `Beginner = 1`: The `Beginner` member is assigned the numeric value `1`.
- `Intermediate = 2`: The `Intermediate` member is assigned the numeric value `2`.
- `Advanced = 3`: The `Advanced` member is assigned the numeric value `3`.

Enums provide a way to give more meaningful names to sets of numeric values. In this example, instead of using plain numbers to represent levels, you use descriptive names like `Beginner`, `Intermediate`, and `Advanced`.

### Usage
- `let level: Level = Level.Intermediate;`: This declares a variable `level` of type `Level` and assigns it the value `Level.Intermediate`, which corresponds to the numeric value `2`.

Enums help make your code more readable and maintainable by providing meaningful names for sets of related values.

### Function
In TypeScript, functions are a fundamental building block for structuring code. They allow you to encapsulate logic, perform tasks, and return values. Functions in TypeScript can be typed to ensure that the inputs and outputs adhere to specific types, providing better type safety and code clarity.

### Example
In the provided code, the function `reader` is defined as follows:
```typescript
function reader(document: any) {
  console.log(document);
}
```

### Explanation
- `function reader(document: any)`: This declares a function named `reader` that takes a single parameter named `document` of type `any`.
  - `document: any`: The parameter `document` can be of any type. Using `any` is flexible but reduces type safety. In practice, you might want to use more specific types.
- `{ console.log(document); }`: The function body contains a single statement that logs the `document` parameter to the console.

### Usage
The `reader` function is called multiple times with different types of arguments:
```typescript
reader(students); // Logs the array of numbers
reader(courses);  // Logs the array of strings
reader(student);  // Logs the tuple
reader(level);    // Logs the enum value
```

### Key Points
- **Function Declaration**: Functions are declared using the `function` keyword followed by the function name, parameters, and body.
- **Parameter Types**: You can specify types for function parameters to ensure that the correct types are passed to the function.
- **Return Type**: You can also specify the return type of a function. In this example, the `reader` function does not return a value, so its return type is implicitly `void`.

Functions in TypeScript help organize code, enforce type safety, and make the code more readable and maintainable.In TypeScript, functions are a fundamental building block for structuring code. They allow you to encapsulate logic, perform tasks, and return values. Functions in TypeScript can be typed to ensure that the inputs and outputs adhere to specific types, providing better type safety and code clarity.

### Example
In the provided code, the function `reader` is defined as follows:
```typescript
function reader(document: any) {
  console.log(document);
}
```

### Explanation
- `function reader(document: any)`: This declares a function named `reader` that takes a single parameter named `document` of type `any`.
  - `document: any`: The parameter `document` can be of any type. Using `any` is flexible but reduces type safety. In practice, you might want to use more specific types.
- `{ console.log(document); }`: The function body contains a single statement that logs the `document` parameter to the console.

### Usage
The `reader` function is called multiple times with different types of arguments:
```typescript
reader(students); // Logs the array of numbers
reader(courses);  // Logs the array of strings
reader(student);  // Logs the tuple
reader(level);    // Logs the enum value
```

### Key Points
- **Function Declaration**: Functions are declared using the `function` keyword followed by the function name, parameters, and body.
- **Parameter Types**: You can specify types for function parameters to ensure that the correct types are passed to the function.
- **Return Type**: You can also specify the return type of a function. In this example, the `reader` function does not return a value, so its return type is implicitly `void`.

Functions in TypeScript help organize code, enforce type safety, and make the code more readable and maintainable.

### Object
In TypeScript, an object is a collection of key-value pairs where the keys are strings (or symbols) and the values can be of any type. Objects are used to group related data and functions together.

### Example
Let's define an object to represent a student with properties such as `id`, `name`, and `isEnrolled`.

```typescript
let studentObject = {
  id: 1,
  name: "John Doe",
  isEnrolled: true
};

reader(studentObject);
```

### Explanation
- `let studentObject = { ... }`: This declares an object named `studentObject`.
- The object has three properties:
  - `id`: A number representing the student's ID.
  - `name`: A string representing the student's name.
  - `isEnrolled`: A boolean indicating whether the student is enrolled.

### Usage
The `studentObject` is passed to the `reader` function, which logs the object to the console.

Objects in TypeScript can also have their types explicitly defined using interfaces or type aliases, but the above example demonstrates a simple object definition and usage.

## Summary
- Since TypeScript is a superset of JavaScript, it includes all the built-in types in
  JavaScript (eg number, string, boolean, object, etc) as well as additional types (eg any,
  unknown, never, enum, tuple, etc).
- In TypeScript, we set the type of our variables by annotating them.
- The any type can represent any kind of value. It’s something we should avoid as much
  as possible because it defeats the purpose of using TypeScript in the first place. A
  variable of type any can take any kind of value!
- Tuples are fixed-length arrays where each element has a specific type. We often use
  them for representing two or three related values.
- Enums represent a list of related constants.