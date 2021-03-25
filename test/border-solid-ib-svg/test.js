let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[{"type":"item","tagName":"path","props":[["d","M0,0L10,0L10,10L0,0M10,0L18.90625,0L18.90625,10L10,10M18.90625,0L28.90625,0L28.90625,0L18.90625,10"],["fill","rgba(255,0,0,1)"]]},{"type":"item","tagName":"path","props":[["d","M28.90625,0L28.90625,0L28.90625,10L18.90625,10M18.90625,10L28.90625,10L28.90625,28.3984375L18.90625,28.3984375M18.90625,28.3984375L28.90625,28.3984375L28.90625,38.3984375L28.90625,38.3984375"],["fill","rgba(255,0,0,1)"]]},{"type":"item","tagName":"path","props":[["d","M0,38.3984375L10,28.3984375L10,38.3984375L0,38.3984375M10,28.3984375L18.90625,28.3984375L18.90625,38.3984375L10,38.3984375M18.90625,28.3984375L28.90625,38.3984375L28.90625,38.3984375L18.90625,38.3984375"],["fill","rgba(255,0,0,1)"]]},{"type":"item","tagName":"path","props":[["d","M0,0L0,0L10,10L0,10M0,10L10,10L10,28.3984375L0,28.3984375M0,28.3984375L10,28.3984375L0,38.3984375L0,38.3984375"],["fill","rgba(255,0,0,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",10],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"}]}],"visibility":"visible","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M28.90625,0L37.8125,0L37.8125,10L28.90625,10"],["fill","rgba(0,0,255,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",28.90625],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"}]}],"visibility":"visible","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M46.71875,10L56.71875,10L56.71875,28.3984375L46.71875,28.3984375"],["fill","rgba(0,0,255,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",37.8125],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"}]}],"visibility":"visible","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M56.71875,28.3984375L65.625,28.3984375L65.625,38.3984375L56.71875,38.3984375"],["fill","rgba(0,0,255,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",56.71875],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"}]}],"visibility":"visible","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M65.625,10L75.625,10L75.625,28.3984375L65.625,28.3984375"],["fill","rgba(0,0,255,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",75.625],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"}]}],"visibility":"visible","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M84.53125,38.3984375L94.53125,28.3984375L94.53125,38.3984375L84.53125,38.3984375M94.53125,28.3984375L103.4375,28.3984375L103.4375,38.3984375L94.53125,38.3984375"],["fill","rgba(0,0,255,1)"]]},{"type":"item","tagName":"path","props":[["d","M84.53125,10L94.53125,10L94.53125,28.3984375L84.53125,28.3984375M84.53125,28.3984375L94.53125,28.3984375L84.53125,38.3984375L84.53125,38.3984375"],["fill","rgba(255,0,0,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",94.53125],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"}]}],"visibility":"visible","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M112.34375,10L122.34375,10L122.34375,28.3984375L112.34375,28.3984375M112.34375,28.3984375L122.34375,28.3984375L122.34375,38.3984375L122.34375,38.3984375"],["fill","rgba(255,0,0,1)"]]},{"type":"item","tagName":"path","props":[["d","M103.4375,28.3984375L112.34375,28.3984375L112.34375,38.3984375L103.4375,38.3984375M112.34375,28.3984375L122.34375,38.3984375L122.34375,38.3984375L112.34375,38.3984375"],["fill","rgba(0,255,0,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",103.4375],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"}]}],"visibility":"visible","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M122.34375,0L132.34375,0L132.34375,10L122.34375,0M132.34375,0L141.25,0L141.25,10L132.34375,10"],["fill","rgba(0,255,0,1)"]]},{"type":"item","tagName":"path","props":[["d","M122.34375,0L122.34375,0L132.34375,10L122.34375,10M122.34375,10L132.34375,10L132.34375,28.3984375L122.34375,28.3984375"],["fill","rgba(0,0,255,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",132.34375],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"}]}],"visibility":"visible","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M141.25,0L150.15625,0L150.15625,10L141.25,10M150.15625,0L160.15625,0L160.15625,0L150.15625,10"],["fill","rgba(0,0,255,1)"]]},{"type":"item","tagName":"path","props":[["d","M160.15625,0L160.15625,0L160.15625,10L150.15625,10M150.15625,10L160.15625,10L160.15625,28.3984375L150.15625,28.3984375"],["fill","rgba(255,0,0,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",141.25],["y",24.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"}]}],"visibility":"visible","type":"dom"}],"visibility":"visible","type":"dom","defs":[]}')
      .end();
  }
};
