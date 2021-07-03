let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",32.8828125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"hello"}]}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",33.84375],["y",14.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"worl"},{"type":"item","tagName":"text","props":[["x",33.84375],["y",32.8828125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"d"}]}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",63.84375],["y",32.8828125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"!"}]}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom","defs":[]}')
      .end();
  }
};
