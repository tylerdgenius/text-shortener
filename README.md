# text-shortener

# Description

This package is used to help shorten text/strings passed in, generate a truncated string and return the value to the users

# Usage

```js
const output = truncateText(value, length)

output: This contains the return text value based on arguments passed in

value: required
This can be any text string
length: optional
This can be any number
```

When length is passed in, the function will evaluate the value passed in. If the value's length is less than the length passed in, the function will return the value untouched BUT if not the function will return the truncated value

If length is not passed in, the function will evaluate the text against the base value: 30. If the value's length is less than the 30, the function will return the value untouched BUT if not the function will return the truncated value

Thank you
