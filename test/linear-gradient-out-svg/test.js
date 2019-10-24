var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', '{"bb":[],"children":[{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",0],["width",360],["height",50],["fill","url(#karas-defs-0-0)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",55],["width",360],["height",50],["fill","url(#karas-defs-0-1)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",110],["width",360],["height",50],["fill","url(#karas-defs-0-2)"]]}],"children":[],"transform":[],"type":"dom"},{"bb":[{"type":"item","tagName":"rect","props":[["x",0],["y",165],["width",360],["height",50],["fill","url(#karas-defs-0-3)"]]}],"children":[],"transform":[],"type":"dom"}],"transform":[],"type":"dom","defs":[{"tagName":"linearGradient","props":[["x1",180],["y1",-2.1316282072803006e-14],["x2",180],["y2",50.00000000000002]],"stop":[["rgba(0,170,85,1)",0],["rgba(0,84,170,1)",1]],"uuid":"karas-defs-0-0"},{"tagName":"linearGradient","props":[["x1",1.152412337697399],["y1",48.46434486051366],["x2",358.8475876623026],["y2",111.53565513948634]],"stop":[["rgba(85,0,0,1)",0],["#000",0.5],["rgba(0,0,85,1)",1]],"uuid":"karas-defs-0-1"},{"tagName":"linearGradient","props":[["x1",209.0908452403737],["y1",55.073559589224246],["x2",150.9091547596263],["y2",214.92644041077574]],"stop":[["rgba(170,0,85,1)",0],["rgba(84,0,170,1)",1]],"uuid":"karas-defs-0-2"},{"tagName":"linearGradient","props":[["x1",325.8253175473055],["y1",274.1922863405995],["x2",34.174682452694526],["y2",105.8077136594005]],"stop":[["rgba(85,0,0,1)",0],["#000",0.5],["rgba(0,0,85,1)",1]],"uuid":"karas-defs-0-3"}]}')
      .end();
  }
};
