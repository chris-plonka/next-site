module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:tailwindcss/recommended',
    "eslint:recommended", "next"
  ],
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../'],
      },
    ],
  }
}
