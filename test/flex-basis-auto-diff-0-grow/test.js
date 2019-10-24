var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAR0UlEQVR4Xu3dPYhthb3G4f8kIKa4SFTCgWi0MNZRgl9VTGFhYxMFK8FCBUkIGEFsFARR/EAhhSAi2nkDIhcLu3uxUgJ6QRAu4gc3BoOFRQIJJHpOWDMTEZzJPjEzs/f85tndYdbstd7nnXkZZvY+a+vMzJkJPLYaMWZmaytQhwgECByAwJaBPgDFA30KA32gnJ6MwDEW+HKgv5iZB2bm4Zl5cmZ+uUeosznms5m5bWZenZm3Z+ZHR4Sz8xP0coVPz8xzM/PRzFw8M7fPzD0z8+0jupJ/9zQG+t8V9PkEKgLbA/3JzNw6M5/OzHsz89geA302x7w5M7fMzHkz885aBvr+mXliZh6amatn5vWZeXBmHp2ZXx2Tzgz0MSnKZRI4dIHtgX58ZpZxfX5mLpyZR/YY6LM55qbdWbx+Zq478oH+68ycPzN37yb4h93Nuz9N//bQMQ/mBAb6YBw9C4HjL7A90B/PzEW7Wc7dZ6D/lWPemJlrj3ygl19vfDAzF8zMd7/SzPLrjVdm5v1j0paBPiZFuUwChy7wtT8S7jfQX72SVcesZ6D3ejHK5zNz5cxcMTMvHDrmwZzAQB+Mo2chcPwF4gN978w8MzNvzcwPj0lbBvqYFOUyCRy6QHig75uZp2bm5Zm58dAhD+4EBvrgLD0TgeMtEBzo0zNz58y8tPu7558es4YM9DErzOUSODSB4EAvr+JYxvm1mfnxocEd3hMb6MOz9cwEjpdAbKBfnJm7dl//fBzHefniMdDH61vI1RI4PIHtgV7+hPbH3XPcMDN3zMzPdv99zcwsr9pYdcw5u7O4fNq7u69GfnZmLtv9/OV5DvOxNX+emctn5qqZ+fkep1pemb1c5aY/DPSmN+T6CByVwPZAL+O5vFFlr8eHM3PpzKw65tTMfGef57hk960ihxlqa/uN5cvL6fZ7LO+FXK5y0x8GetMbcn0EjkrAf5Z0VNJnfR4DfdZUDiQQFzDQG1ewgd64SlwQgTUJGOg1we9/WgO9cZW4IAJrEjDQa4I30BsH74IIbJzA1pn/nP/ZuKv6Bhf0m1n+17r9H3/46/dO/+KcX3/rGzz10X7KLVs/OdoTOhsBApsqsHXmTOZeUf/U+Hdz8R9+MP+/+S/j2PIrjk39ZnFdBI5awEAftfiq8xnoVUI+TuDECHw50F98MfPAAzMPPzzz5JMzv9zjnldnc8xnn83cdtvMq6/OvP32zI+O6p5XKyr78ifoJcTTT88899zMRx/NXHzxzO23z9xzz8y3N+C2WAb6xHzzCUpglcD2QH/yycytt858+unMe+/NPPbY1wf6bI55882ZW26ZOe+8mXfe2dCBvv/+mSeemHnooZmrr555/fWZBx+cefTRmV9twG2xDPSqr1kfJ3BiBLYH+vHHZ5Zxff75mQsvnHnkka8P9Nkcc9NNO5t3/fUz1123gQP9t/dPzfnnz9x9907Ifzxuvnnnp+nfbsBtsQz0ifnmE5TAKoHtgf7445mLdu95de65ew/0v3LMG2/MXHvtBg706Y9OzQcfzFxwwcx3v3JbrOXXG6+8MvP+BtwWy0Cv+pr1cQInRuBrfyTcb6C/KrLqmI0d6L1exfH55zNXXjlzxRUzL2zAbbEM9In55hOUwCoBA33vvTPPPDPz1lszP9yA22IZ6FVfsz5O4MQInOyBvu++maeemnn55ZkbN+S2WAb6xHzzCUpglcDJHOjTp2fuvHPmpZd2fvf80w26LZaBXvU16+METozAyRzo5VUcyzi/9trMjzfszisG+sR88wlKYJXAyRvoF1+cueuundc/b9o4L20Z6FVfsz5O4MQIbA/08vexP+7e8+qGG2buuGPmZ7v3vLrmmpnlVRurjjnnnJ3NWx7vvrvzUuNnn5257LKdz1+eZ52P7XcS/uX/Ts3ll89cddXMz/e4Ldby4u0lyDofBnqd+s5NYKMEtgd6Gc/ljSp7PT78cObSS3cG9p8dc+rUzHf2uefVJZfsvA9knY/tgf7f/zq1/XK6/R7L2yWXIOt8GOh16js3gY0S8J8lbVQdfsWxaXW4HgLrFDDQ69Tf69x+gt60RlwPgbUJGOi10e9zYgO9aY24HgJrE1gG+r/XdvYjPPHv5/t/umg+/o8jPOU3O9XW1vXf7BN9FgECNYGtWiB5CBAgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBFwEBXmpSDAIGcgIHOVSoQAQIVAQNdaVIOAgRyAgY6V6lABAhUBAx0pUk5CBDICRjoXKUCESBQETDQlSblIEAgJ2Cgc5UKRIBARcBAV5qUgwCBnICBzlUqEAECFQEDXWlSDgIEcgIGOlepQAQIVAQMdKVJOQgQyAkY6FylAhEgUBEw0JUm5SBAICdgoHOVCkSAQEXAQFealIMAgZyAgc5VKhABAhUBA11pUg4CBHICBjpXqUAECFQEDHSlSTkIEMgJGOhcpQIRIFARMNCVJuUgQCAnYKBzlQpEgEBF4O+QzuF4MM+F7QAAAABJRU5ErkJggg==')
      .end();
  }
};
