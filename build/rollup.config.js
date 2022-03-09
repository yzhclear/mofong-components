import { name } from '../package.json';
import vuePlugin from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
const overrides = {
  compilerOptions: { declaration: true },
  exclude: ['node_modules', 'src/App.vue', 'src/main.ts'],
};

const file = (type) => `dist/${name}.${type}.js`;

export { name, file };

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'esm',
  },
  plugins: [nodeResolve(), typescript({ tsconfigOverride: overrides }), vuePlugin(), css({ output: 'dist/bundle.css' })],
  external: ['vue', 'lodash-es'],
};
