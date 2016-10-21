'use strict';

var foo = require('foo');

foo.bar(function() {
  console.log('this is module foo prop 2!');
});

module.exports = {};

