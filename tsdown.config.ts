import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'convert-bytes': 'src/convert-bytes/index.ts',
    'create-basic-token': 'src/create-basic-token/index.ts',
    'data-attr-boolean': 'src/data-attr-boolean/index.ts',
    'decode-basic-token': 'src/decode-basic-token/index.ts',
    'default-array': 'src/default-array/index.ts',
    'default-object': 'src/default-object/index.ts',
    'delay-async': 'src/delay-async/index.ts',
    'get-bytes': 'src/get-bytes/index.ts',
    'is-object-empty': 'src/is-object-empty/index.ts',
    'name-initials': 'src/name-initials/index.ts',
    'omit-props': 'src/omit-props/index.ts',
    'parse-email': 'src/parse-email/index.ts',
    'to-safe-number': 'src/to-safe-number/index.ts',
    'try-async': 'src/try-async/index.ts'
  },
  format: ['cjs', 'esm'],
  outExtensions: ({ format }) => ({
    js: `.${format}.js`,
    dts: `.d.ts`,
  }),
  dts: true,
  tsconfig: 'tsconfig.build.json',
});