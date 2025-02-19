# Unhandled 'undefined' values in JavaScript

This repository demonstrates a common error in JavaScript: not handling the possibility of undefined values properly. The `foo` function attempts to access the `length` property of a variable that might be undefined, leading to a runtime error.

## Bug Description
The `foo` function is supposed to return the length of the input if it's an array or null, otherwise it should return 0. However, it fails when an undefined value is passed as an argument.  The code doesn't explicitly check for undefined and attempts to access the `length` property of an undefined object which throws an error.