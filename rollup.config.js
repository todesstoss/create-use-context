import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

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
    ],
  }
}

export default [
  getConfig({ dir: 'dist/cjs', format: 'cjs' }),
  getConfig({ dir: 'dist/esm', format: 'esm' }),
];
