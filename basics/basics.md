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