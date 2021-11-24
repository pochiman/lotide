# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: takes in 2 arrays and returns true if they are equal and false otherwise
* `assertEqual`: takes in 2 values and returns true if they are equal and false otherwise
* `assertObjectsEqual`: takes in 2 objects and returns true if they are equal and false otherwise
* `countOnly`: takes in a collection of items and returns a specific subset of those items
* `eqArrays`: takes in 2 arrays and returns true if the arrays are equal and false otherwise
* `eqObjects`: takes in 2 objects and return true if they are equal and false otherwise
* `findKey`: takes in an object and callback and returns the first key that meets the criteria specified in callback
* `findKeyByValue`: takes in an object and a value and returns the first key that corresponds to that value
* `head`: takes in an array and returns the first element in the array
* `map`: takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
* `middle`: takes in an array and returns middle most element of the array
* `takeUntil`: takes in an array and callback and returns a slice of the array based on the criteria specified in the callback
* `without`: takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array