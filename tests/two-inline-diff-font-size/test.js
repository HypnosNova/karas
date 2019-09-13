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