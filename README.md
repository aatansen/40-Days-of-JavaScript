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

### **Day 01 Tasks**

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
