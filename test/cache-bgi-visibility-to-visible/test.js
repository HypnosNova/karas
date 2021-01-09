let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .pause(100)
      .assert.value('input', 'data:image/png;base64,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')
      .end();
  }
};
