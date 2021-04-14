let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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FUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+gED3TS0SIECgIiDQFUYjBAgQ6AsIdN/UIgECBCoCAl1hNEKAAIG+wP8B/3ZitPhMGs8AAAAASUVORK5CYII=')
      .end();
  }
};
