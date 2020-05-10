const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
module.exports = {
  plugins: [
    tailwindcss('../tailwind.config.js'),

    purgecss({
      content: ['../src/style/tailwind.css'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
    }),

    cssnano({ preset: 'default' })
  ]
}
