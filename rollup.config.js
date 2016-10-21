import commonjs from 'rollup-plugin-commonjs';
import includePaths from 'rollup-plugin-includePaths';

export default {
  entry: 'src/index.js',
  format: 'umd',
  dest: 'dist/rollup-test.js',
  moduleName: 'test',
  plugins: [
    includePaths({
      include: { },
      paths: ['src'],
      external: [],
      extensions: ['.js']
    }),
    commonjs({
      // // non-CommonJS modules will be ignored, but you can also
      // // specifically include/exclude files
      // include: 'node_modules/**',  // Default: undefined
      // exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined

      // // search for files other than .js files (must already
      // // be transpiled by a previous plugin!)
      //extensions: [ '.js', '.json' ],  // Default: [ '.js' ]

      // // if true then uses of `global` won't be dealt with by this plugin
      // ignoreGlobal: false,  // Default: false

      // // if false then skip sourceMap generation for CommonJS modules
      // sourceMap: false,  // Default: true

      // // explicitly specify unresolvable named exports
      // // (see below for more details)
      // namedExports: { './module.js': ['foo', 'bar' ] }  // Default: undefined
    }),
  ],
  globals: {
    foo: 'foo',
  },
}
