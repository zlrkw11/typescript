# Primitives
string, number and boolean

1. string - "Hello, world"
2. number - 42 (no difference in int and float etc, all nums)
3. boolean - true / false

String / Number / Boolean with capitals are legal but for certain built-in types. Use non-capitals.

## Arrays
[1,2,3]
syntax:
````
number[],
string[]

or 

Array<number>
````

## any
special type, any, can be used anywhere & whenever we don't want a particular value to cause typechecking errors.

when a value is of type *any*, we can access any properties of it (which will in turn of type *any* too), call it like a *function*, assign it to (or from) a value of any type, or pretty much anything else that's syntactically legal:

````
let obj: any = {x:0};

// any line down below is okay, as any disables ALL further type checking
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;
````

it is very useful when I don't want to write out a long type just to convice TypeScript that a particular line of code is okay.