var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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PWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl1AoLuRBQECBCYCAj1hd5QAAQJdQKC7kQUBAgQmAgI9YXeUAAECXUCgu5EFAQIEJgICPWF3lAABAl3g320CB3gEBk7nAAAAAElFTkSuQmCC')
      .end();
  }
};