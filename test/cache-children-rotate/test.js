let path = require('path');
let fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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INDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqYBAN12MsQgQICDQzgABAgSaCgh008UYiwABAgLtDBAgQKCpgEA3XYyxCBAgINDOAAECBJoKCHTTxRiLAAECAu0MECBAoKmAQDddjLEIECAg0M4AAQIEmgoIdNPFGIsAAQIC7QwQIECgqcD/As0JQLAL+lxgAAAAAElFTkSuQmCC')
      .end();
  }
};
