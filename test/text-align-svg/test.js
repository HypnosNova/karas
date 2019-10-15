var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",14.484375],["fill","#000"],["font-family","arial"],["font-size","16px"]],"content":"1"}]}],"transform":[],"type":"dom"},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",175.546875],["y",32.8828125],["fill","#000"],["font-family","arial"],["font-size","16px"]],"content":"1"}]}],"transform":[],"type":"dom"},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",351.09375],["y",51.28125],["fill","#000"],["font-family","arial"],["font-size","16px"]],"content":"1"}]}],"transform":[],"type":"dom"}],"transform":[],"type":"dom","defs":[]}')
      .end();
  }
};