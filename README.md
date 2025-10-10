<div align="center">
<h1>40 Days of JavaScript</h1>

> *Notes, Tasks of 40 Days of JavaScript Challenge*
</div>

# **Context**
- [**Context**](#context)
- [**Module 1 - Getting Started with JavaScript**](#module-1---getting-started-with-javascript)
  - [**Day 01 - Introduction to JavaScript \& Setting Up Environments**](#day-01---introduction-to-javascript--setting-up-environments)
    - [JavaScript \& It's History](#javascript--its-history)
    - [Environment Setup](#environment-setup)
    - [First Line of JS Code](#first-line-of-js-code)
    - [Problem with including the script in the head tag](#problem-with-including-the-script-in-the-head-tag)
    - [Including script in the body tag](#including-script-in-the-body-tag)
    - [The async attribute](#the-async-attribute)
    - [The defer attribute](#the-defer-attribute)
    - [Running JavaScript on the Server side](#running-javascript-on-the-server-side)
    - [**Day 01 Tasks**](#day-01-tasks)
      - [Task 01: Setting Up Your Environment](#task-01-setting-up-your-environment)
      - [Task 02: Write Your First JavaScript Code](#task-02-write-your-first-javascript-code)
      - [Task 03: Experiment with Different JavaScript Loading Methods](#task-03-experiment-with-different-javascript-loading-methods)
      - [Task 04: Take Notes and Submit](#task-04-take-notes-and-submit)
  - [**Day 02 - Variables and Data Types in JavaScript**](#day-02---variables-and-data-types-in-javascript)
    - [What are variables?](#what-are-variables)
      - [Value Assignments](#value-assignments)
    - [Naming Convention](#naming-convention)
      - [Variable Name Standards](#variable-name-standards)
    - [Comments](#comments)
    - [let var const](#let-var-const)
    - [Data Types](#data-types)
      - [`undefined` vs `null`](#undefined-vs-null)
      - [Pass by Value \& Pass by Reference](#pass-by-value--pass-by-reference)
    - [Variables in Memory](#variables-in-memory)
    - [How JavaScript See Code?](#how-javascript-see-code)
    - [**Day 02 Tasks**](#day-02-tasks)
      - [Task 01: Declare variables for a person’s name, age, isStudent status, and favorite programming language](#task-01-declare-variables-for-a-persons-name-age-isstudent-status-and-favorite-programming-language)
      - [Task 02: Print the values to the console](#task-02-print-the-values-to-the-console)
      - [Task 03: Try reassigning values to let and const variables and observe errors](#task-03-try-reassigning-values-to-let-and-const-variables-and-observe-errors)
      - [Task 04: Create an object and an array, assign them to new variables, modify, and observe changes](#task-04-create-an-object-and-an-array-assign-them-to-new-variables-modify-and-observe-changes)
  - [**Day 03 - MASTER Operators \& Expressions in JavaScript**](#day-03---master-operators--expressions-in-javascript)
    - [Operands, Operators, Expressions](#operands-operators-expressions)
    - [String Concatenation Note](#string-concatenation-note)
    - [Different Types of Operators](#different-types-of-operators)
      - [Arithmetic Operators](#arithmetic-operators)
      - [Assignment Operators](#assignment-operators)
      - [Comparison Operators](#comparison-operators)
      - [Logical Operators](#logical-operators)
      - [The Nullish Coalescing Operator](#the-nullish-coalescing-operator)
      - [Conditional (ternary) operator](#conditional-ternary-operator)
      - [Bitwise Operators](#bitwise-operators)
      - [Grouping and Operator Precedence](#grouping-and-operator-precedence)
      - [typeof Operator](#typeof-operator)
    - [**Day 03 Tasks**](#day-03-tasks)
      - [Task 01 - Odd or Even?](#task-01---odd-or-even)
      - [Task 02 - Do you have a Driving License?](#task-02---do-you-have-a-driving-license)
      - [Task 03 - Calculate CTC with a Bonus](#task-03---calculate-ctc-with-a-bonus)
      - [Task 04 - Write a program for the Traffic Light Simulation](#task-04---write-a-program-for-the-traffic-light-simulation)
      - [Task 05 - Create an Electricity Bill Calculator](#task-05---create-an-electricity-bill-calculator)
      - [Task 06 - Leap Year Checker](#task-06---leap-year-checker)
      - [Task 07 - Max of Three Numbers](#task-07---max-of-three-numbers)
      - [Task 08 - Bitwise Doubling](#task-08---bitwise-doubling)
  - [**Day 04 - MASTERING Control Flow in JavaScript With Quizzes**](#day-04---mastering-control-flow-in-javascript-with-quizzes)
    - [The Control Flow](#the-control-flow)
      - [Conditional Statements](#conditional-statements)
      - [Looping Statements](#looping-statements)
      - [Jump Statements](#jump-statements)
      - [Exception Handling](#exception-handling)
    - [**Day 04 Tasks**](#day-04-tasks)
      - [Task 01 - What will be the output of this code snippet and why?](#task-01---what-will-be-the-output-of-this-code-snippet-and-why)
      - [Task 02 - Build an ATM Cash Withdrawal System](#task-02---build-an-atm-cash-withdrawal-system)
      - [Task 03 - Build a Calculator with switch-case](#task-03---build-a-calculator-with-switch-case)
      - [Task 04 - Pay for your movie ticket](#task-04---pay-for-your-movie-ticket)
      - [Task 05 - Horoscope Sign Checker](#task-05---horoscope-sign-checker)
      - [Task 06 - Which Triangle?](#task-06---which-triangle)


# **Module 1 - Getting Started with JavaScript**

## **Day 01 - Introduction to JavaScript & Setting Up Environments**

### JavaScript & It's History

- **1995 – Brendan Eich creates JavaScript in 10 days at Netscape**

  - Designed to add dynamic behavior to web pages.
  - Initially called *Mocha*, then *LiveScript*, before being renamed *JavaScript*.
  - Integrated into Netscape Navigator 2.

- **1996 – Microsoft releases JScript for Internet Explorer**

  - JScript was Microsoft’s implementation of JavaScript for IE 3.
  - Created to avoid licensing Netscape’s engine.
  - Helped establish cross-browser scripting (though with incompatibilities).

- **1997 – ECMAScript (ES1) is standardized**

  - ECMA International adopted the language as ECMAScript.
  - The first edition (ES1) defined a formal specification.
  - Gave JavaScript a vendor-neutral standard.

- **1999 – ES3 introduces Regex & exception handling**

  - Brought `try/catch` for error handling.
  - Added regular expressions for string pattern matching.
  - Enhanced string and array methods.

- **2005 – AJAX revolutionizes web interactivity**

  - Coined by Jesse James Garrett.
  - Uses `XMLHttpRequest` to fetch data asynchronously.
  - Enabled modern web apps like Google Maps and Gmail.

- **2006 – jQuery simplifies JavaScript**

  - Created by John Resig.
  - Provided a simple API for DOM traversal, events, and AJAX.
  - Dramatically reduced cross-browser issues.

- **2009 – ES5 brings JSON support, `map()`, `filter()`, `reduce()`**

  - Standardized `JSON.parse()` and `JSON.stringify()`.
  - Added array helpers: `map`, `filter`, `reduce`, `forEach`.
  - Introduced strict mode (`"use strict"`).

- **2010 – AngularJS popularizes front-end frameworks**

  - Built by Google.
  - Introduced declarative templates and two-way data binding.
  - Inspired the SPA (Single Page Application) movement.

- **2013 – React.js changes UI development widely**

  - Created at Facebook.
  - Introduced a virtual DOM for efficient rendering.
  - Emphasized component-based architecture.

- **2014 – ECMAScript updates become annual**

  - TC39 adopted a yearly release cadence (“ES2015+” model).
  - Allowed incremental evolution rather than rare, big updates.

- **2015 – ES6 (ECMAScript 2015) introduces major features**

  - `let` and `const` for block scoping.
  - Arrow functions, template literals, and default parameters.
  - Classes, modules (`import`/`export`), `Promise`, and `Map`/`Set`.

- **2016 – Vue.js gains popularity as an alternative to React**

  - Created by Evan You.
  - Lightweight, progressive framework.
  - Easier learning curve than Angular or React.

- **2017 – ES8 adds async/await**

  - Simplified working with Promises.
  - Added `Object.entries()` and `Object.values()`.
  - Brought `String.padStart()`/`padEnd()`.

- **2019 – ES10 introduces optional catch binding and `flatMap()`**

  - Optional `catch` parameter (`catch { ... }`).
  - `Array.prototype.flat()` and `flatMap()` for easier array manipulation.
  - `Object.fromEntries()` added.

- **2020 – Deno (by Ryan Dahl) challenges Node.js**

  - Written in Rust, uses V8 engine.
  - Secure by default: no file/network access without flags.
  - Built-in TypeScript support and ES modules.

- **2021 – ES12 adds logical assignment operators**

  - Operators: `&&=`, `||=`, `??=`.
  - Numeric separators (`1_000_000`) improve readability.
  - `WeakRef` and `FinalizationRegistry` introduced.

- **2022 – ES13 introduces `at()` for arrays and top-level `await`**

  - `Array.prototype.at()` allows negative indices.
  - Top-level `await` simplifies module loading.
  - `Object.hasOwn()` as a safe alternative to `hasOwnProperty`.

- **2023 – ES14 brings Array grouping (`groupBy()`)**

  - `Array.prototype.groupBy()` and `groupByToMap()`.
  - Refines ergonomics for class fields and private methods.
  - String enhancements and iterator helpers (proposal stage).

- **2024 – React Server Components (RSC) revolutionize web app performance**

  - Enables rendering React components on the server.
  - Reduces client-side JavaScript bundle size.
  - Improves time-to-interactive for complex apps.

- **2025 – JavaScript evolves with AI-driven features & WebAssembly advancements**

  - Integration with WebAssembly becomes tighter.
  - Experimental proposals for built-in AI helpers (e.g., ML APIs).
  - Continuous optimization for performance and concurrency.

[⬆️ Go to Context](#context)

### Environment Setup

- Set up Links
  - [Chrome](https://www.google.com/chrome/)
  - [VsCode](https://code.visualstudio.com/download)
  - [Node.js](https://nodejs.org/en/download)

[⬆️ Go to Context](#context)

### First Line of JS Code

- `Right click` and `inspect` or `F12` key press to open console in browser

  ```js
  console.log("Hello World")
  ```

- Run the Code in VsCode
  - Open a [html file](./Day%2001%20-%20Introduction%20to%20JavaScript%20&%20Setting%20Up%20Environments/first.html)
  - Put `script` tag before the body end tag and write JavaScript code inside `script` tag

    ```html
    <body>

    <script>
        console.log("Hello World")
    </script>
    </body>
    ```

- Another way is creating seperated script file
  - Create [script file](./Day%2001%20-%20Introduction%20to%20JavaScript%20&%20Setting%20Up%20Environments/test.js)
  - Add it before the end of `head` tag

    ```html
    <head>
        ...
        <script src="./test.js"></script>
    </head>
    ```

[⬆️ Go to Context](#context)

### Problem with including the script in the head tag

- When we add script in the head it works like this diagram

  ![JS Loading Diagram](https://i.imgur.com/11nXLoU.png)

> [!CAUTION]
>
> - test.js:3 Uncaught TypeError: Cannot set properties of null (setting 'innerText') at test.js:3:44

- This error occured because DOM isn’t ready when the script runs
- Here is another visualization

  ```mermaid
  gantt
      title JavaScript Script Loading Methods - Timing Comparison
      dateFormat X
      axisFormat %s

      section 1. Script in Head (Default)
      HTML Parsing (Blocked)     :active, html1a, 0, 2
      Download Script           :crit, download1, 0, 4
      Execute Script            :crit, execute1, 4, 6
      HTML Parsing (Resumes)    :active, html1b, 6, 8

      section 2. Script at End of Body
      HTML Parsing (Complete)   :active, html2, 0, 6
      Download Script          :crit, download2, 6, 8
      Execute Script           :crit, execute2, 8, 10

      section 3. Script with Async
      HTML Parsing (Continues)  :active, html3, 0, 8
      Download Script          :crit, download3, 2, 6
      Execute Script (Interrupts):crit, execute3, 6, 7
      HTML Parsing (Resumes)   :active, html3b, 7, 8

      section 4. Script with Defer
      HTML Parsing (Continues)  :active, html4, 0, 6
      Download Script          :crit, download4, 2, 5
      Execute Script (After Parse):crit, execute4, 6, 7
  ```

[⬆️ Go to Context](#context)

### Including script in the body tag

- When adding script befor the end of body tag it will work cause DOM is properly build and runs the script

  ```html
  <body>
  ...
    <script src="./test.js"></script>
  </body>
  ```

- But there is a problem when script is required to load first

[⬆️ Go to Context](#context)

### The async attribute

- Now let's solve the problem by adding it back to the head and add `async` attribute

  ```html
  <head>
    ...
    <script src="./test.js" async></script>
  </head>
  ```

- But again there is a problem if we see the diagram it also have remaining DOM to build which continues after script execution
- There is still usecase of `async` when it does not depend on html page DOM to build
  - Third part library
  - Chatbot
  - Social media interaction etc

[⬆️ Go to Context](#context)

### The defer attribute

- Now let's solve the problem by adding it back to the head and add `defer` attribute

  ```html
  <head>
    ...
    <script src="./test.js" defer></script>
  </head>
  ```

- As it is said by its name `defer` which is postpone for done in future that execute the script

[⬆️ Go to Context](#context)

### Running JavaScript on the Server side

- We can run the script using node

  ```sh
  node test.js
  ```

[⬆️ Go to Context](#context)

### [**Day 01 Tasks**](./Day%2001%20-%20Introduction%20to%20JavaScript%20&%20Setting%20Up%20Environments/)

#### Task 01: Setting Up Your Environment

- [x] Install VS Code (if not installed).
- [x] Set up Live Server or open the HTML file directly in a browser.
- [x] Open the DevTools Console (Right-click → Inspect → Console).

[⬆️ Go to Context](#context)

#### Task 02: Write Your First JavaScript Code

- Create a new file: `index.html`.
- Add a `<script>` tag inside the HTML file or link an external `script.js`.
- Inside `script.js`, write a simple greeting program:

  ```js
  console.log("Hello, tapaScript!");
  console.log("Welcome to 40 Days of JavaScript!");
  document.write("Check the browser console for a message!");
  ```

- Run the HTML file in the browser and check:
  - The console log prints the text.
  - The `document.write()` outputs text on the webpage.

---

- Task 02 Solution
  - Created [index.html](./Day%2001%20-%20Introduction%20to%20JavaScript%20&%20Setting%20Up%20Environments/Task%2002/index.html)
  - Added script tag in [HTML file](./Day%2001%20-%20Introduction%20to%20JavaScript%20&%20Setting%20Up%20Environments/Task%2002/index.html)
  - Run the HTML file in browser using live server extension
    - Console log properly showing
    - `document.write()` outputs text on the webpage is properly showing

[⬆️ Go to Context](#context)

#### Task 03: Experiment with Different JavaScript Loading Methods

- Add the script in `<head>`, end of the `<body>` tag.
- Use `async` and `defer` attributes
- Understand the difefrences.

---

- Task 03 Solution
  - Created a [script.js](./Day%2001%20-%20Introduction%20to%20JavaScript%20&%20Setting%20Up%20Environments/Task%2003/script.js)
  - Add it in `<head>` of [index.html](./Day%2001%20-%20Introduction%20to%20JavaScript%20&%20Setting%20Up%20Environments/Task%2003/index.html)
  - Used `async` and `defer` and notice that `document.write()` is showing error

> [!CAUTION]
>
> - script.js:2 Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.

- Also found that `defer` hold the execution of JS till DOM is build but `async` interrupt the DOM build and execute the JS which is shown in the diagram mentioned in [Problem with including the script in the head tag](#problem-with-including-the-script-in-the-head-tag)

[⬆️ Go to Context](#context)

#### Task 04: Take Notes and Submit

- [x] Note down done
- [x] Shared the progress on discord

[⬆️ Go to Context](#context)

## **Day 02 - Variables and Data Types in JavaScript**

### What are variables?

- Variables are used to store data in JavaScript
- Variables are like a box that hold some information
- For example when we write someone / friend address on a paper in here paper is the variable and the address is the value

  ![Variable](https://i.imgur.com/mWBq5f3.png)

  ```js
  let/const/var storage_name = value;

  let fruit = "mango";
  ```

[⬆️ Go to Context](#context)

#### Value Assignments

- When we use `let` we can re-assign value

  ```js
  // value re-assign
  let fruit="mango"
  fruit="kiwi"
  console.log(fruit);
  ```

[⬆️ Go to Context](#context)

### Naming Convention

- The name must have digits(0-9) or letters.
- The name can have `$` and `_`
- The first character must not be a digit.
- No Reserved Keywords

  ```js
  // Naming Convention
  let $ = "doller"
  console.log($);
  let _ ="underscore";
  console.log(_);

  // not valid name convention
  // let 2morrow;
  // let react-play;

  // Case sensitive
  let myName;
  let MyName;
  ```

[⬆️ Go to Context](#context)

#### Variable Name Standards

- Use camelCase.
- Human Readable.
- The name should match the
cause.

[⬆️ Go to Context](#context)

### Comments

- Single line comment `//`

  ```js
  // this is single line comment
  ```

- Multi line comment `/* ... */`

  ```js
  /*
  this
  is
  multi
  line
  comment
  */
  ```

[⬆️ Go to Context](#context)

### let var const

- `var`: Function-scoped, can be redeclared (not recommended)
- `let`: Block-scoped, can be reassigned
- `const`: Block-scoped, **cannot** be reassigned
- Problem with `var`

  ```js
  // let var const
  var address = "Dhaka"
  console.log(address);

  var address = "USA"
  console.log(address);
  ```

  - Here `address` is being re-declare without any issue which is a problem

> [!NOTE]
>
> - A variable declare should be done once
> - Re-assign the same variable as much as needed
> - Using `var` is not recommended due to being functional scope and re-declare variable issue

[⬆️ Go to Context](#context)

### Data Types

- Primitive (immutable, stored by value)
  - Number – integers, floats, NaN, Infinity
    - *Example*: `let age = 25; let pi = 3.14; let notANumber = NaN;`
  - String – text enclosed in quotes
    - *Example*: `let greeting = "Hello";`
  - Boolean – `true or false`
    - *Example*: `let isLoggedIn = true;`
  - Null – intentional empty value
    - *Example*: `let emptyValue = null;`
  - Undefined – variable declared but not assigned
    - *Example*: `let x; // undefined`
  - Symbol – unique and immutable identifier
    - *Example*: `let id = Symbol("uniqueId");`
  - BigInt – large integers beyond Number.MAX_SAFE_INTEGER
    - *Example*: `let big = 123456789012345678901234567890n;`

- Non-Primitive (reference types, stored by reference)
  - Object
    - Plain objects ({}) – Key-value pairs of data

      Example:
      `const user = { username: "alex", age: 25 };`

    - Arrays ([]) – Ordered list of values

      Example:
      `const numbers = [1, 2, 3];`

    - Functions – Blocks of code that can be called

      Example:
      `function greet() { console.log("Hello!"); }`

    - Dates (new Date()) – Represent date and time

      Example:
      `const today = new Date();`

    - Regular Expressions (/pattern/) – Patterns to match text

      Example:
      `const regex = /hello/i;`

    - Maps (new Map()) – Store key-value pairs with any type of key

      Example:

      ```js
      const map = new Map();
      map.set("a", 1);
      ```

    - Sets (new Set()) – Store unique values

      Example:
      `const set = new Set([1, 2, 2, 3]);`

    - WeakMap / WeakSet – Store objects as keys or values, allow garbage collection

      Example:

      ```js
      const weakMap = new WeakMap();
      const obj = {};
      weakMap.set(obj, "value");
      ```

[⬆️ Go to Context](#context)

#### `undefined` vs `null`

| Aspect             | `undefined`                       | `null`                 |
| ------------------ | --------------------------------- | ---------------------- |
| Default or manual? | Default for uninitialized vars    | Manually assigned      |
| Type               | `undefined`                       | `object`               |
| Meaning            | Variable not yet assigned a value | Intentional “no value” |
| Checked by         | `typeof value === "undefined"`    | `value === null`       |

#### Pass by Value & Pass by Reference

- Pass by Value
  - Applies to **Primitive** types (Number, String, Boolean, Null, Undefined, Symbol, BigInt)
  - A copy of the value is passed to the variable or function
  - Changing the new variable does **not** affect the original value

- Pass by Reference
  - Applies to **Non-Primitive** types (Objects, Arrays, Functions, etc.)
  - A reference (memory address) is passed, not the actual value
  - Changes made through the new variable affect the original object

  ```js
  // Pass by Value  (Primitive)
  let fruit2 = "mango"
  let vegetable = "carrots"
  fruit2 = vegetable
  fruit2 = "banana"
  console.log(vegetable);
  ```

[⬆️ Go to Context](#context)

### Variables in Memory

- Stack
  - A region of memory that stores temporary data such as primitive values and function call information. It works in a Last In, First Out (LIFO) order.
  - Stores primitive data types (Number, String, Boolean, Null, Undefined, Symbol, BigInt)
  - Stores function call frames (execution context)
  - Data stored by value
  - Memory is managed automatically (Last In, First Out - LIFO)
  - Faster access

- Heap
  - A region of memory used for storing objects and reference types. Unlike the stack, the heap does not follow a strict order; memory is allocated dynamically as needed.
  - Stores non-primitive (reference) data types (Objects, Arrays, Functions, Dates, RegExp, etc.)
  - Data stored by reference (the variable holds a reference to the memory location)
  - Memory is dynamically allocated
  - More flexible but slower access compared to stack

[⬆️ Go to Context](#context)

### How JavaScript See Code?

- Tokenizing (Lexical Analysis)
- Parsing (Syntactic Analysis)
- Compilation (Intermediate Step)
- Execution (Interpreting / Code Execution)

This is how it work

  ```mermaid
  flowchart LR
    A["📝 Source Code &#xA <span style='color:#000'>let x = 5; &#xA console.log(x);</span>"] --> B["🔍 Tokenizing &#xA (Lexical Analysis)"]
    B --> C["📋 Tokens &#xA <span style='color:#000'>let, x, =, 5, ;, console, ., log, (, x, ), ;</span>"]
    C --> D["🌳 Parsing &#xA (Syntactic Analysis)"]
    D --> E["🌲 Abstract Syntax Tree (AST) &#xA <span style='color:#000'>Tree structure representing code syntax and relationships</span>"]
    E --> F["⚙️ Compilation &#xA (Intermediate Step)"]
    F --> G["💻 Bytecode/Optimized Code &#xA <span style='color:#000'>Machine-readable instructions for the JS engine</span>"]
    G --> H["▶️ Execution &#xA (Interpreting / Code Execution)"]
    H --> I["✅ Output &#xA <span style='color:#000'>5</span>"]

    classDef sourceCode fill:#e1f5fe,stroke:#01579b,stroke-width:2px,color:#000
    classDef tokenizing fill:#f3e5f5,stroke:#4a148c,stroke-width:2px,color:#000
    classDef parsing fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px,color:#000
    classDef compilation fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#000
    classDef execution fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#000

    class A sourceCode
    class B,C tokenizing
    class D,E parsing
    class F,G compilation
    class H,I execution
  ```

![How JS work](https://i.imgur.com/g41oecg.png)

- We can see the AST of a code on this site [astexplorer](https://astexplorer.net/)

[⬆️ Go to Context](#context)

### [**Day 02 Tasks**](./Day%2002%20-%20Variables%20and%20Data%20Types%20in%20JavaScript/Tasks/)

#### Task 01: Declare variables for a person’s name, age, isStudent status, and favorite programming language

---

- Task 01 Solution

  ```js
  // Task 01: Declare variables for a person’s name, age, isStudent status, and favorite programming language
  let name = "Tansen"
  const age = 24
  let isStudent = true
  let favProgLang = "Python"
  ```

[⬆️ Go to Context](#context)

#### Task 02: Print the values to the console

---

- Task 02 Solution

  ```js
  // Task 02: Print the values to the console.
  console.log(`My name is ${name}. I am ${age} years old. My student status is ${isStudent}. My favourite programming language is ${favProgLang}.`);
  ```

[⬆️ Go to Context](#context)

#### Task 03: Try reassigning values to let and const variables and observe errors

---

- Task 03 Solution

  ```js
  // Task 03: Try reassigning values to let and const variables and observe errors.
  name = "Shakil"
  age = 25
  console.log(`Name: ${name}\nAge: ${age}`);
  ```

  - Here age is `const` so changing it causing error `Uncaught TypeError: Assignment to constant variable.`

[⬆️ Go to Context](#context)

#### Task 04: Create an object and an array, assign them to new variables, modify, and observe changes

---

- Task 04 Solution

  ```js
  // Task 04: Create an object and an array, assign them to new variables, modify, and observe changes.

  // Person object
  let Person = {
      name : "Rakib",
      age : 22
  }

  // array
  let arr = [1,2,3,4,5]

  // assigning to new variable
  let Person2 = Person
  let arr2 = arr

  // changing newly assign ones
  Person2["name"] = "Shakib"
  arr2[0] = 6

  // printing initial Person and arr values
  console.log(Person["name"]);
  console.log(arr[0]);
  ```

  - At the end Person and arr is printed which is changed but we changed Person2, arr2
  - Reason for this is Pass by Reference for Non-Primitive data type object and array

[⬆️ Go to Context](#context)

## **Day 03 - MASTER Operators & Expressions in JavaScript**

### Operands, Operators, Expressions

- **Operator** - In programming operators are nothing but some symbols that you apply on something to carry out a calculation (`+ ,-,/,%`)
- **Operands** - operands are this symbol should be applied on something these are the actual value on which your operator works on (`x+y` Here x,y are operands)
- **Expresion** - Expression is something which resolve to a value it means that his final output will be one value (`x=4+5`)

[⬆️ Go to Context](#context)

### String Concatenation Note

> [!NOTE]
>
> - `f_name + " " + l_name` string concat using `'+'` is not recommended
> - Template literals are recommended `${f_name} ${l_name}`

[⬆️ Go to Context](#context)

### Different Types of Operators

- **Arithmetic Operators**
  - `+ , - , * , / , % , ** , ++ , --`
- **Assignment Operators**
  - `= , += , -= , *= , /= , %= , **=`
- **Comparison (Relational) Operators**
  - `== , === , != , !== , > , < , >= , <= , ? :`
- **Logical Operators**
  - `&& , || , !`
- **Bitwise Operators**
  - `& , | , ^ , ~ , << , >> , >>>`
- **String Operators**
  - `+ , +=`  (used for concatenation)
- **Conditional (Ternary) Operator**
  - `condition ? valueIfTrue : valueIfFalse`
- **Comma Operator**
  - `,` (evaluates multiple expressions, returns last)
- **Type Operators**
  - `typeof`
  - `instanceof`
  - `in` (checks if a property exists in object)
  - `delete` (removes property from object)
  - `void` (evaluates expression but returns `undefined`)
- **Spread and Rest Operators**
  - `...` (spread for arrays/objects, rest for parameters)
- **Optional Chaining Operator**
  - `?.`
- **Nullish Coalescing Operator**
  - `??`
- **Grouping Operator**
  - `( )` (used to control precedence)

[⬆️ Go to Context](#context)

#### Arithmetic Operators

- Post-Increment vs Pre-Increment

  ```js
  let count=5
  console.log(count++); // Post-Increment
  console.log(count);
  console.log(++count); // Pre-Increment
  ```

  - Here `Post-Increment` returns the current value first, then increases it by 1.
  - And `Pre-Increment` increases the value first, then returns it.

[⬆️ Go to Context](#context)

#### Assignment Operators

Assignment operators are used to assign values to variables.

- Basic Assignment

  | Operator | Example | Meaning                          | Equivalent To |
  | -------- | ------- | -------------------------------- | ------------- |
  | `=`      | `x = y` | Assigns the value of `y` to `x`. | —             |

- Compound Assignment Operators

  | Operator | Example   | Meaning                                 | Equivalent To |
  | -------- | --------- | --------------------------------------- | ------------- |
  | `+=`     | `x += y`  | Adds `y` to `x`                         | `x = x + y`   |
  | `-=`     | `x -= y`  | Subtracts `y` from `x`                  | `x = x - y`   |
  | `*=`     | `x *= y`  | Multiplies `x` by `y`                   | `x = x * y`   |
  | `/=`     | `x /= y`  | Divides `x` by `y`                      | `x = x / y`   |
  | `%=`     | `x %= y`  | Assigns the remainder of `x / y` to `x` | `x = x % y`   |
  | `**=`    | `x **= y` | Raises `x` to the power of `y`          | `x = x ** y`  |

- Bitwise Assignment Operators

  | Operator | Example    | Meaning                        | Equivalent To |
  | -------- | ---------- | ------------------------------ | ------------- |
  | `&=`     | `x &= y`   | Bitwise AND                    | `x = x & y`   |
  | `\|=`    | `x \|= y`  | Bitwise OR                     | `x = x \| y`  |
  | `^=`     | `x ^= y`   | Bitwise XOR                    | `x = x ^ y`   |
  | `<<=`    | `x <<= y`  | Left shift                     | `x = x << y`  |
  | `>>=`    | `x >>= y`  | Right shift (sign-propagating) | `x = x >> y`  |
  | `>>>=`   | `x >>>= y` | Unsigned right shift           | `x = x >>> y` |

[⬆️ Go to Context](#context)

#### Comparison Operators

Comparison operators are used to **compare two values**.
They return a **Boolean** (`true` or `false`) result depending on whether the comparison is true.

- Basic Comparison Operators

  | Operator | Example   | Meaning                                          | Returns                                     |
  | -------- | --------- | ------------------------------------------------ | ------------------------------------------- |
  | `==`     | `x == y`  | Equal to (compares **values**, not types)        | `true` if values are equal                  |
  | `===`    | `x === y` | **Strict equal** (compares **values and types**) | `true` if both value and type are equal     |
  | `!=`     | `x != y`  | Not equal to (compares **values**)               | `true` if values are not equal              |
  | `!==`    | `x !== y` | **Strict not equal** (values or types differ)    | `true` if either value or type is not equal |

- Relational Operators

  | Operator | Example  | Meaning                  | Returns                                       |
  | -------- | -------- | ------------------------ | --------------------------------------------- |
  | `>`      | `x > y`  | Greater than             | `true` if `x` is greater than `y`             |
  | `<`      | `x < y`  | Less than                | `true` if `x` is less than `y`                |
  | `>=`     | `x >= y` | Greater than or equal to | `true` if `x` is greater than or equal to `y` |
  | `<=`     | `x <= y` | Less than or equal to    | `true` if `x` is less than or equal to `y`    |

- Object Comparison in JavaScript

  ```js
  // Different memory address
  let obj1 = { 'name': 'tansen' } // XX0011
  let obj2 = { 'name': 'tansen' } // YY0022

  console.log(obj1 === obj2); // false → different memory references
  console.log(obj1 !== obj2); // true  → not the same object
  ```

  - `===` compares **object references**, not their contents.
  - Even if two objects look identical, they are stored at **different addresses in memory**.

[⬆️ Go to Context](#context)

#### Logical Operators

Logical operators are used to combine or manipulate **Boolean (true/false)** values.
They are commonly used in **conditions**, **control flow**, and **short-circuit evaluation**.

- Basic Logical Operators

  | Operator | Example    | Meaning                                               | Returns                                |
  | -------- | ---------- | ----------------------------------------------------- | -------------------------------------- |
  | `&&`     | `x && y`   | **Logical AND** — true if *both* `x` and `y` are true | `true` if both operands are true       |
  | `\|\|`   | `x \|\| y` | **Logical OR** — true if *either* `x` or `y` is true  | `true` if at least one operand is true |
  | `!`      | `!x`       | **Logical NOT** — reverses Boolean value              | `true` if `x` is false                 |

- Cow and Horse example

  ```js
  console.log("Cow" && "Horse"); // "Horse"
  ```

  - The `&&` operator evaluates **from left to right**.
  - It stops when it finds a **falsy** value.
  - If all operands are **truthy**, it returns the **last evaluated operand**.

1. `"Cow"` → truthy ✅
2. `"Horse"` → truthy ✅
3. Since both are truthy, the expression returns the **last value**, `"Horse"`.

- More odd example to understand

  ```js
  console.log(0 && "Horse");      // 0        → stops early (0 is falsy)
  console.log("Cow" && "");       // ""       → second operand falsy
  console.log("Cow" && "Horse");  // "Horse"  → both truthy, returns last
  console.log("Cow" && null);     // null     → returns first falsy (null)
  ```

[⬆️ Go to Context](#context)

#### The Nullish Coalescing Operator

- The `??` operator was introduced in **ES2020**, and it’s **not** a basic logical operator.
- It belongs to the **Nullish Coalescing family**, often discussed *alongside* logical operators   because it behaves somewhat like `||` — but with one key difference.

`x ?? y` → Returns `x` **if it is not `null` or `undefined`**, otherwise returns `y`.

[⬆️ Go to Context](#context)

#### Conditional (ternary) operator

The **conditional (ternary) operator** is a **short-hand for `if...else`**.
It takes **three operands**: a condition, an expression to return if true, and an expression to return if false.

  ```js
  condition ? expressionIfTrue : expressionIfFalse
  ```

- `condition` → a Boolean expression (`true` or `false`)
- `expressionIfTrue` → returned if `condition` is `true`
- `expressionIfFalse` → returned if `condition` is `false`

```js
let age = 23;
console.log(age >= 60 ? "Senior Citizen" : "Non Senior Citizen");
```

[⬆️ Go to Context](#context)

#### Bitwise Operators

Bitwise operators work on the **binary representation** of integers.
They perform operations on **individual bits** of numbers.

- Basic Bitwise Operators

  | Operator | Example   | Meaning                        | Explanation                                               |
  | -------- | --------- | ------------------------------ | --------------------------------------------------------- |
  | `&`      | `x & y`   | AND                            | Sets each bit to `1` if **both bits** are `1`             |
  | `\|`     | `x \| y`  | OR                             | Sets each bit to `1` if **either bit** is `1`             |
  | `^`      | `x ^ y`   | XOR (Exclusive OR)             | Sets each bit to `1` if **bits are different**            |
  | `~`      | `~x`      | NOT (Bitwise complement)       | Inverts all bits (`0 → 1`, `1 → 0`)                       |
  | `<<`     | `x << y`  | Left shift                     | Shifts bits of `x` left by `y` positions, fills with `0`  |
  | `>>`     | `x >> y`  | Right shift (sign-propagating) | Shifts bits of `x` right by `y` positions, preserves sign |
  | `>>>`    | `x >>> y` | Unsigned right shift           | Shifts bits right by `y` positions, fills with `0`        |

[⬆️ Go to Context](#context)

#### Grouping and Operator Precedence

**Operator precedence** determines the **order in which operators are evaluated** in an expression.
**Grouping parentheses `()`** can be used to **override the default precedence**.

- Operator Precedence

  ```js
  let result = 2 + 3 * 4;
  console.log(result); // 14 → multiplication (*) has higher precedence than addition (+)
  ```

- Using Grouping Parentheses

  ```js
  let result = (2 + 3) * 4;
  console.log(result); // 20 → parentheses change evaluation order
  ```

- Key Points
  - **Parentheses `()`** → Highest precedence, evaluated first
  - **Unary operators** (`!`, `++`, `--`, `+`, `-`) → Next highest
  - **Multiplication `*`, Division `/`, Modulus `%`** → Higher than addition/subtraction
  - **Addition `+`, Subtraction `-`** → Evaluated after `*`, `/`, `%`
  - **Comparison operators** (`<`, `>`, `<=`, `>=`) → Lower precedence
  - **Equality operators** (`==`, `===`, `!=`, `!==`) → Lower than comparison
  - **Logical AND `&&`** → Lower than equality
  - **Logical OR `||`** → Lower than AND
  - **Assignment operators** (`=`, `+=`, `-=`...) → Lowest precedence (evaluated last)

[⬆️ Go to Context](#context)

#### typeof Operator

The `typeof` operator is used to **determine the type of a value** in JavaScript.
It returns a **string** indicating the type.

  ```js
  console.log(typeof 42);            // "number"
  console.log(typeof "Hello");       // "string"
  console.log(typeof true);          // "boolean"
  console.log(typeof undefined);     // "undefined"
  console.log(typeof {name: "Tansen"}); // "object"
  console.log(typeof [1, 2, 3]);    // "object" → arrays are objects
  console.log(typeof null);          // "object" → historical JavaScript quirk
  console.log(typeof function(){});  // "function"
  ```

[⬆️ Go to Context](#context)

### [**Day 03 Tasks**](./Day%2003%20-%20MASTER%20Operators%20&%20Expressions%20in%20JavaScript/Tasks/)

#### Task 01 - Odd or Even?

- Take a number and find if the number is an odd or even number.
- Print the number and result in the console.

---

- Task 01 Solution

  ```js
  let num1=3
  if(num1%2==0){
      console.log(`Number ${num1} is even number`);
  }else{
  console.log(`Number ${num1} is odd number`);
  }
  ```

[⬆️ Go to Context](#context)

#### Task 02 - Do you have a Driving License?

- Let's check if you are eligible to get a driving license. The eligibility to get a driving license is 18 years.
  - Manage age as a variable.
  - Check if the age is eligible for a driving license and print it on the console accordingly.

---

- Task 02 Solution

  ```js
  let age=18
  if(age>=18){
      console.log(`Age ${age} is eligible for a driving license`);
  }else{
      console.log(`Age ${age} is not eligible for a driving license`);
  }
  ```

[⬆️ Go to Context](#context)

#### Task 03 - Calculate CTC with a Bonus

- Let's calculate how much you earn from your office.
  - You get 12,300 rupees as your monthly salary.
  - You get a 20% bonus on your annual salary.
  - How much money do you make per annum as a CTC?

---

- Task 03 Solution

  ```js
  let monthSalary=12300
  let annualSalary=12300*12
  let bonusAnnual=annualSalary*(20/100)
  let annumCtc=annualSalary+bonusAnnual
  console.log(annumCtc);
  ```

[⬆️ Go to Context](#context)

#### Task 04 - Write a program for the Traffic Light Simulation

- Red Light... Green Light... Let's Play!
  - Create a color variable.
  - Based on the color variable's value print in the console if a traveler needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

---

- Task 04 Solution

  ```js
  let color="Green Light"
  if(color=="Red Light"){
      console.log(`Stop Traveler! It is ${color}`);
  }else if(color=="Green Light"){
      console.log(`GO Traveler! It is ${color}`);
  }else{
      console.log(`${color} not a valid color`);
  }
  ```

[⬆️ Go to Context](#context)

#### Task 05 - Create an Electricity Bill Calculator

- Let's calculate how much you pay for electricity bills per month and annually.
  - Create a units variable. Based on this value you will calculate the total electricity bill for a months.
  - If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
  - If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

---

- Task 05 Solution

  ```js
  let units=5
  let perUnitCost=150
  let perMonthCost=(units*perUnitCost)*30
  let annualCost=(perMonthCost*12)
  let discount = annualCost*(20/100)
  let discountedAnnualCost=annualCost - discount
  console.log(perMonthCost);
  console.log(discountedAnnualCost);
  ```

[⬆️ Go to Context](#context)

#### Task 06 - Leap Year Checker

- Is 2025 a Leap Year?
  - Take year as input.
  - Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

---

- Task 06 Solution

  ```js
  let year = 2025
  let result = year%4==0?"Leap Year":"Not Leap Year"
  console.log(result);
  ```

[⬆️ Go to Context](#context)

#### Task 07 - Max of Three Numbers

- Find the max number from the lot.
  - Take three numbers and assign them to variables p, q, and r.
  - Now find the maximum of these three numbers using the comparison operators.

---

- Task 07 Solution

  ```js
  let p=5,q=1,r=4
  if(p>q && p>r){
      console.log(`${p} is maximum among ${q} & ${r}`);
  }else if(q>p && q>r){
      console.log(`${q} is maximum among ${p} & ${r}`);
  }else{
      console.log(`${r} is maximum among ${p} & ${q}`);
  }
  ```

[⬆️ Go to Context](#context)

#### Task 08 - Bitwise Doubling

- A tricky one for you
  - Create a variable count and assign a value, say, 5.
  - Now use the Bitwise shift operator to make the number double.
  - Print it on the console.

---

- Task 08 Solution

  ```js
  let count=5
  // 5 = 101
  // 10 = 1010
  console.log(count<<1);
  ```

[⬆️ Go to Context](#context)

## **Day 04 - MASTERING Control Flow in JavaScript With Quizzes**

### The Control Flow

Control flow in JavaScript determines the **order** in which statements are executed.
By default, JavaScript executes code **from top to bottom**, **left to right**, but control flow statements allow us to **change this order** based on conditions, loops, or function calls.

- Types of Control Flow

  | Type                                   | Purpose                | Examples                      |
  | -------------------------------------- | ---------------------- | ----------------------------- |
  | [Conditional](#conditional-statements) | Make decisions         | `if`, `switch`                |
  | [Looping](#looping-statements)         | Repeat code            | `for`, `while`, `do...while`  |
  | [Jump](#jump-statements)               | Control loop execution | `break`, `continue`, `return` |
  | [Exception](#exception-handling)       | Handle runtime errors  | `try...catch`                 |

---

[⬆️ Go to Context](#context)

#### Conditional Statements

> Used to make decisions based on conditions

- `if` Statement : Executes a block of code **if** a condition is true.

  ```js
  if (age >= 18) {
    console.log("You can vote!");
  }
  ```

- `if...else` Statement : Executes one block **if true**, another **if false**.

  ```js
  let catchingBus = false;
  if (catchingBus) {
      console.log("I will Reach home on time");
  } else {
      console.log("I will be late to reach");
  }
  ```

- `if...else if...else` Ladder : Used when multiple conditions need to be checked.

  ```js
  if (marks >= 80) {
    console.log("A+");
  } else if (marks >= 60) {
    console.log("A");
  } else {
    console.log("Fail");
  }
  ```

- `switch` Statement : Simplifies checking multiple possible values of a variable.

  ```js
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    default:
      console.log("Invalid day");
  }
  ```

  - The `break` keyword stops execution once a match is found.
  - The `default` case runs when no match is found.

- Fall through

  ```js
  const city = "Dhaka";
  switch (city) {
      case "Dhaka":
      case "Chittagong":
      case "Khulna":
      case "Rajshahi":
          console.log("All these are in Bangladesh");
          break;
      case "New York":
      default:
          console.log("It is in USA");
  }
  ```

---

- if-else vs switch-case

  | Feature                  | `if-else`                                   | `switch-case`                                 |
  | ------------------------ | ------------------------------------------- | --------------------------------------------- |
  | **Use case**             | Complex, logical, or range-based conditions | Simple value-based comparisons                |
  | **Type of comparison**   | Can check ranges, conditions, or types      | Compares one value against constants          |
  | **Comparison operator**  | Uses logical (`>`, `<`, `==`, `===`, etc.)  | Uses strict equality (`===`)                  |
  | **Performance**          | Slower with many conditions                 | Faster with multiple discrete values          |
  | **Readability**          | Becomes messy with many conditions          | More structured and cleaner                   |
  | **Fall-through**         | Not applicable                              | Possible if `break` is missing                |
  | **Data types supported** | Any expression or condition                 | Only discrete values (numbers, strings, etc.) |


[⬆️ Go to Context](#context)

#### Looping Statements

> Used to execute a block of code **repeatedly** until a condition is met.

- `for` Loop : Used when the number of iterations is known.

  ```js
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  ```

- `while` Loop : Used when the number of iterations is **unknown** but depends on a condition.

  ```js
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
  ```

- `do...while` Loop : Executes code **at least once**, then checks the condition.

  ```js
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
  ```

- `for...of` Loop : Used to iterate over **iterable objects** like arrays.

  ```js
  const fruits = ["apple", "banana", "cherry"];
  for (const fruit of fruits) {
    console.log(fruit);
  }
  ```

- `for...in` Loop : Used to iterate over **object properties**.

  ```js
  const person = { name: "John", age: 25 };
  for (const key in person) {
    console.log(key + ": " + person[key]);
  }
  ```

---

[⬆️ Go to Context](#context)

#### Jump Statements

> Used to alter the normal sequence of execution.

- `break` : Exits a loop or `switch` immediately.

  ```js
  for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
  }
  ```

- `continue` : Skips the current iteration and moves to the next one.

  ```js
  for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
  }
  ```

- `return` : Exits from a function and optionally returns a value.

  ```js
  function add(a, b) {
    return a + b;
  }
  ```

---

[⬆️ Go to Context](#context)

#### Exception Handling

> Used to manage runtime errors gracefully.

- `try...catch...finally`

  ```js
  try {
    let result = riskyOperation();
    console.log(result);
  } catch (error) {
    console.log("An error occurred:", error);
  } finally {
    console.log("Execution complete.");
  }
  ```

  - `try`: Defines code to test.
  - `catch`: Handles errors.
  - `finally`: Executes code regardless of success or failure.

> [!NOTE]
>
> - Always use braces `{}`, even for one-line statements.

[⬆️ Go to Context](#context)

### **Day 04 Tasks**

#### Task 01 - What will be the output of this code snippet and why?

  ```js
  let day = "Monday";

  switch (day) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
  }
  ```

---

- Task 01 Solution
  - Output is "It's a normal day." Cause it is case sensitive where we can see day = "Monday" but in the case it is "monday" which does not match so default output "It's a normal day."

[⬆️ Go to Context](#context)

#### Task 02 - Build an ATM Cash Withdrawal System

- Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print "Withdrawal successful" if valid, otherwise print "Invalid amount".

---

- Task 02 Solution

  ```js
  let amount = 1500
  if(amount%100==0){
      console.log("Withdrawal successful");
  }else{
      console.log("Invalid amount");
  }
  ```

[⬆️ Go to Context](#context)

#### Task 03 - Build a Calculator with switch-case

- Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

---

- Task 03 Solution

  ```js
  let operator = "%"
  switch(operator){
      case "+":
          console.log(5+2);
          break
      case "-":
          console.log(5-2);
          break
      case "/":
          console.log(5/2);
          break
      case "%":
          console.log(5%2);
          break
      default:
          console.log("Invalid operator");
  }
  ```

[⬆️ Go to Context](#context)

#### Task 04 - Pay for your movie ticket

Imagine, the INOX charges ticket prices based on age

- Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8

Write a program that prints the ticket price based on the person’s age.

---

- Task 04 Solution

  ```js
  let age=61
  if(age<18){
      console.log(`Ticket price for children age ${age} is $3`);
  }else if(18<=age && age<=60){
      console.log(`Ticket price for Adults age ${age} is $10`);
  }else if(age>60){
      console.log(`Ticket price for Seniors age ${age} is $8`);
  }else{
      console.log("Invalid age");
  }
  ```

[⬆️ Go to Context](#context)

#### Task 05 - Horoscope Sign Checker

- Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April born are Aries, April and May born are Taurus, and so on. Do not use if-else.

---

- Task 05 Solution

  ```js
  let month = "October"
  switch(month){
      case "January":
      case "February":
          console.log("Aquarius");
          break
      case "February":
      case "March":
          console.log("Pisces");
          break
      case "March":
      case "April":
          console.log("Aries");
          break
      case "April":
      case "May":
          console.log("Taurus");
          break
      case "May":
      case "June":
          console.log("Gemini");
          break
      case "June":
      case "July":
          console.log("Cancer");
          break
      case "July":
      case "August":
          console.log("Leo");
          break
      case "August":
      case "September":
          console.log("Virgo");
          break
      case "September":
      case "October":
          console.log("Libra");
          break
      case "October":
      case "November":
          console.log("Scorpio");
          break
      case "November":
      case "December":
          console.log("Sagittarius");
          break
      case "December":
      case "January":
          console.log("Capricorn");
          break
      default:
          console.log("Invalid month");
  }
  ```

[⬆️ Go to Context](#context)

#### Task 06 - Which Triangle?

A triangle has 3 sides. A Triangle type is determined by its sides

- All sides equal is called, *Equilateral Triangle*.
- Two sides equal is called, *Isosceles Triangle*.
- All sides different is called, *Scalene Triangle*.

Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs every time manually to see if the output changes correctly.

---

- Task 06 Solution

  ```js
  let side1=4,side2=6,side3=7
  if(side1===side2 && side1===side3 && side2===side3){
      console.log("Equilateral Triangle");
  }else if(side1===side2 || side1===side3 || side2===side3){
      console.log("Isosceles Triangle");
  }else if(side1!==side2 || side1!==side3 || side2!==side3){
      console.log("Scalene Triangle");
  }else{
      console.log("Invalid values");
  }
  ```

[⬆️ Go to Context](#context)
