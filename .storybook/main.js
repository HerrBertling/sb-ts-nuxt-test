const path = require('path')

module.exports = {
  stories: ['../**/story/**.js'],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        '@': path.dirname(path.resolve(__dirname)),
        '~': path.dirname(path.resolve(__dirname))
      }
    }

    return config
  }
}
