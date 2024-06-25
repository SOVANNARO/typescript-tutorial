## Integration with JavaScript

### You'll Learn

- Include JS code in TS projects
- Type checking JS code
- JSDocs
- Declaration (Type Definition)
- Using declaration files from @types/

### :sparkles: Includeing JS Code in TS Projects

Certainly! Here's the corrected section with an example of including JavaScript code in TypeScript projects:

To include JavaScript code in a TypeScript project, you can simply reference the JavaScript file in your TypeScript file. For example:

```typescript
// main.ts
import "./example.js";

// You can now use the functions or variables defined in example.js
```

```javascript
// example.js
function greet() {
  console.log("Hello from JavaScript!");
}
```

### :sparkles: Type Checking JS Code

TypeScript can type check JavaScript code by using JSDoc comments. This allows you to add type annotations to your JavaScript code, which TypeScript can then use to perform type checking.

For example:

```javascript
// example.js
/**
 * Greets a person.
 * @param {string} name - The name of the person to greet.
 * @returns {string} A greeting message.
 */
function greet(name) {
  return `Hello, ${name}!`;
}

// Usage
const message = greet("World");
console.log(message);
```

By adding JSDoc comments, TypeScript can understand the types of the parameters and the return value, allowing it to type check the JavaScript code.

### :sparkles: Describing Types Using JSDoc

JSDoc is a powerful way to describe the types of variables, parameters, and return values in your JavaScript code. This helps TypeScript understand the types and perform type checking.

For example:

```javascript
/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}
```

In this example, the JSDoc comments describe the types of the parameters `a` and `b` as well as the return type of the function `add`. This allows TypeScript to check that the function is used correctly throughout your code.

### :sparkles: Create Declaration file

A declaration file is used to describe the shape of an existing JavaScript code to TypeScript. This allows TypeScript to understand the types used in the JavaScript code.

To create a declaration file, you can create a file with a `.d.ts` extension. For example, if you have a JavaScript file `example.js`, you can create a corresponding declaration file `example.d.ts`:

```typescript
// example.d.ts
declare function greet(name: string): string;
```

In this declaration file, we declare the `greet` function and specify that it takes a `string` parameter and returns a `string`. This allows TypeScript to type check the usage of the `greet` function in your TypeScript code.

### :sparkles: Using Definitely Typed Declaration Files

Definitely Typed is a repository of high-quality TypeScript type definitions for popular JavaScript libraries. These type definitions are available as npm packages under the `@types` scope.

To use a type definition from Definitely Typed, you can install it via npm. For example, to install the type definitions for the `lodash` library, you would run:

```sh
npm install --save-dev @types/lodash
```

Once installed, you can use the type definitions in your TypeScript code:

```typescript
import * as _ from "lodash";

const array = [1, 2, 3, 4];
const reversedArray = _.reverse(array);
console.log(reversedArray); // Output: [4, 3, 2, 1]
```

By using Definitely Typed declaration files, you can get type checking and autocompletion for many popular JavaScript libraries in your TypeScript projects.
