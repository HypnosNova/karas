var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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Ny9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCugIGe262TESDQXMBANy9QfAIE5goY6LndOhkBAs0FDHTzAsUnQGCuwH8BvL/xaTnQiEUAAAAASUVORK5CYII=')
      .end();
  }
};
