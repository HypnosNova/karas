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
