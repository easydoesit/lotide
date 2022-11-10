# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @easydoesit/lotide`

**Require it:**

`const _ = require('@easydoesit/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`:count Letters in a string ignoring spaces
* `countOnly(array of strings, object specifying what to count)`: Counts all the items that correspond to the items in the object.
* `eqArrays(arrayActual, arrayExpected)`: takes two arrays and checks that they are equal
* `eqObjects(object1, object2)`:Returns true if both objects have identical keys with identical values.
* `findKey(obj, callback)`:findKey takes in an object and a callback, returns the first that returns true.
* `findKeyByValue(object, value)`: scans the object and returns the first key which contains the value.
* `flatten(array)`: flatten function takes in 1 array with any level of nesting and returns a new flat array.
* `head(array)`: get the first index of an array.
* `letterPositions(string)`: return the positions of letters in a string ignoring spaces.
* `map(array, callback)`:in an array and any other callback argument. It performs the callback on the full array.
* `middle(array)`: takes in an array and returns the middle indexes.
* `tail(array)`: get all the array indexes after 0.
* `takeUntil(array, callback)`: eturn the slice of an array with the elements taken from the beginning, until callback/predicate is true
* `without(sourceArray, itemsToRemoveArray)`: takes an Array in the first argument .and the items to be removed as the second argument.
