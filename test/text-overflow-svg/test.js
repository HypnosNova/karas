let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",14.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"},{"type":"item","tagName":"text","props":[["x",8.90625],["y",14.484375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"…"}]}],"visibility":"visible","overflow":"url(#karas-defs-0-0)","type":"dom"},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",32.8828125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"123456"}]}],"visibility":"visible","overflow":"url(#karas-defs-0-1)","type":"dom"},{"bb":[],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",51.28125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"},{"type":"item","tagName":"text","props":[["x",8.90625],["y",51.28125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"…"}]}],"visibility":"visible","type":"dom"}],"visibility":"visible","overflow":"url(#karas-defs-0-2)","type":"dom"},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",69.6796875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"123456"}]}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",53.4375],["y",69.6796875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"},{"type":"item","tagName":"text","props":[["x",62.34375],["y",69.6796875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"…"}]}],"visibility":"visible","overflow":"url(#karas-defs-0-3)","type":"dom"},{"bb":[],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",88.078125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"},{"type":"item","tagName":"text","props":[["x",8.90625],["y",88.078125],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"…"}]}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"type":"text","children":[]}],"visibility":"visible","type":"dom"}],"visibility":"visible","overflow":"url(#karas-defs-0-4)","type":"dom"},{"bb":[],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",106.4765625],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"},{"type":"item","tagName":"text","props":[["x",8.90625],["y",106.4765625],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"…"}]}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"type":"text","children":[]}],"visibility":"visible","type":"dom"}],"visibility":"visible","overflow":"url(#karas-defs-0-5)","type":"dom"},{"bb":[],"children":[{"bb":[],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",124.875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"1"},{"type":"item","tagName":"text","props":[["x",8.90625],["y",124.875],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"…"}]}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"type":"text","children":[]}],"visibility":"visible","type":"dom"},{"bb":[],"children":[{"type":"text","children":[]}],"visibility":"visible","type":"dom"}],"visibility":"visible","overflow":"url(#karas-defs-0-6)","type":"dom"},{"bb":[{"type":"item","tagName":"path","props":[["d","M0,128.7890625L360,128.7890625L360,147.1875L0,147.1875L0,128.7890625"],["fill","rgba(255,0,0,1)"]]}],"children":[{"type":"text","children":[{"type":"item","tagName":"text","props":[["x",0],["y",143.2734375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"},{"type":"item","tagName":"text","props":[["x",336],["y",143.2734375],["fill","rgba(0,0,0,1)"],["font-family","arial"],["font-weight",400],["font-style","normal"],["font-size","16px"]],"content":"…"}]}],"visibility":"visible","overflow":"url(#karas-defs-0-7)","type":"dom"}],"visibility":"visible","type":"dom","defs":[{"tagName":"clipPath","props":[],"children":[{"tagName":"path","props":[["d","M0,0L30,0L30,18.3984375L0,18.3984375,L0,0"]]}],"id":0,"uuid":"karas-defs-0-0","index":0},{"tagName":"clipPath","props":[],"children":[{"tagName":"path","props":[["d","M0,18.3984375L30,18.3984375L30,36.796875L0,36.796875,L0,18.3984375"]]}],"id":1,"uuid":"karas-defs-0-1","index":1},{"tagName":"clipPath","props":[],"children":[{"tagName":"path","props":[["d","M0,36.796875L30,36.796875L30,55.1953125L0,55.1953125,L0,36.796875"]]}],"id":2,"uuid":"karas-defs-0-2","index":2},{"tagName":"clipPath","props":[],"children":[{"tagName":"path","props":[["d","M53.4375,55.1953125L83.4375,55.1953125L83.4375,73.59375L53.4375,73.59375,L53.4375,55.1953125"]]}],"id":3,"uuid":"karas-defs-0-3","index":3},{"tagName":"clipPath","props":[],"children":[{"tagName":"path","props":[["d","M0,73.59375L30,73.59375L30,91.9921875L0,91.9921875,L0,73.59375"]]}],"id":4,"uuid":"karas-defs-0-4","index":4},{"tagName":"clipPath","props":[],"children":[{"tagName":"path","props":[["d","M0,91.9921875L30,91.9921875L30,110.390625L0,110.390625,L0,91.9921875"]]}],"id":5,"uuid":"karas-defs-0-5","index":5},{"tagName":"clipPath","props":[],"children":[{"tagName":"path","props":[["d","M0,110.390625L30,110.390625L30,128.7890625L0,128.7890625,L0,110.390625"]]}],"id":6,"uuid":"karas-defs-0-6","index":6},{"tagName":"clipPath","props":[],"children":[{"tagName":"path","props":[["d","M0,128.7890625L360,128.7890625L360,147.1875L0,147.1875,L0,128.7890625"]]}],"id":7,"uuid":"karas-defs-0-7","index":7}]}<defs><clipPath id="karas-defs-0-0"><path d="M0,0L30,0L30,18.3984375L0,18.3984375,L0,0"></path></clipPath><clipPath id="karas-defs-0-1"><path d="M0,18.3984375L30,18.3984375L30,36.796875L0,36.796875,L0,18.3984375"></path></clipPath><clipPath id="karas-defs-0-2"><path d="M0,36.796875L30,36.796875L30,55.1953125L0,55.1953125,L0,36.796875"></path></clipPath><clipPath id="karas-defs-0-3"><path d="M53.4375,55.1953125L83.4375,55.1953125L83.4375,73.59375L53.4375,73.59375,L53.4375,55.1953125"></path></clipPath><clipPath id="karas-defs-0-4"><path d="M0,73.59375L30,73.59375L30,91.9921875L0,91.9921875,L0,73.59375"></path></clipPath><clipPath id="karas-defs-0-5"><path d="M0,91.9921875L30,91.9921875L30,110.390625L0,110.390625,L0,91.9921875"></path></clipPath><clipPath id="karas-defs-0-6"><path d="M0,110.390625L30,110.390625L30,128.7890625L0,128.7890625,L0,110.390625"></path></clipPath><clipPath id="karas-defs-0-7"><path d="M0,128.7890625L360,128.7890625L360,147.1875L0,147.1875,L0,128.7890625"></path></clipPath></defs><g></g><g><g visibility="visible" clip-path="url(#karas-defs-0-0)"><g></g><g><g><text x="0" y="14.484375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">1</text><text x="8.90625" y="14.484375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g><g visibility="visible" clip-path="url(#karas-defs-0-1)"><g></g><g><g><text x="0" y="32.8828125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">123456</text></g></g></g><g visibility="visible" clip-path="url(#karas-defs-0-2)"><g></g><g><g visibility="visible"><g></g><g><g><text x="0" y="51.28125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">1</text><text x="8.90625" y="51.28125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g></g></g><g visibility="visible"><g></g><g><g><text x="0" y="69.6796875" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">123456</text></g></g></g><g visibility="visible" clip-path="url(#karas-defs-0-3)"><g></g><g><g><text x="53.4375" y="69.6796875" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">1</text><text x="62.34375" y="69.6796875" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g><g visibility="visible" clip-path="url(#karas-defs-0-4)"><g></g><g><g visibility="visible"><g></g><g><g><text x="0" y="88.078125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">1</text><text x="8.90625" y="88.078125" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g><g visibility="visible"><g></g><g><g></g></g></g></g></g><g visibility="visible" clip-path="url(#karas-defs-0-5)"><g></g><g><g visibility="visible"><g></g><g><g><text x="0" y="106.4765625" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">1</text><text x="8.90625" y="106.4765625" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g><g visibility="visible"><g></g><g><g></g></g></g></g></g><g visibility="visible" clip-path="url(#karas-defs-0-6)"><g></g><g><g visibility="visible"><g></g><g><g><text x="0" y="124.875" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">1</text><text x="8.90625" y="124.875" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g><g visibility="visible"><g></g><g><g></g></g></g><g visibility="visible"><g></g><g><g></g></g></g></g></g><g visibility="visible" clip-path="url(#karas-defs-0-7)"><g><path d="M0,128.7890625L360,128.7890625L360,147.1875L0,147.1875L0,128.7890625" fill="rgba(255,0,0,1)"></path></g><g><g><text x="0" y="143.2734375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</text><text x="336" y="143.2734375" fill="rgba(0,0,0,1)" font-family="arial" font-weight="400" font-style="normal" font-size="16px">…</text></g></g></g></g>')
      .end();
  }
};
