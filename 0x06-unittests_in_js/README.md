# 0x06. Unittests in JS

## Description

This assignment focuses on creating unit tests for JavaScript code using Mocha, a popular testing framework for Node.js. The project involves writing tests for a suite of functions that perform various tasks such as calculating the number of arguments passed to a function, validating the type of arguments, and handling asynchronous operations.

## Learning Objectives

By the end of this assignment, you should be able to:

- Understand the concept of unit testing and its importance in software development
- Use Mocha to write and run tests for JavaScript code
- Write tests for synchronous and asynchronous functions
- Use assertions to verify the expected behavior of functions
- Use spies to mock dependencies and verify their interactions with the code under test
- Use hooks to set up and tear down test environments

## Requirements

- Node.js 12.11.x
- Ubuntu 18.04 LTS
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- All files must be executable
- The length of your files will be tested using `wc`
- All your test files should be inside a folder named `tests`
- All your test files should be named `filename.test.js`
- All your tests should be in the root of the test folder
- Your tests should be executed using the command `npm run test`
- Your code should use the `Jest` testing framework
- Your code should have a `package.json` file at the root
- Your code should have a `.eslintrc.js` file at the root
- Your code should follow the AirBnB style guide
- All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

## Setup

- Install Node.js 12.11.x
- Clone the repository
- Install dependencies using `npm install`
- Run tests using `npm run test`

## Tasks

### 0. Basic test with Mocha and Node assertion library

Write a test suite using Mocha and Node's assertion library to test the `calculateNumber` function. The function takes two arguments and returns the sum of those arguments.

### 1. Combining descriptions

Write a test suite using Mocha and Node's assertion library to test the `getFullDescriptionFromYear` function. The function takes a year as an argument and returns a string that describes the year in a sentence.

### 2. Async tests with done

Write a test suite using Mocha and Node's assertion library to test the `getUserById` function. The function takes a user ID as an argument and returns a user object. The function is asynchronous and uses a callback to return the user object.

### 3. Async tests with async/await

Write a test suite using Mocha, Chai, and Chai's `expect` assertion library to test the `getUserById` function. The function takes a user ID as an argument and returns a user object. The function is asynchronous and uses a promise to return the user object.

### 4. Parameterize a test with an array of objects

Write a test suite using Mocha, Chai, and Chai's `expect` assertion library to test the `getProductById` function. The function takes a product ID as an argument and returns a product object. The function is asynchronous and uses a promise to return the product object. The test suite should be parameterized with an array of objects that contain the product ID and the expected product object.

### 5. Hooks

Write a test suite using Mocha, Chai, and Chai's `expect` assertion library to test the `createUser` function. The function takes a user object as an argument and creates a new user in the database. The test suite should use hooks to set up and tear down the database before and after each test.

### 6. Basic integration testing

Write a test suite using Mocha, Chai, and Chai's `expect` assertion library to test the `getAllUsers` function. The function returns an array of all users in the database. The test suite should use a mock database to test the function's behavior.

### 7. API integration testing

Write a test suite using Mocha, Chai, and Chai's `expect` assertion library to test the `app` module. The module exports an Express app that serves a JSON API. The test suite should use a mock server to test the app's behavior.

## Author

- Leornadia


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
