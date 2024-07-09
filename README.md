# wdio-saucedemo

This project contains solution for the EPAM assignment - automated tests for the functionality of the [saucedemo](https://www.saucedemo.com/) website using WebdriverIO.

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
