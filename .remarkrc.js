module.exports = {
  plugins: [
    'remark-frontmatter',
    'remark-external-links',
    'remark-capitalize',
    'remark-preset-lint-markdown-style-guide',
    ['lint-maximum-line-length', false],
    ['lint-emphasis-marker', false],
    ['lint-list-item-spacing', false],
    ['lint-unordered-list-marker-style', '+'],
    ['lint-no-shortcut-reference-link', false],
    [
      'lint-fenced-code-flag',
      {
        allowEmpty: true,
      },
    ]
  ],
};