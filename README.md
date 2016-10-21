# rollup-plugin-commonjs issue

I've tried to isolate what appears to be a problem with rollup-plugin-commonjs
- https://github.com/rollup/rollup-plugin-commonjs/issues/111

The project has a main entry point `index.js` that imports two modules, with these two modules pulling a common
global dependency and proceeding to reference it. If this global dependency (imported via commonjs module syntax)
is a function and invoked in more than one module, a `node.declaration.gatherPossibleValues is not a function`
error is thrown.

## Setup

```
npm install
npm run rollup
```

### module_foo.js

This demonstrates the issue

```
> rollup -c

Treating 'foo' as external dependency
Treating 'foo' as external dependency
node.declaration.gatherPossibleValues is not a function
TypeError: node.declaration.gatherPossibleValues is not a function
    at callHasEffects (C:\Users\abrowning\Git\dev\rollup-issue\node_modules\rollup\src\ast\nodes\shared\callHasEffects.js:51:23)
    at CallExpression.hasEffects (C:\Users\abrowning\Git\dev\rollup-issue\node_modules\rollup\src\ast\nodes\CallExpression.js:29:10)
    at ExpressionStatement.hasEffects (C:\Users\abrowning\Git\dev\rollup-issue\node_modules\rollup\src\ast\Node.js:58:32)
    at Module.run (C:\Users\abrowning\Git\dev\rollup-issue\node_modules\rollup\src\Module.js:328:14)
    at C:\Users\abrowning\Git\dev\rollup-issue\node_modules\rollup\src\Bundle.js:146:14
    at Array.forEach (native)
    at C:\Users\abrowning\Git\dev\rollup-issue\node_modules\rollup\src\Bundle.js:145:19
    at process._tickCallback (internal/process/next_tick.js:103:7)
    at Module.runMain (module.js:606:11)
    at run (bootstrap_node.js:394:7)
Type rollup --help for help, or visit https://github.com/rollup/rollup/wiki
```

### module_foo_es6.js

No issue here

```
> rollup -c

Treating 'foo' as external dependency
```


### module_foo_prop.js

No issue here

```
> rollup -c

Treating 'foo' as external dependency
Treating 'foo' as external dependency

```

### module_workaround.js

No issue here

```
> rollup -c

Treating 'foo' as external dependency
Treating 'foo' as external dependency

```
