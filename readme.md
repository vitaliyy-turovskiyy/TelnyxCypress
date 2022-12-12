# ***Writing and automation of 10 test cases for the [site](https://telnyx.com/) using the [Cypress](https://www.cypress.io/) framework***
_____
To get started, you will need to install cypress using the command in the Visual Studio Code:

*npm install cypress --save-dev*

To reproduce and view the tests, you must use the command:

*npx cypress open*
_____
This project presents a set of tests that check the functionality of some blocks of the https://telnyx.com/ website.
Cypress is very easy to use, but for correct operation you need to be well versed in locators ( :warning: I faced the problem that in order to work with ikspass you will need to install the package beforehand)

Most often, I used the following structures for the test:

element->check->command 

or 

element->command->check 



**cy.get(selector)** + **.should('be.disabled')** + **.click()**

In order to open the project, you need to clone it from GitHub using the link [here](https://github.com/vitaliyy-turovskiyy/TelnyxCypress.git)


![LQ](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_O-uZzS8KUkUpmitdhiCVnDeYDj4vtCliw&usqp=CAU)