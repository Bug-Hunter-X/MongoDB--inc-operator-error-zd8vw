# MongoDB $inc Operator Error
This example demonstrates an incorrect usage of the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numeric field by a specified value. However, in this case, a string value is being passed as an argument which is causing an unexpected behavior.

## Bug
The original code attempts to increment the `counter` field by the string value '1'. This results in an error because the `$inc` operator expects a numeric value.

## Solution
The corrected code uses the number 1 to correctly increment the `counter` field. 