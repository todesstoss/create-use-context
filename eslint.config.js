import eslint from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', 'coverage/**', '.husky/**'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.test.ts'],
    ...vitest.configs.recommended,
    languageOptions: {
      globals: vitest.environments.env.globals,
    },
  }
);
