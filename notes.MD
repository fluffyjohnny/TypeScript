# TypeScript

Javascript is a great first language to learn, but when building larger projects, it can easily create uncaught bugs. This is where TypeScript comes in, where it limits the typing of variables, creating a stricter environment which informs the developer when they change one area of code in a way that will break other areas.

- created by Microsoft and was publicly released in 2012

---

## TypeScript transpiler, run "tsc" in the terminal.

One of the first things we'll discover with TypeScript is that when we decalre a variable with an initial value, the variable can never be reassinged a value of a different type. the is `type inference`

## TypeScript recognizes JavaScript's built-in "primitive" data types:

- boolean
- number
- null
- string
- undefined

---

## Any

Variables of type `any` can be assigned to any value and TypeScript won't give an error if they're reassigned to a different type later on.

---

## Variable Type Annotations

We can tell TypeScript what type somethng is or will be by using type annotation, if the variable was declared as `any`.

```js
let mustBeAString: string;
// must be a string will only be read as a string.
```

---

## tsconfig.json

For when we don't want all the default rules that TypeScript is trting to enforce

<br><br><br>

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
function logGreeting(name: string): void {
  console.log(`Hello, ${name}!`);
}

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
let names: string[] = ["name1", "name2"];
//or
let names: Array<string> = ["name1", "name2"];

// will throw error when wrong type of data is inputed, or when trying to .push() into array
```

multi-dimensional arrays

```ts
let arr: string[][] = [
  ["str1", "str2"],
  ["more", "strings"],
];

// string[][] is short for (string[])[]
```

Tuples (array typed with elements of specific types)

- tuples cannot be reassigned to arrays
- also works the same way on REST parameters (...array)

```ts
let ourTuple: [string, number, string, boolean] = [
  "Is",
  7,
  "our favorite number?",
  false,
];

// can make tuples an array
const newArr = ourTuple.concat(ourTuple);
// this makes newArr an array instead of a tuple
```

<br><br><br><br>

---

## Custom Typing

### Enums

- 'enum'erate all the possible values

```ts
enum Direction {
  North,
  South,
  East,
  West,
}

// default: North == 0, South == 1, East == 2 ... etc

// can alter the starting number, or set individual ones
```

String Enums

- With numeric enums, the numbers could be assigned automatically, but with string enums we must write the string explicitly
- it is recommended to use string enums because it is more strict

```ts
enum DirectionNumber {
  North,
  South,
  East,
  West,
}
enum DirectionString {
  North = "NORTH",
  South = "SOUTH",
  East = "EAST",
  West = "WEST",
}
```

### Object Types

```ts
let aPerson: {
  name: string;
  age: number;
};

// this is only declaring, not assigning value yet
```

### Type Aliases

- Assigning a variable to a custom type

```ts
type MyString = string;
let myVar: MyString = "Hi"; // Valid code.
```

### Function Types

```ts
type StringsToNumberFunction = (arg0: string, arg1: string) => number;

let myFunc: StringsToNumberFunction;
myFunc = function (firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

myFunc = function (whatever: string, blah: string) {
  return whatever.length - blah.length;
};
```

### Generic Type

```ts
type Family<T> = {
  parents: [T, T];
  mate: T;
  children: T[];
};
```

Generic Functions

```ts
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}
```

<br><br><br><br><br>

---

## UNION TYPES

Allows for the variable to be more than one specific type

```ts
let ID: string | number;

// number
ID = 1;

// or string
ID = "001";

console.log(`The ID is ${ID}.`);
```

can also narrow union typing by setting the condition in the function

```ts
function getMarginLeft(margin: string | number) {
  // margin may be a string or number here

  if (typeof margin === "string") {
    // margin must be a string here
    return margin.toLowerCase();
  }
}
```

### Inferred Union Return Types

- TypeScript will look at the contents of a function and infer which types the function can return. If there are multiple possible return types, TypeScript will infer the return type as a union.

```ts
type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: "nikko" };
  } else {
    return "Could not create a user.";
  }
}

const userData: User | string = createUser();
```

### Unions and Arrays

- To create a union that supports multiple types for an array’s values, wrap the union in parentheses (string | number), then use array notation [].

```ts
const dateNumber = new Date().getTime(); // returns a number
const dateString = new Date().toString(); // returns a string

const timesList: (string | number)[] = [dateNumber, dateString];
```

Common Key Value Pairs

- TypeScript will only allow us to use the common methods and properties that all members of the union share

```ts
const batteryStatus: boolean | number = false;

batteryStatus.toString(); // No TypeScript error
batteryStatus.toFixed(2); // TypeScript error
```

### Union with literal Types

- We can use literal types with TypeScript unions. Literal type unions are useful when we want to create distinct states within a program.

```ts
type Color = "green" | "yellow" | "red";

function changeLight(color: Color) {
  // ...
}
```

<br>
<br>
<br>
<br>

---

## Type Narrowing

typescript allows us to evaluate runtime code.

```ts
function formatDate(date: string | number) {
  // date can be a number or string here

  if (typeof date === "string") {
    // date must be a string here
  }
}

// strings and numbers are allowed in the param, but with the conditional statement we are able to narrow the type down to only string types
```

### Type Guards

One way that TypeScript can narrow a type is with a conditional statement that checks if a variable is a specific type

- The `typeof` operator is a type of typeguard

<br>

### The `in` operator

- It checks if a property exists on an object itself or anywhere within its prototype chain.
- `in` is also considered a typegaurd

```ts
type Tennis = {
  serve: () => void;
};

type Soccer = {
  kick: () => void;
};

function play(sport: Tennis | Soccer) {
  if ("serve" in sport) {
    return sport.serve();
  }

  if ("kick" in sport) {
    return sport.kick();
  }
}
```

### Narrowing with `else`

TypeScript can recognize the `else` block of an `if/else` statement as being the opposite type guard check of the if statement’s type guard check.

```ts
function formatPadding(padding: string | number) {
  if (typeof padding === "string") {
    return padding.toLowerCase();
  } else {
    return `${padding}px`;
  }
}
```

<br>

### Narrowing after a Type Guard

TypeScript can also type narrow without an `else`statement, provided that there’s a `return` statement within the type guard.

```ts
type Tea = {
  steep: () => string;
};

type Coffee = {
  pourOver: () => string;
};

function brew(beverage: Coffee | Tea) {
  if ("steep" in beverage) {
    return beverage.steep();
  }

  return beverage.pourOver();
}
```

<br><br>

---

<br>

# Advances and Types

## Interfaces and Typpes

We've learned to create custom types, but we can also utilize interface to create a typed object.

The biggest difference between interface and type is that interface can only be used to type `objects`, while type can be used to type `objects`, `primitives`, and more.

```ts
interface Mail {
  postagePrice: number;
  address: string;
}

const catalog: Mail = ...
```

<br>

## Interfaces and Classes

Since `interface` is constrained to typed objects and using `class` is a way to program with objects, `interface` and `class` are a great match.

```ts
interface Robot {
  identify: (id: number) => void;
}

class OneSeries implements Robot {
  identify(id: number) {
    console.log(`beep! I'm ${id.toFixed(2)}.`);
  }

  answerQuestion() {
    console.log("42!");
  }
}

// The implements keyword is then used to apply the type Robot to OneSeries.
```

<br>

## Deep Types

we may need to add nested methods and properties when our program becomes more complex.

```ts
interface Robot {
  about: {
    general: {
      id: number;
      name: string;
    };
  };
  getRobotId: () => string;
}

//

class OneSeries implements Robot {
  about;

  constructor(props: { general: { id: number; name: string } }) {
    this.about = props;
  }

  getRobotId() {
    return `ID: ${this.about.general.id}`;
  }
}

// TypeScript allows us to infinitely nest objects so that we can describe data correctly.
```

<br>

## Composed Types

We can define multiple types and reference them inside other types.

```ts
// from this
interface About {
  general: {
    id: number;
    name: string;
    version: {
      versionNumber: number;
    };
  };
}

// to this
interface About {
  general: General;
}

interface General {
  id: number;
  name: string;
  version: Version;
}

interface Version {
  versionNumber: number;
}

// Composing types together is an essential way to keep our code organized and flexible.
```

<br>

---

## Extending Interfaces

In TypeScript, it’s not always enough to be able to compose types together. Sometimes it’s convenient to copy all the type members from one type into another type. We can accomplish this with the `extends` keyword.

```ts
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const mySquare: Square = { sideLength: 10, color: "blue" };
```

<br>

---

## Index Signatures

When typing objects in TypeScript, sometimes it’s not possible to know the property names for an object, like when we get back information from an outside data source/API.

```ts
// unknown property name
{
  '40.712776': true;
  '41.203323': true;
  '40.417286': false;
}

// how to assign a name
interface SolarEclipse {
  [latitude: string]: boolean;
}
```

<br>

---

## Optional Type Members

TypeScript allows us to make some type members optional.

```ts
interface OptionsType {
  name: string;
  size?: string;
}

function listFile(options: OptionsType) {
  let fileName = options.name;

  if (options.size) {
    fileName = `${fileName}: ${options.size}`;
  }

  return fileName;
}

// the property size is optional in this case.

//Since .size is optional, we added a conditional to check if it exists before trying to use the .size property.
```
