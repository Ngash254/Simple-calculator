# Simple-calculator
A very simple calculator;

# Html
- A calculator div that contains all the necessary elements.
- Divide this div into two sections, one for the screen the other for the buttons.
- The buttons section should have different divs for the different calculator buttons rows
- Each calculator button row should have the relevant button elements.

# CSS
- Screen probably has a background-color of black and a text color of white for the best contrast results.
- Buttons colors resembling those of the system calculator in an oppo phone🙂.

# Javascript
- Variables: 
    - runningTotal --> Result of every math problem solved and it should remain on the screen until the clear button is invoked.
    - buffer --> Any number a user presses. By default it will hold a zero in string format.
    - previousOperator --> Should be at each instance, one of the calculater operation signs. By default should be null.
    - screen --> For the purpose of rerendering each time a button is clicked.

- Functions:

- All buttons assigned an eventlistener with a function that runs the whole program.
- A function to handle numbers.
- A function to handle symbols.
- A rerender function --> linked with a constantly changing variable, in this case buffer.