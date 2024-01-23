'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      allowAppImports: ['**/*.json'],
    },
    // Add options here
  });

  return app.toTree();
};
