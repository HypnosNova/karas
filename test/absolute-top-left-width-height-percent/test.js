var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};