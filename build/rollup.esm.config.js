import basicConfig, { name, file } from './rollup.config';

export default {
  ...basicConfig,
  output: {
    name: 'MofongComponents',
    file: file('esm'),
    format: 'esm',
    globals: {
      vue: 'Vue',
      'lodash-es': '_',
    },
    exports: 'named',
  },
};
