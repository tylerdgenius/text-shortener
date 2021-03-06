# text-shortener

# Description

This package is used to help shorten text/strings passed in, generate a truncated string and return the value to the users

# Usage

```js
const output = truncateText(value, length)

output: This contains the returned text value based on {value, length} that are passed into the truncateText fn

value* - required | string
length* - optional | number

```

# Code Demonstration

```js live=true
//Without length option

const output = truncateText('This');

console.log(output); // Outputs 'This'

//Without length option

const output = truncateText(
  'This is a long text that is used for nothing in particular just want to show you how to use this plugin',
);

console.log(output); // Outputs 'This is a long text that is us...'

//With length option

const output = truncateText(
  'This is a long text that is used for nothing in particular just want to show you how to use this plugin',
  4,
);

console.log(output); // Outputs 'This...'

//With length option

const output = truncateText('This', 4);

console.log(output); // Outputs 'This'
```

Thank you
