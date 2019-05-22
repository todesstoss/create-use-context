import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
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
    input: 'src/index.js',
    external: ['react'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
  },
];
