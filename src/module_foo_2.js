'use strict';

var foo = require('foo');

foo(function() {
  console.log('this is module foo 2!');
});

module.exports = {};

