module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['@brightlayer-ui/eslint-config/tsx'],
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        browser: true,
    },
    rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'no-empty-function': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: [
                    'classProperty',
                    'objectLiteralProperty',
                    'typeProperty',
                    'classMethod',
                    'objectLiteralMethod',
                    'typeMethod',
                    'accessor',
                    'enumMember',
                ],
                format: null,
                modifiers: ['requiresQuotes'],
            },
        ],
    },
};
