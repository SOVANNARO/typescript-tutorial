## TypeScript Tutorial

### 🟢 Modules

### You'll Learn

- Creating and using modules
- Module formats
- Default exports
- Wildcard imports
- Re-exporting

### 🟢 Exporting and importing

In TypeScript, modules are a way to organize and encapsulate code. They allow you to export classes, interfaces, functions, and variables from one file and import them into another. This helps in maintaining a clean and modular codebase.

### Exporting

You can export code from a module using the `export` keyword. There are several ways to export code:

1. **Named Exports**: You can export multiple items from a module.
2. **Default Exports**: You can export a single item as the default export from a module.

#### Named Exports

```typescript
// file: mathUtils.ts

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14;
```

#### Default Exports

```typescript
// file: calculator.ts

export default class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}
```

### Importing

You can import code from a module using the `import` keyword. Depending on how the code was exported, you can use named imports or default imports.

#### Named Imports

```typescript
// file: app.ts

import { add, subtract, PI } from "./mathUtils";

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(PI); // 3.14
```

#### Default Imports

```typescript
// file: app.ts

import Calculator from "./calculator";

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.subtract(5, 2)); // 3
```

### Wildcard Imports

You can also import everything from a module as a single object.

```typescript
// file: app.ts

import * as MathUtils from "./mathUtils";

console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.subtract(5, 2)); // 3
console.log(MathUtils.PI); // 3.14
```

### Re-exporting

You can re-export items from another module.

```typescript
// file: index.ts

export { add, subtract, PI } from "./mathUtils";
export { default as Calculator } from "./calculator";
```

Now you can import from `index.ts`:

```typescript
// file: app.ts

import { add, subtract, PI, Calculator } from "./index";

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(PI); // 3.14

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.subtract(5, 2)); // 3
```

By using these techniques, you can effectively manage and organize your TypeScript code into reusable modules.

### 🟢 Module Formats

In TypeScript, module formats refer to the different ways in which modules can be structured and loaded. The two primary module formats are:

1. **CommonJS**: This is the module format used by Node.js. It uses `require` for importing and `module.exports` or `exports` for exporting.
2. **ES6 (ECMAScript 2015) Modules**: This is the standard module format for JavaScript. It uses `import` and `export` statements.

### CommonJS Modules

CommonJS is the module format used by Node.js. In this format, you use `require` to import modules and `module.exports` or `exports` to export them.

#### Example

```typescript
// file: mathUtils.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const PI = 3.14;

module.exports = {
  add,
  subtract,
  PI,
};
```

```typescript
// file: app.js

const mathUtils = require("./mathUtils");

console.log(mathUtils.add(2, 3)); // 5
console.log(mathUtils.subtract(5, 2)); // 3
console.log(mathUtils.PI); // 3.14
```

### ES6 Modules

ES6 modules are the standard for JavaScript and are supported by modern JavaScript environments. In this format, you use `import` and `export` statements.

#### Example

```typescript
// file: mathUtils.ts

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14;
```

```typescript
// file: app.ts

import { add, subtract, PI } from "./mathUtils";

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(PI); // 3.14
```

### Configuring Module Formats in TypeScript

You can specify the module format in the `tsconfig.json` file using the `module` option. Here are some common values for the `module` option:

- `commonjs`: For CommonJS modules.
- `es6` or `es2015`: For ES6 modules.
- `amd`: For Asynchronous Module Definition, used in browsers.
- `umd`: For Universal Module Definition, compatible with both browsers and Node.js.
- `system`: For SystemJS.

#### Example `tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "commonjs", // or "es6", "amd", "umd", "system"
    "target": "es5",
    "outDir": "./build",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Summary

- **CommonJS**: Used primarily in Node.js environments. Uses `require` and `module.exports`.
- **ES6 Modules**: Standard for JavaScript. Uses `import` and `export`.

By understanding and configuring these module formats, you can ensure that your TypeScript code is compatible with the intended runtime environment.

### 🟢 Default Export

In TypeScript, a default export is a way to export a single value or entity from a module. This is useful when you want to export one main thing from a module, such as a class, function, or object. The default export can be imported without using curly braces.

### Default Export

To create a default export, you use the `export default` syntax. Here is an example:

#### Example

```typescript
// file: calculator.ts

export default class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}
```

In this example, the `Calculator` class is exported as the default export from the `calculator.ts` module.

### Importing a Default Export

To import a default export, you use the `import` statement without curly braces. You can also give the imported entity any name you like.

#### Example

```typescript
// file: app.ts

import Calculator from "./calculator";

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.subtract(5, 2)); // 3
```

In this example, the `Calculator` class is imported from the `calculator.ts` module. Notice that we don't use curly braces around `Calculator` in the import statement.

### Combining Default and Named Exports

You can also combine default exports with named exports in the same module.

#### Example

```typescript
// file: mathUtils.ts

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14;

export default class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}
```

In this example, the `Calculator` class is the default export, and the `add`, `subtract` functions, and `PI` constant are named exports.

#### Importing Default and Named Exports

You can import both default and named exports from the same module.

```typescript
// file: app.ts

import Calculator, { add, subtract, PI } from "./mathUtils";

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.subtract(5, 2)); // 3

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(PI); // 3.14
```

In this example, the `Calculator` class is imported as the default export, and the `add`, `subtract` functions, and `PI` constant are imported as named exports.

### Summary

- **Default Export**: Use `export default` to export a single value or entity from a module.
- **Importing Default Export**: Use `import` without curly braces to import the default export.
- **Combining Exports**: You can combine default and named exports in the same module and import them accordingly.

By using default exports, you can simplify the import statements and make it clear what the primary export of a module is.

### 🟢 Wildcard Import

Wildcard imports in TypeScript allow you to import all exported members from a module as a single object. This can be useful when you want to access multiple exports from a module without having to list each one individually. Wildcard imports are done using the `import * as` syntax.

### Wildcard Imports

To use wildcard imports, you import everything from a module as a single object. This object will contain all the named exports from the module.

#### Example

Let's consider a module `mathUtils.ts` with multiple named exports:

```typescript
// file: mathUtils.ts

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14;
```

You can import all the exports from `mathUtils.ts` as a single object using wildcard imports:

```typescript
// file: app.ts

import * as MathUtils from "./mathUtils";

console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.subtract(5, 2)); // 3
console.log(MathUtils.PI); // 3.14
```

In this example, the `MathUtils` object contains all the named exports from the `mathUtils.ts` module. You can access each export as a property of the `MathUtils` object.

### Benefits of Wildcard Imports

1. **Convenience**: Wildcard imports can be more convenient when you need to import many items from a module.
2. **Namespace**: They help in organizing the imported items under a single namespace, which can make the code more readable and avoid naming conflicts.

### Combining Wildcard Imports with Other Imports

You can also combine wildcard imports with other import styles. For example, you can import a default export along with wildcard imports.

#### Example

Let's add a default export to the `mathUtils.ts` module:

```typescript
// file: mathUtils.ts

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14;

export default class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}
```

Now, you can import the default export along with the wildcard imports:

```typescript
// file: app.ts

import Calculator, * as MathUtils from "./mathUtils";

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.subtract(5, 2)); // 3

console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.subtract(5, 2)); // 3
console.log(MathUtils.PI); // 3.14
```

In this example, the `Calculator` class is imported as the default export, and all the named exports are imported as properties of the `MathUtils` object.

### Summary

- **Wildcard Imports**: Use `import * as` to import all named exports from a module as a single object.
- **Convenience**: Wildcard imports are convenient for importing multiple items and help in organizing them under a single namespace.
- **Combining Imports**: You can combine wildcard imports with other import styles, such as default imports.

By using wildcard imports, you can simplify your import statements and make your code more organized and readable.

### 🟢 Re-exporting

Re-exporting in TypeScript allows you to consolidate and re-export items from multiple modules into a single module. This can be useful for creating a central module that aggregates exports from various modules, making it easier to manage and import them in other parts of your application.

### Re-exporting

Re-exporting can be done using the `export` statement. You can re-export named exports, default exports, or a combination of both.

#### Example

Let's consider two modules, `mathUtils.ts` and `calculator.ts`, with the following exports:

```typescript
// file: mathUtils.ts

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14;
```

```typescript
// file: calculator.ts

export default class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}
```

You can create a central module, `index.ts`, that re-exports items from these modules:

```typescript
// file: index.ts

export { add, subtract, PI } from "./mathUtils";
export { default as Calculator } from "./calculator";
```

Now, you can import from `index.ts` instead of importing from `mathUtils.ts` and `calculator.ts` separately:

```typescript
// file: app.ts

import { add, subtract, PI, Calculator } from "./index";

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(PI); // 3.14

const calc = new Calculator();
console.log(calc.add(2, 3)); // 5
console.log(calc.subtract(5, 2)); // 3
```

### Benefits of Re-exporting

1. **Centralized Imports**: Re-exporting allows you to create a single entry point for multiple modules, making it easier to manage imports.
2. **Simplified Imports**: Consumers of your modules can import everything they need from a single module, reducing the number of import statements.
3. **Encapsulation**: You can encapsulate and hide the internal structure of your modules, exposing only the necessary parts.

### Re-exporting All Members

You can also re-export all members from a module using the `export * from` syntax:

```typescript
// file: index.ts

export * from "./mathUtils";
export { default as Calculator } from "./calculator";
```

In this example, all named exports from `mathUtils.ts` are re-exported, and the default export from `calculator.ts` is re-exported as `Calculator`.

### Combining Re-exports

You can combine re-exports with other exports in the same module:

```typescript
// file: index.ts

export * from "./mathUtils";
export { default as Calculator } from "./calculator";

export function multiply(a: number, b: number): number {
  return a * b;
}
```

In this example, the `multiply` function is defined and exported in `index.ts`, along with the re-exports from `mathUtils.ts` and `calculator.ts`.

### Summary

- **Re-exporting**: Use the `export` statement to re-export items from other modules.
- **Centralized Imports**: Re-exporting allows you to create a single entry point for multiple modules.
- **Simplified Imports**: Consumers can import everything they need from a single module.
- **Encapsulation**: You can encapsulate and hide the internal structure of your modules.

By using re-exporting, you can effectively manage and organize your TypeScript code into reusable and maintainable modules.

## 🟢 Modules Summary

- We use modules to organize our code across multiple files.
- Objects defined in a module are private and invisible to other modules unless exported.
- We use export and import statements to export and import objects from various
  modules. These statements are part of the ES6 module format.
- Over years, many module formats have been developed for JavaScript. Examples are
  CommonJS (introduced by Node), AMD, UMD, etc.
- We can use the module setting in tsconfig to specify the module format the compiler
  should use when emitting JavaScript code.

## 🟢 Cheat Sheet

✔️ **Exporting and importing**

```typescript
// shapes.ts
export class Circle {}
export class Square {}
// app.ts
import { Circle, Square as MySquare } from "./shapes";
```

✔️ **Default exports**

```typescript
// shapes.ts
export default class Circle {}

// app.ts
import Circle from "./shapes";
```

✔️ **Wildcard imports**

```typescript
// app.ts
import * as Shapes from "./shapes";
let circle = new Shapes.Circle();
```

✔️ **Re-exporting**

```typescript
// /shapes/index.ts
export { Circle } from "./circle";
export { Square } from "./square";
// app.ts
import { Circle, Square } from "./shapes";
```
