const path = require('path')

module.exports = {
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
    localeDetection: false
  },
  localePath: path.resolve(__dirname, 'public', 'locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development'
}
