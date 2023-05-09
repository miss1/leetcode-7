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

# class
Every time a new Person is created, age and name fields are added to the object. However only a single reference to the prototype object is added. So no matter how many instances of Person are created or how many methods are on the class, only a single prototype object is generated.
```
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("My name is", this.name);
  }
}

// equal
const alice = {
  name: "Alice",
  age: 25,
  __proto__: {
    greet: function() {
      console.log("My name is", this.name);
    }
  }
};
```

# Proxies
allow you to override the default behavior of objects.
```
const alice = new Proxy({name: "Alice", age: 25}, {
  get: (target, key) => {
    if (key === 'greet') {
      return () => console.log("My name is", target.name);
    } else {
      return target[key];
    }
  },
});
alice.greet(); // Logs: "My name is Alice"

// Perform validation to guarantee bad data is never entered into a form.
const validator = {
  set: (obj, prop, value) => {
    if (prop === "age") {
      if (typeof value !== "number" || value < 0) {
        throw new TypeError("Age must be a positive number");
      }
    }
    obj[prop] = value;
  },
};

const person = new Proxy({}, validator);
person.age = 25; // Works fine
person.age = -5; // Throws an error
```

# Truthy and Falsy
All values are considered truthy except the following:
* false
* All forms of zero, meaning 0, -0 (output of 0/-1), and 0n (output of BigInt(0))
* NaN ("Not a Number", one way to get it is with 0/0)
* "" (empty string)
* null
* undefined