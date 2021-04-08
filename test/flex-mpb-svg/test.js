let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"bb":[{"type":"item","tagName":"path","props":[["d","M0,0L60,0L60,18.3984375L0,18.3984375L0,0"],["fill","rgba(255,0,0,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",5],["y",14.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"2"}]}],"visibility":"visible","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M60,0L100,0L100,18.3984375L60,18.3984375L60,0"],["fill","rgba(0,0,255,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",60],["y",14.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"3"}]}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"bb":[{"type":"item","tagName":"path","props":[["d","M0,18.3984375L55,18.3984375L55,36.796875L0,36.796875L0,18.3984375"],["fill","rgba(255,0,0,1)"]]}],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",5],["y",32.8828125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",700],["font-style","normal"],["font-size","16px"]],"content":"2"}]}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M55,18.3984375L100,18.3984375L100,36.796875L55,36.796875L55,18.3984375"],["fill","rgba(0,0,255,1)"]]}],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",55],["y",32.8828125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",700],["font-style","normal"],["font-size","16px"]],"content":"3"}]}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom","defs":[]}')
      .end();
  }
};
