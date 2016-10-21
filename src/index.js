'use strict';

/* == Global dependency 'foo', imported using commonjs syntax, invoked directly*/
import mod1 from './module_foo.js';

/* == Global dependency 'foo', imported using commonjs syntax, invoke a property*/
// import mod1 from './module_foo_prop.js';

/* == Global dependency 'foo', imported using es6 modules, invoked directly */
// import mod1 from './module_foo_es6.js';

/* == Shimming global dependency 'foo' by wrapping it in an object and exporting the object */
// import mod1 from './module_workaround.js';s

export default {};
