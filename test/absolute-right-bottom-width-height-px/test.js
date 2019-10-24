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
