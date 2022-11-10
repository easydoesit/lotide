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

* `head(array)`: get the first index of an array
* `tail(array)`: get all the array indexes after 0.
* `middle(array)`: takes in an array and returns the middle indexes
* `countLetters(string)`: countLetters in a string ignoring spaces
* `without(sourceArray, itemsToRemoveArray)`: takes an Array in the first argument and the items to be removed as the second argument