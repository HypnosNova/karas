var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,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oEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAgq6NBhjESBAQEHbAQIECJQKKOjSYIxFgAABBW0HCBAgUCqgoEuDMRYBAgQUtB0gQIBAqYCCLg3GWAQIEFDQdoAAAQKlAv8Hcs4ilngwRV0AAAAASUVORK5CYII=')
      .end();
  }
};
