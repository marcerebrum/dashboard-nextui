module.exports = {
  root: true,
  extends: [
    './.nuxt/eslint.config.mjs'
  ],
  rules: {
    // Permitir diretivas personalizadas do CSS/Tailwind
    unknownAtRules: 'off'
  },
  overrides: [
    {
      files: ['**/*.css'],
      rules: {
        unknownAtRules: [
          'error',
          {
            ignoreAtRules: [
              'theme',
              'tailwind',
              'layer',
              'apply',
              'screen',
              'container',
              'config',
              'keyframes',
              'font-face',
              'import',
              'use'
            ]
          }
        ]
      }
    }
  ]
}
