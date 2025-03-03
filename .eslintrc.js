module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'unused-imports'],
    rules: {
        // react
        'react/jsx-props-no-spreading': 'warn',
        'react/no-unstable-nested-components': 'warn',
        'react/no-array-index-key': 'off',
        'react/function-component-definition': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],

        // imports
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',

        // code style
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'no-underscore-dangle': 'off',
        'max-len': ['error', { code: 130, ignoreComments: true }],
        'linebreak-style': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'unused-imports/no-unused-imports': 'error',
        eqeqeq: 'off',
        'prefer-const': ['warn', { ignoreReadBeforeAssign: true }],
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'internal',
                        position: 'before',
                    },
                ],
                groups: [
                    'index',
                    'sibling',
                    'parent',
                    'internal',
                    'external',
                    'builtin',
                    'object',
                    'type',
                ],
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'max-len': 'off',
            },
        },
    ],
};
