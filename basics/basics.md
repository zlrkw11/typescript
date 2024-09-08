# Typescript

### 1.11
we need an object with a callable flip property. JS doesnt surface this info in a way that we can check while the code is running.

## Static Type-checking
````
const message = "hello!";
 
message();
````
running this sample with TS will throw an error straight away on the code.

## Non-exception Failures
````
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined
````
JS will return undefined when the prop doesnt exist. While TS will provide an error.

## Explicit Types
### hello.ts
specified the person is a string and date is a Date object. 
So, the greet function will take person of type string and date of type Date. So, the function can only be used with the right types of params passed in.

````
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());
````
But it is not compulsory to always write out the types.

