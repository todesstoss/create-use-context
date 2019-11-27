import babel from 'rollup-plugin-babel';

export default [
  {
    input: {
      index: 'src/index.js',
      'create-use-context': 'src/createUseContext.js',
      'create-with-context': 'src/createWithContext.js',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
    ],
    output: [
      {
        exports: 'named',
        dir: 'dist/cjs',
        format: 'cjs',
      },
      {
        dir: 'dist/esm',
        format: 'esm',
      },
    ],
    external: ['react', 'hoist-non-react-statics', 'react-display-name'],
  },
];
