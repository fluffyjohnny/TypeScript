# TypeScript

Javascript is a great first language to learn, but when building larger projects, it can easily create uncaught bugs. This is where TypeScript comes in, where it limits the typing of variables, creating a stricter environment which informs the developer when they change one area of code in a way that will break other areas. 
 - created by Microsoft and was publicly released in 2012

----

##  TypeScript transpiler, run "tsc" in the terminal.

One of the first things we'll discover with TypeScript is that when we decalre a variable with an initial value, the variable can never be reassinged a value of a different type. the is `type inference`

## TypeScript recognizes JavaScript's built-in "primitive" data types: 
- boolean
- number 
- null
- string 
- undefined 
----

## Any 
Variables of type `any` can be assigned to any value and TypeScript won't give an error if they're reassigned to a different type later on. 

---

## Variable Type Annotations 

We can tell TypeScript what type somethng is or will be by using type annotation, if the variable was declared as `any`. 

```js
let mustBeAString : string; 
// must be a string will only be read as a string.
```

--- 

## tsconfig.json
For when we don't want all the default rules that TypeScript is trting to enforce

---

## Function

Parameter Type Annotations
```js
function (value: `type`) {
  things to run
}
```

Optional Parameters 
```js
function (value?: `type`) {
  console.log(option1 || option2)
}

// if we want option2 to be outputed when option1 is undefined.
```

Default Parameters 
```js
function (value = `default`) {
  console.log(value)
}

// instead of using optional parameters, use default instead.
```

Inferring Return Types 

```js
function () {
  return `type`
}

// whatever type we return, the output will have to be the same typing.
```

Explicit Return Types
```ts
function (): `type` {
  code to run
}
```

Void Return Type 
```js
function logGreeting(name: string): void{
  console.log(`Hello, ${name}!`);
};

// when the return value is null or undefined, we can specify this by : void. 
```

Documenting Comments 
```js
/** 
 * brief explaination 
 * @param var1 - type
 * @returns type
*/
```
--- 

## Complex Types 

### Arrays 
If only containing one type of data

```ts
let names: string[] = ['name1', 'name2'];
//or 
let names: Array<string> = ['name1', 'name2']

// will throw error when wrong type of data is inputed, or when trying to .push() into array
```

multi-dimensional arrays
```ts
let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];

// string[][] is short for (string[])[]
```

Tuples (array typed with elements of specific types)
- tuples cannot be reassigned to arrays
- also works the same way on REST parameters (...array) 
```ts
let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; 

// can make tuples an array
const newArr = ourTuple.concat(ourTuple)
// this makes newArr an array instead of a tuple
```

-----

## Custom Typing

### Enums
 - 'enum'erate all the possible values

 ```ts
enum Direction {
  North,
  South,
  East,
  West
}

// default: North == 0, South == 1, East == 2 ... etc

// can alter the starting number, or set individual ones
 ```

 String Enums 
 - With numeric enums, the numbers could be assigned automatically, but with string enums we must write the string explicitly
 - it is recommended to use string enums because it is more strict
 ```ts
enum DirectionNumber { North, South, East, West }
enum DirectionString { 
  North =  'NORTH', 
  South = 'SOUTH', 
  East = 'EAST', 
  West = 'WEST' }
 ```

 ### Object Types 

 ```ts 
let aPerson: {
  name: string, 
  age: number
}; 

// this is only declaring, not assigning value yet
 ```

 ### Type Aliases
- Assigning a variable to a custom type
 ```ts
type MyString = string;
let myVar: MyString = 'Hi'; // Valid code.
 ```

 ### Function Types 

 ```ts
type StringsToNumberFunction = (arg0: string, arg1: string) => number;


let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};
 
myFunc = function(whatever: string, blah: string) {
  return whatever.length - blah.length;
};
 ```

 ### Generic Type 

 ```ts
type Family<T> = {
  parents: [T, T], 
  mate: T, 
  children: T[]
};
 ```

 Generic Functions 

 ```ts
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
 ```

 --- 

 ## UNION TYPES

Allows for the variable to be more than one specific type
 ```ts 
let ID: string | number;
 
// number
ID = 1;
 
// or string
ID = '001';
 
console.log(`The ID is ${ID}.`);
 ```

 can also narrow union typing by setting the condition in the function 

 ```ts
function getMarginLeft(margin: string | number) {
  // margin may be a string or number here
 
  if (typeof margin === 'string') {
    // margin must be a string here
    return margin.toLowerCase();
  }
}
 ```

 ### Inferred Union Return Types 

 ```ts

 ```