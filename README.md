# wdio-saucedemo

This project contains solution for the EPAM assignment - automated tests for the functionality of the [saucedemo](https://www.saucedemo.com/) website using WebdriverIO.

## Task

```
Launch URL: https://www.saucedemo.com/
UC-1 Test Login form with empty credentials:
Type any credentials into "Username" and "Password" fields.
Clear the inputs.
Hit the "Login" button.
Check the error messages: "Username is required".
UC-2 Test Login form with credentials by passing Username:
Type any credentials in username.
Enter password.
Clear the "Password" input.
Hit the "Login" button.
Check the error messages: "Password is required".
UC-3 Test Login form with credentials by passing Username & Password:
Type credentials in username which are under Accepted username are sections.
Enter password as secret sauce.
Click on Login and validate the title “Swag Labs” in the dashboard.
Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.
Please, add task description as README.md into your solution!
To perform the task use the various of additional options:
Test Automation tool: WebDriverIO;
Browsers: 1) Chrome; 2) Edge;
Locators: XPath;
Patterns: Page Object;
Assertions: Use from the selected framework;
[Optional] Loggers: Use from the selected framework.
```

## Features

- Fully configured;
- Mocha BDD;
- Parallel execution;
- Winston logger;
- Allure reporter;
- Data Provider for parameterized tests;
- Test Automation tool: WebDriverIO;
- Browsers used: Chrome, Edge, Firefox;
- Locators used: XPath;
- Design Pattern: Page Object Model;
- Assertions framework: wdio assertions.

## Installation

Clone the repository and install dependencies:

```bash
  git clone https://github.com/Raaaama/wdio-saucedemo
  cd wdio-saucedemo
  npm install
```

## Usage

Run the tests with the following command:

```bash
  npm test
```

## Project structure

```
.
├── ...
├── src                     # Source files
│   ├── config              # Configuration files
│   │   ├── wdio.conf.js    # Configuration file for WebDriverIO
│   │   └── logges.js       # Winston logger
│   ├── po                  # Page Object directory
│   │   ├── components      # Reusable UI components
│   │   │   ├── common      # Common components
│   │   │   ├── login       # Components specific to the login page
│   │   │   └── ...
│   │   └── pages           # Page objects representing different pages
│   ├── tests               # Test files directory
│   │   ├── data            # Data providers for parametrize tests
│   │   ├── specs           # Autotests
│   │   └── utils           # Utilities
└── ...

```

## Artifacts

The directories will be created after running the tests

```
.
├── ...
├── artifacts               # Artifacts directory
│   ├── allure-results      # Allure report results
│   ├── logs                # Logs directory
│   └── screenshots         # Screenshots captured after failed tests
└── ...

```

An Allure report is generated with each run. To view the report, use:

```bash
  npx allure serve artifacts/allure-results
```

## Issue with clearValue() and setValue("")

During the development of this project, I encountered issues with `clearValue()` and `setValue("")` methods in ChromeDriver. These methods did not behave as expected, particularly in triggering the `onChange` event properly. This inconsistency led to challenges in clearing and setting input values reliably.

To address these issues, I implemented a custom function named `clearInput()` located at `src/tests/utils/inputUtils.js`. This function ensures proper clearing of input fields by simulating keypress events, thereby bypassing the shortcomings observed with WebDriverIO's built-in methods.
