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
