import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const production = process.env.BUILD === 'production';

function getConfig({ dir, format }) {
  return {
    input: 'src/index.ts',
    output: {
      exports: 'named',
      dir,
      format,
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      typescript({ outDir: dir }),
      production && terser(),
    ],
  }
}

export default [
  getConfig({ dir: 'dist/cjs', format: 'cjs' }),
  getConfig({ dir: 'dist/esm', format: 'esm' }),
];
