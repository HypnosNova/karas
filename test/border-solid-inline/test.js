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
