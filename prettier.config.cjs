module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    endOfLine: 'lf',

    plugins: [
        'prettier-plugin-organize-imports',
        'prettier-plugin-sort-imports',
    ],

    importOrder: [
        '^react',
        '<THIRD_PARTY_MODULES>',
        '^@/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};