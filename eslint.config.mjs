import eslintJs from '@eslint/js';
import eslintTs from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPrettierRecommended from 'eslint-plugin-prettier/recommended';
import astroEslintParser from 'astro-eslint-parser';

export default [
  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroEslintParser,
      parserOptions: {
        parser: eslintTs.TSParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    // Define the configuration for `<script>` tag.
    // Script in `<script>` is assigned a virtual file name with the `.js` extension.
    ...eslintPrettierRecommended,
    files: ['**/*.{ts,tsx,js,mjs}', '**/*.astro/*.js'],
    languageOptions: {
      parser: eslintTs.TSParser,
    },
    rules: {
      'prettier/prettier': 'off',
    },
  },
  {
    ignores: [
      'dist',
      'node_modules',
      '.github',
      'types.generated.d.ts',
      'src/env.d.ts',
      '.astro',
    ],
  },
];
