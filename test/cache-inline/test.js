let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};
