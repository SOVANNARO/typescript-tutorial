## TypeScript Tutorial

## 🟢 Generics

- Generic classes
- Generic functions
- Generic interfaces
- Generic constraints
- Type mapping

### Understanding the Problem

Understanding the problem that generics solve in TypeScript is crucial for leveraging their full potential. Generics allow you to create reusable components that can work with a variety of data types while maintaining type safety. Without generics, you might have to write multiple versions of the same function or class to handle different data types, leading to code duplication and reduced maintainability.

### The Problem

Consider a simple function that returns the first element of an array:

```typescript
function getFirstElement(arr: any[]): any {
  return arr[0];
}
```

This function works, but it has a significant drawback: it uses the `any` type, which means it loses type information. When you call this function, you don't get any type safety:

```typescript
const firstNumber = getFirstElement([1, 2, 3]); // firstNumber is of type 'any'
const firstString = getFirstElement(["a", "b", "c"]); // firstString is of type 'any'
```

In both cases, `firstNumber` and `firstString` are of type `any`, so you lose the benefits of TypeScript's type checking.

### The Solution: Generics

Generics allow you to create a function that can work with any data type while preserving type information. Here's how you can rewrite the `getFirstElement` function using generics:

```typescript
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

In this version, `T` is a type parameter that represents the type of elements in the array. When you call this function, TypeScript infers the type of `T` based on the argument you pass:

```typescript
const firstNumber = getFirstElement([1, 2, 3]); // firstNumber is of type 'number'
const firstString = getFirstElement(["a", "b", "c"]); // firstString is of type 'string'
```

Now, `firstNumber` is correctly inferred to be of type `number`, and `firstString` is inferred to be of type `string`. This provides type safety and better code maintainability.

### Another Example: Generic Classes

Generics are not limited to functions; you can also use them with classes. Here's an example of a generic class that represents a simple data container:

```typescript
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
```

In this example, `DataContainer` is a generic class that can hold any type of data. The type parameter `T` ensures that the type of data is preserved throughout the class.

### Conclusion

Generics in TypeScript solve the problem of writing reusable and type-safe code. They allow you to create functions, classes, and interfaces that can work with any data type while preserving type information. This leads to more maintainable and robust code.

### 🟢 Generic Classes in TypeScript

Generic classes in TypeScript allow you to create classes that can work with any data type while maintaining type safety. This is particularly useful when you want to create data structures or utility classes that can handle various types of data without duplicating code.

### Example: Generic Data Container

Let's consider a simple example of a generic class that acts as a container for any type of data.

```typescript
class DataContainer<T> {
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

// Using the generic class with different types
const numberContainer = new DataContainer<number>(123);
console.log(numberContainer.getData()); // Output: 123

numberContainer.setData(456);
console.log(numberContainer.getData()); // Output: 456

const stringContainer = new DataContainer<string>("Hello");
console.log(stringContainer.getData()); // Output: Hello

stringContainer.setData("World");
console.log(stringContainer.getData()); // Output: World
```

### Explanation

1. **Class Definition**:

   - `class DataContainer<T>`: The class `DataContainer` is defined with a generic type parameter `T`. This means that `T` can be any type, and it will be specified when an instance of the class is created.
   - `private data: T`: The class has a private property `data` of type `T`.
   - `constructor(data: T)`: The constructor takes an argument of type `T` and initializes the `data` property.
   - `getData(): T`: A method that returns the data of type `T`.
   - `setData(data: T): void`: A method that sets the data of type `T`.

2. **Using the Generic Class**:
   - `const numberContainer = new DataContainer<number>(123);`: An instance of `DataContainer` is created with the type parameter `number`. The `data` property is initialized with the value `123`.
   - `numberContainer.getData();`: The `getData` method returns the data, which is of type `number`.
   - `numberContainer.setData(456);`: The `setData` method updates the data to `456`.
   - Similarly, an instance of `DataContainer` is created with the type parameter `string`, and the methods work with string data.

### Benefits of Generic Classes

1. **Type Safety**: The type parameter `T` ensures that the class methods work with the specified type, providing compile-time type checking.
2. **Reusability**: The same class can be used with different data types, reducing code duplication.
3. **Maintainability**: Generic classes make the code more maintainable by centralizing the logic for handling different types of data.

### Conclusion

Generic classes in TypeScript are a powerful feature that allows you to create flexible and type-safe classes. By using generics, you can write reusable code that works with any data type, leading to more maintainable and robust applications.

## 🟢 Generic Function

In TypeScript, a generic function is a function that can operate on different types while maintaining type safety. Generics allow you to create reusable components that work with a variety of data types without sacrificing the benefits of type checking.

### Basic Example of a Generic Function

Here's a simple example of a generic function in TypeScript:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// Usage with different types
let output1 = identity<string>("Hello, TypeScript!");
let output2 = identity<number>(42);

console.log(output1); // Output: Hello, TypeScript!
console.log(output2); // Output: 42
```

In this example:

- `identity` is a generic function that takes a single argument `arg` of type `T` and returns a value of the same type `T`.
- The type parameter `T` allows the function to be flexible and work with any type.
- When calling the function, you can specify the type explicitly (e.g., `identity<string>("Hello, TypeScript!")`), or TypeScript can infer the type based on the argument provided.

### Generic Function with Multiple Type Parameters

You can also create generic functions with multiple type parameters. Here's an example:

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Usage with different types
let mergedObject = merge({ name: "Alice" }, { age: 30 });

console.log(mergedObject); // Output: { name: "Alice", age: 30 }
```

In this example:

- `merge` is a generic function that takes two arguments `obj1` of type `T` and `obj2` of type `U`, and returns a new object that is the combination of both (`T & U`).
- The type parameters `T` and `U` allow the function to work with any two types of objects.

### Generic Function with Constraints

Sometimes, you might want to restrict the types that can be used with a generic function. You can achieve this using constraints. Here's an example:

```typescript
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
```

In this example:

- The `Lengthwise` interface defines a constraint that requires a `length` property.
- The `logLength` function is a generic function with a type parameter `T` that extends `Lengthwise`, meaning `T` must have a `length` property.
- This constraint ensures that the function can only be called with types that have a `length` property, providing additional type safety.

### Summary

Generic functions in TypeScript are powerful tools for creating reusable and type-safe code. They allow you to write functions that can operate on a variety of types while maintaining the benefits of type checking. By using type parameters and constraints, you can create flexible and robust functions that work with different data types.

## 🟢 Generic Interfaces in TypeScript

Generic interfaces in TypeScript allow you to define interfaces that can work with a variety of data types while maintaining type safety. This is particularly useful when you want to create flexible and reusable data structures or APIs.

### Example of a Generic Interface

Here's a simple example of a generic interface in TypeScript:

```typescript
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
```

In this example:

- `KeyValuePair` is a generic interface with two type parameters, `K` and `V`, representing the types of the key and value, respectively.
- The interface defines two properties: `key` of type `K` and `value` of type `V`.
- When using the interface, you can specify the types for `K` and `V` to create type-safe key-value pairs.

### Benefits of Generic Interfaces

1. **Type Safety**: The type parameters ensure that the interface properties are type-checked, reducing the risk of runtime errors.
2. **Reusability**: The same interface can be used with different data types, making the code more flexible and reusable.
3. **Maintainability**: Generic interfaces make the code more maintainable by centralizing the logic for handling different types of data.

### Summary

Generic interfaces in TypeScript are a powerful feature that allows you to create flexible and type-safe interfaces. By using generics, you can define interfaces that work with any data type, leading to more maintainable and robust code.

## 🟢 Generic Constraints in TypeScript

Generic constraints in TypeScript allow you to restrict the types that can be used with a generic function, class, or interface. This is useful when you want to ensure that the type parameter meets certain criteria, such as having specific properties or methods.

### Example of a Generic Function with Constraints

Consider the following example where we want to create a function that logs the length of an argument. To ensure that the argument has a `length` property, we can use a generic constraint:

```typescript
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
```

In this example:

- The `Lengthwise` interface defines a constraint that requires a `length` property of type `number`.
- The `logLength` function is a generic function with a type parameter `T` that extends `Lengthwise`, meaning `T` must have a `length` property.
- This constraint ensures that the function can only be called with types that have a `length` property, providing additional type safety.

### Summary

Generic constraints in TypeScript are a powerful feature that allows you to restrict the types that can be used with generics. By using constraints, you can ensure that the type parameters meet specific criteria, leading to more robust and type-safe code.

## 🟢 Extending Generic Classes in TypeScript

In TypeScript, you can extend generic classes to create more specialized versions of those classes. This allows you to build on existing generic functionality while adding or modifying features as needed.

### Example of Extending a Generic Class

Here's an example of how to extend a generic class in TypeScript:

```typescript
// Base generic class
class DataContainer<T> {
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
class TimestampedDataContainer<T> extends DataContainer<T> {
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
const timestampedNumberContainer = new TimestampedDataContainer<number>(123);
console.log(timestampedNumberContainer.getData()); // Output: 123
console.log(timestampedNumberContainer.getTimestamp()); // Output: current date and time

timestampedNumberContainer.setData(456);
timestampedNumberContainer.setTimestamp(new Date("2023-01-01"));
console.log(timestampedNumberContainer.getData()); // Output: 456
console.log(timestampedNumberContainer.getTimestamp()); // Output: 2023-01-01
```

In this example:

- `DataContainer` is a generic class that holds data of type `T`.
- `TimestampedDataContainer` extends `DataContainer` and adds a `timestamp` property.
- The `TimestampedDataContainer` class has additional methods to get and set the timestamp, while still inheriting the generic functionality of `DataContainer`.

By extending the generic class, you can create more specialized classes that build on the functionality of the base class while adding new features or modifying existing ones.

## 🟢 The `keyof` Operator in TypeScript

The `keyof` operator in TypeScript is used to create a union type of all the keys of an object type. This is particularly useful when you want to create functions or types that operate on the keys of an object in a type-safe manner.

### Example of Using the `keyof` Operator

Here's a simple example to illustrate how the `keyof` operator works:

```typescript
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

const name = getProperty(person, "name"); // "Alice"
const age = getProperty(person, "age"); // 30
const isEmployed = getProperty(person, "isEmployed"); // true
```

In this example:

- The `Person` interface defines an object type with three properties: `name`, `age`, and `isEmployed`.
- The `PersonKeys` type is created using the `keyof` operator, resulting in a union type of the keys of the `Person` interface: `"name" | "age" | "isEmployed"`.
- The `getProperty` function is a generic function that takes an object `obj` of type `T` and a key `key` of type `K`, where `K` extends the keys of `T` (`keyof T`). The function returns the value of the property corresponding to the key.
- The `getProperty` function is used to retrieve the values of the `name`, `age`, and `isEmployed` properties from the `person` object in a type-safe manner.

### Summary

The `keyof` operator in TypeScript is a powerful tool for creating types that represent the keys of an object. It enables you to write type-safe code that operates on object properties, enhancing the flexibility and robustness of your TypeScript applications.

## 🟢 Type Mapping in TypeScript

Type mapping in TypeScript allows you to create new types by transforming existing types. This is particularly useful when you want to create variations of a type, such as making all properties optional, readonly, or changing their types.

### Example of Type Mapping

Here's an example of how to use type mapping in TypeScript:

```typescript
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
```

In this example:

- `PartialPerson` is a mapped type that makes all properties of the `Person` interface optional.
- `ReadonlyPerson` is a mapped type that makes all properties of the `Person` interface readonly.
- `StringifiedPerson` is a mapped type that changes the types of all properties in the `Person` interface to `string`.

### 🟢 Summary

Type mapping in TypeScript is a powerful feature that allows you to create new types by transforming existing ones. This can help you create more flexible and reusable type definitions, enhancing the maintainability and robustness of your code.

## 🟢 Generics Summary

- Generics allow us to create reusable classes, interfaces and functions.
- A generic type has one or more generic type parameters specified in angle brackets.
- When using generic types, we should supply arguments for generic type parameters or
  let the compiler infer them (if possible).
- We can constrain generic type arguments by using the extends keyword after generic
  type parameters.
- When extending generic classes, we have three options: can pass on generic type
  parameters, so the derived classes will have the same generic type parameters.
  Alternatively, we can restrict or fix them.
- The keyof operator produces a union of the keys of the given object.
- Using type mapping we can create new types based off of existing types. For example,
  we can create a new type with all the properties of another type where these properties
  are readonly, optional, etc.
- TypeScript comes with several utility types that perform type mapping for us.
  Examples are: Partial<T>, Required<T>, Readonly<T>, etc.
- See the complete list of utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html

## 🟢 Cheat Sheet

**Generic classes**

```typescript
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "a");

// The TypeScript compiler can sometimes infer
// generic type arguments so we don't need to specify them.
let other = new KeyValuePair(1, "a");
```

**Generic functions**

```typescript
function wrapInArray<T>(value: T) {
  return [value];
}
let numbers = wrapInArray(1);
```

**Generic interfaces**

```typescript
interface Result<T> {
  data: T | null;
}
```

**Generic constraints**

```typescript
function echo<T extends number | string>(value: T) {}
// Restrict using a shape object
function echo<T extends { name: string }>(value: T) {}
// Restrict using an interface or a class
function echo<T extends Person>(value: T) {}
```

**Extending generic classes**

```typescript
// Passing on generic type parameters
class CompressibleStore<T> extends Store<T> {}
// Constraining generic type parameters
class SearchableStore<T extends { name: string }> extends Store<T> {}
// Fixing generic type parameters
class ProductStore extends Store<Product> {}
```

**The keyof operator**

```typescript
interface Product {
  name: string;
  price: number;
}
let property: keyof Product;
// Same as
let property: "name" | "price";
property = "name";
property = "price";
property = "otherValue"; // Invalid
```

**Type mapping**

```typescript
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
type Optional<T> = {
  [K in keyof T]?: T[K];
};
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
```

**Utility types**

```typescript
interface Product {
  id: number;
  name: string;
  price: number;
}
// A Product where all properties are optional
let product: Partial<Product>;
// A Product where all properties are required
let product: Required<Product>;
// A Product where all properties are read-only
let product: Readonly<Product>;
// A Product with two properties only (id and price)
let product: Pick<Product, "id" | "price">;
// A Product without a name
let product: Omit<Product, "name">;
```

## 🟢 Exercises

- Convert the function below to a generic function:

```typescript
function echo(arg) {
  return arg;
}
```

- When compiling the following piece of code, we get an error saying ‘Property name
  does not exist on type T’. How can we solve this problem?

```typescript
function printName<T>(obj: T) {
  console.log(obj.name);
}
```

- An Entity should have a unique identifier. The type of identifier, however, is dependent
  on the use case. In some cases, the ID might be a number, in other cases, it might be a
  string, GUID, etc. Represent the entity using a generic class.
- Given the following interface, what does keyof User return?

```typescript
interface User {
  userId: number;
  username: string;
}
```

## 🟢 Solutions

- Convert the function below to a generic function:

```typescript
function echo<T>(arg: T): T {
  return arg;
}
```

- When compiling the following piece of code, we get an error saying ‘Property name
  does not exist on type T’. How can we solve this problem?

**We need to apply a constraint on the generic type parameter so the TypeScript
compiler knows that objects of type T have a name property:**

```typescript
function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}
```

- An **Entity** should have a unique identifier. The type of identifier, however, is dependent
  on the use case. In some cases, the ID might be a number, in other cases, it might be a
  string, and so on. Represent the entity using a generic class.

```typescript
class Entity<T> {
  constructor(public id: T) {}
}
```

- Given the following interface, what does keyof User return?

**It returns a union of the properties of User: ‘userId’ | ‘username’**
