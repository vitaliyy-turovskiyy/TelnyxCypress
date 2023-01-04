# ***Writing and automation of 10 test cases for the [site](https://telnyx.com/) using the [Cypress](https://www.cypress.io/) framework***
_____
To get started, you need to clone the project from the link [here](https://github.com/vitaliyy-turovskiyy/TelnyxCypress.git) and then install all the necessary dependencies using the command:

 ```npm install```

To play and view tests in an interactive browser, you must use the command:

```npx cypress open```

For running the tests in headless (without launching the GUI) use:

```npx cypress run``` - to run all tests

```npx cypress run -- spec "cypress/e2e/specs/**.feature"```- to run a specific test file
_____
This project presents a set of tests that check the functionality of some blocks of the https://telnyx.com/ website.
Cypress is very easy to use, but for correct operation you need to be well versed in locators ( :warning: I faced the problem that in order to work with XPath you will need to install the package beforehand)

Most often, I used the following structures for the test:

element->check->command 

or 

element->command->check 



**cy.get(selector)** + **.should('be.disabled')** + **.click()**




![LQ](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_O-uZzS8KUkUpmitdhiCVnDeYDj4vtCliw&usqp=CAU)