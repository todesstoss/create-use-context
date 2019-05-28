import pkg from './package.json';
import babel from 'rollup-plugin-babel';

export default [
  // browser-friendly UMD build
  {
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],
    input: 'src/index.js',
    external: ['react'],
    output: {
      name: 'create-use-context',
      file: pkg.browser,
      format: 'umd',
    },
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],
    input: 'src/index.js',
    external: ['react'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
