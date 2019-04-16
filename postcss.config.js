const pluginAutoprefixer = require('autoprefixer');
const pluginCssnano = require('cssnano');

module.exports = {
  plugins: [
    pluginAutoprefixer,
    pluginCssnano({
      preset: 'default',
    }),
  ],
};
