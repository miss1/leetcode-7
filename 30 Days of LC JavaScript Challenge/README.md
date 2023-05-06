# Function
It gives you the opportunity to encapsulate a variable within a new scope.
* Functions Within Functions: create functions within other functions and even return them
* Function Hoisting: a function can sometimes be used before it is initialized.

arrow syntax
* More minimalistic syntax
* No automatic hoisting
* Can't be bound to this, super, and arguments or be used as a constructor.

# Closures
When a function is created, it has access to a reference to all the variables declared around it, 
also known as its lexical environment. The combination of the function and its environment is called a closure.

### example
* declare functions within other functions and return them. The inner function has access to any variables declared above it

### Closures Versus Classes

true encapsulation
* In class, you can access the inside variable. 
* In the closure example, it is theoretically impossible to access it.

How the functions are stored in memory.
* If you create many instances of a class, each instance stores a single reference to the prototype object where all the methods are stored.
* For closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called. 