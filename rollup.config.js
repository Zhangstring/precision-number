import typescript from 'rollup-plugin-typescript2'
export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'iife',
      name: 'PN',
      file: './build/index.iife.js'
    },
    {
      format: 'umd',
      name: 'PN',
      file: './build/index.umd.js'
    },
    {
      format: 'cjs',
      file: './build/index.js'
    }
  ],
  plugins: [typescript()]
}
