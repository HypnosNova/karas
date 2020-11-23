let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '[{"node":"svg","index":0,"lv":0,"num":1,"total":7},{"node":"div","index":1,"childIndex":0,"lv":1,"num":3,"total":6},{"node":"span","index":2,"childIndex":0,"lv":2,"num":1,"total":1},{"node":"text","index":3,"childIndex":0,"lv":3},{"node":"strong","index":4,"childIndex":1,"lv":2,"num":1,"total":1},{"node":"text","index":5,"childIndex":0,"lv":3},{"node":"div","index":6,"childIndex":2,"lv":2,"num":1,"total":1},{"node":"text","index":7,"childIndex":0,"lv":3}]')
      .end();
  }
};