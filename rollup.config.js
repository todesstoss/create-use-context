import babel from 'rollup-plugin-babel';
import jsx from 'rollup-plugin-jsx';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**',
      }),
      commonjs(),
      terser(),
    ],
    output: {
      exports: 'named',
      name: 'createUseContext',
      file: 'dist/umd/index.js',
      format: 'umd',
      esModule: false,
      globals: {
        react: 'React',
        'hoist-non-react-statics': 'HoistNonReactStatics',
      },
    },
    external: ['react', 'hoist-non-react-statics'],
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
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
