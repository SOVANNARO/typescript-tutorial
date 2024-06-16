## TypeScript Tutorial

> npm install typescript -g

Regarding the command `npm install typescript -g`, it is a command-line instruction for installing the TypeScript compiler globally on your system. Here's a breakdown of the command:

- `npm`: This is the Node Package Manager, which is a package manager for JavaScript and Node.js applications. It is used to install, manage, and update packages and dependencies.

- `install`: This is a subcommand of npm that is used to install new packages or dependencies.

- `typescript`: This is the name of the package you want to install. In this case, it is the TypeScript compiler.

- `-g`: This is an option that indicates that you want to install the package globally on your system. The `-g` option means that the package will be available system-wide, allowing you to use the TypeScript compiler from any directory in your terminal.

To execute this command, you would need to have Node.js and npm installed on your system. After installing Node.js and npm, you can open your terminal or command prompt and run the `npm install typescript -g` command. This will install the TypeScript compiler globally on your system.

Please note that installing TypeScript globally is not always necessary, especially if you are working on a project that uses a package.json file and a local installation of TypeScript. However, it can be useful for setting up a development environment or for running TypeScript scripts from the command line.

## Run and Compile TypeScript
> tsc main.ts

The command `tsc main.ts` is used to compile a TypeScript file (`main.ts`) into a JavaScript file (`main.js`). Here's a breakdown of what happens when you run this command:

1. **TypeScript Compilation**: `tsc` stands for TypeScript Compiler. When you run `tsc main.ts`, the TypeScript compiler reads the `main.ts` file, checks it for type errors, and then compiles it into a JavaScript file.

2. **Output File**: By default, the compiled JavaScript file will have the same name as the TypeScript file but with a `.js` extension. So, `main.ts` will be compiled to `main.js`.

3. **Usage in HTML**: In your HTML file, you have a script tag that includes `main.js`:
    ```html
    <script src="main.js"></script>
    ```
   This means that after compiling `main.ts` to `main.js`, the JavaScript code will be executed in the browser when the HTML file is loaded.

### Example

Suppose you have a `main.ts` file with the following TypeScript code:
```typescript
let message: string = "Hello, TypeScript!";
console.log(message);
```

When you run `tsc main.ts`, it will generate a `main.js` file with the following JavaScript code:
```javascript
var message = "Hello, TypeScript!";
console.log(message);
```

This `main.js` file will then be included in your HTML file and executed by the browser.

### Steps to Compile and Run

1. **Write TypeScript Code**: Create a `main.ts` file with your TypeScript code.
2. **Compile TypeScript to JavaScript**: Run the command `tsc main.ts` in your terminal.
3. **Include Compiled JavaScript in HTML**: Ensure your HTML file includes the compiled `main.js` file using a script tag.
4. **Open HTML File in Browser**: Open the HTML file in a web browser to see the output of your JavaScript code.

By following these steps, you can write TypeScript code, compile it to JavaScript, and run it in a web browser.

## Command tsc --init

> tsc --init

The command `tsc --init` is used to create a `tsconfig.json` file in your project directory. This file is used to configure the TypeScript compiler options for your project. Here's a breakdown of what this command does and why it's useful:

### What `tsconfig.json` Does

1. **Configuration File**: The `tsconfig.json` file allows you to specify various compiler options and settings for your TypeScript project. This includes things like the target ECMAScript version, module system, and more.

2. **Project Context**: By having a `tsconfig.json` file, you can run the `tsc` command without specifying individual TypeScript files. The compiler will automatically compile all the TypeScript files included in the project as defined by the `tsconfig.json`.

3. **Customizable Options**: You can customize the TypeScript compilation process by setting various options in the `tsconfig.json` file. This includes options for strict type-checking, source maps, and more.

### Example of `tsconfig.json`

When you run `tsc --init`, a `tsconfig.json` file is created with default settings. Here is an example of what this file might look like:

```json
{
  "compilerOptions": {
    "target": "es5",                          // Target ECMAScript version
    "module": "commonjs",                     // Module system
    "strict": true,                           // Enable all strict type-checking options
    "esModuleInterop": true,                  // Enable interoperability between CommonJS and ES Modules
    "skipLibCheck": true,                     // Skip type checking of declaration files
    "forceConsistentCasingInFileNames": true  // Ensure consistent casing in file names
  },
  "include": [
    "src"  // Include all TypeScript files in the 'src' directory
  ]
}
```

### Steps to Use `tsconfig.json`

1. **Initialize `tsconfig.json`**: Run `tsc --init` in your project directory to create the `tsconfig.json` file.
2. **Configure Options**: Open the `tsconfig.json` file and configure the compiler options as needed for your project.
3. **Compile Project**: Run `tsc` in your terminal. The TypeScript compiler will use the settings in `tsconfig.json` to compile your project.

### Example Workflow

1. **Create TypeScript File**: Create a `main.ts` file with your TypeScript code.
    ```typescript
    let username = "sovannaro";
    console.log(username);
    ```

2. **Initialize `tsconfig.json`**: Run `tsc --init` to create the `tsconfig.json` file.

3. **Compile TypeScript**: Run `tsc` to compile all TypeScript files in the project according to the settings in `tsconfig.json`.

4. **Include Compiled JavaScript in HTML**: Ensure your HTML file includes the compiled `main.js` file using a script tag.
    ```html
    <script src="main.js"></script>
    ```

By using `tsc --init` and configuring `tsconfig.json`, you can streamline the TypeScript compilation process and manage your project's TypeScript settings more effectively.

## Command tsc -w
> tsc -w

The command `tsc -w` is used to run the TypeScript compiler in watch mode. When you use this command, the TypeScript compiler will continuously watch your TypeScript files for changes and automatically recompile them whenever a change is detected. This is particularly useful during development, as it allows you to see the effects of your changes immediately without having to manually re-run the compiler each time.

### Key Features of `tsc -w`

1. **Automatic Compilation**: The compiler watches for changes in your TypeScript files and recompiles them automatically.
2. **Real-Time Feedback**: You get immediate feedback on any type errors or issues as you make changes to your code.
3. **Improved Development Workflow**: This can significantly speed up your development process by reducing the need to manually compile your code after every change.

### Example Workflow

1. **Create TypeScript File**: Create a `main.ts` file with your TypeScript code.
    ```typescript
    let username = "sovannaro";
    console.log(username);
    ```

2. **Initialize `tsconfig.json`**: Run `tsc --init` to create the `tsconfig.json` file if you haven't already.

3. **Run TypeScript Compiler in Watch Mode**: Run `tsc -w` in your terminal. The compiler will start watching your TypeScript files for changes.
    ```sh
    tsc -w
    ```

4. **Make Changes and Save**: As you make changes to your TypeScript files and save them, the compiler will automatically recompile the files and output the JavaScript files according to the settings in `tsconfig.json`.

5. **Include Compiled JavaScript in HTML**: Ensure your HTML file includes the compiled `main.js` file using a script tag.
    ```html
    <script src="build/js/main.js"></script>
    ```

### Example `tsconfig.json` Configuration

Here is an example of a `tsconfig.json` file that might be used in this workflow:

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./build/js",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

### Benefits of Using `tsc -w`

- **Efficiency**: Saves time by eliminating the need to manually compile after every change.
- **Immediate Feedback**: Helps catch errors early by providing real-time feedback.
- **Streamlined Workflow**: Enhances the development experience by automating the compilation process.

By using `tsc -w`, you can focus more on writing and improving your TypeScript code, while the compiler takes care of keeping your JavaScript output up-to-date.






