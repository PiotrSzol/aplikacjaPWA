const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/_variables.scss')}";`
      }
    }
  }
};
