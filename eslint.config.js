import { defineConfig } from '@eslint/config-helpers';
import gnome from 'eslint-config-gnome';

export default defineConfig([
  gnome.configs.recommended,
  gnome.configs.jsdoc,
  {
    rules: {
      camelcase: [
        'error',
        {
          properties: 'never',
        },
      ],
      'consistent-return': 'error',
      eqeqeq: ['error', 'smart'],
      'key-spacing': [
        'error',
        {
          mode: 'minimum',
          beforeColon: false,
          afterColon: true,
        },
      ],
      'prefer-arrow-callback': 'error',
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-jsdoc': [
        'error',
        {
          exemptEmptyFunctions: true,
          publicOnly: {
            esm: true,
          },
        },
      ],
      'object-curly-spacing': 'off',
    },
    languageOptions: {
      globals: {
        global: 'readonly',
      },
    },
  },
  {
    rules: {
      indent: ['error', 2],
    },
  },
  {
    ignores: ['dist'],
  },
]);
