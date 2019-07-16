export default {
  input: 'src/index.js',
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
  ]
}
