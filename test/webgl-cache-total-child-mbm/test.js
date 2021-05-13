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
