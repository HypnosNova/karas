var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAQkElEQVR4Xu3dW4gmZB0G8Gfpxm4qMynEQxYabSQYpknkghdeBAlFRseb6AQhFGpZVFaWFHbQiAjCSjtAF6UVZAWdLCKxxCiKkNTSJcsCi8goD/Ft38aXp52tb2ae952fNxEMM8/7e/48DHuY3ZUD/nffEUn2HuDDfpzseuYBP5UPIECAAIENC+w68Eca6AMb+QgCBAisX+AgBvqeJJcmuSzJLUmOSvLKJOckeYTvoNffjc9IgMAOFziIgX5rkg8muTDJKUmuSfLOJO9Pcq6B3uGH5PkECKxfYIMD/c+9yWOTvD7J+1ZSnLX8bvo6A73+bnxGAgR2uMAGB/revclNSQ5LcugK2eKXN65K8msDvcMPyfMJEFi/wAYH+sH+FMfdSZ6R5MQklxvo9XfjMxIgsMMF/o+BPi/Jx5Ncn+Q4A73DD8nzCRBYv8D/ONDnJ7kkyZeSPHeRykCvvxufkQCBHS5wkAN9b5LXJvnC8teeT9/PZ6B3+CF5PgEC6xc4yIFe/CmOxTh/PclJq2kM9Pq78RkJENjhAgcx0Fcked3yzz//1zj7JY4dfkSeT4DA5ghscKDv2pscn+TkJGc/SJJTf5Ic8oDV3pzIPisBAgR2hsAGB/qGvf/+43QP9d9vbkiOebgP2BmaXkmAAIE1CmxwoP00uzWa+1QECBDYkICB3hCTDyJAgMDWCxjorTf3FQkQILAhAQO9ISYfRIAAga0XMNBbb+4rEiBAYEMCBnpDTD6IAAECWy+w677kvof7srfmqNuPzm+fcIBo/ibh1nfnKxIgMLmAgZ68YM8jQGBcgf8M9OJfHLwgyUVJPpTkDcs3+Q563HIlJ0BgbIF9A/27JC9J8ockNya52ECP3ar0BAhMIbBvoD+Q5Nokn0ryuOW/Oug76Cn69QgCBAYW2DfQtyU5cvmIQwz0wHWKToDATAIP+E1CAz1Tvd5CgMDIAgZ65PZkJ0BgagEDPXW9HkeAwMgCBnrk9mQnQGBqAQM9db0eR4DAyAIGeuT2ZCdAYGqBfQN9fZK/LJ95RpLXJHnh8v8fmaNuP87P4pj6CDyOAIFOgX0D/azlX1R5sIjfz5F3PCe3Hn6A+H5YUme/UhEgMLCAH5Y0cHmiEyAwt4CBnrtfryNAYGABAz1weaITIDC3gIGeu1+vI0BgYAEDPXB5ohMgMLeAgZ67X68jQGBgAQM9cHmiEyAwt4CBnrtfryNAYGABAz1weaITIDC3gIGeu1+vI0BgYAEDPXB5ohMgMLeAgZ67X68jQGBgAQM9cHmiEyAwt4CBnrtfryNAYGABAz1weaITIDC3gIGeu1+vI0BgYAEDPXB5ohMgMLeAgZ67X68jQGBgAQM9cHmiEyAwt4CBnrtfryNAYGABAz1weaITIDC3gIGeu1+vI0BgYAEDPXB5ohMgMLeAgZ67X68jQGBgAQM9cHmiEyAwt4CBnrtfryNAYGABAz1weaITIDC3gIGeu1+vI0BgYAEDPXB5ohMgMLeAgZ67X68jQGBgAQM9cHmiEyAwt4CBnrtfryNAYGABAz1weaITIDC3gIGeu1+vI0BgYAEDPXB5ohMgMLeAgZ67X68jQGBgAQM9cHmiEyAwt4CBnrtfryNAYGABAz1weaITIDC3gIGeu1+vI0BgYAEDPXB5ohMgMLeAgZ67X68jQGBgAQM9cHmiEyAwt4CBnrtfryNAYGABAz1weaITIDC3gIGeu1+vI0BgYAEDPXB5ohMgMLeAgZ67X68jQGBgAQM9cHmiEyAwt4CBnrtfryNAYGABAz1weaITIDC3gIGeu1+vI0BgYAEDPXB5ohMgMLeAgZ67X68jQGBgAQM9cHmiEyAwt4CBnrtfryNAYGABAz1weaITIDC3wHoG+om3/DQ3H3vV3FReR4AAga0VWM9An3bNL/K9Pbu3NrqvRoAAgbkFDPTc/XodAQIDC6x3oG9Jcn6S7yS5M8nie+p3JHn+wEKiEyBAYJsE1jfQV+/ZnROSPCbJ25M8Ksknk3wuyXeTnLZNL/RlCRAgMKjA+gb6LXt25wVJfpnkmKXGPUmOTPLiJB8eVEhsAgQIbJPA+gb6oX6T8IgkL0ty8Ta90JclQIDAoAKbM9B/TfL7JJcm+UySa5McP6iQ2AQIENgmgc0Z6F3L1zx1+WvQJ27T63xZAgQIDCywOQP9gyR/TPLZJN9OcnWSUwZWEp0AAQLbILA5A736kDOS/D3JNdvwOl+SAAECAwusb6Av3bM7NyY5634a5y6/k759YCXRCRAgsA0C6xvoM/fszpuS3Jzk6JWXnL78DvqH2/A6X5IAAQIDC6xvoK/csztPS3J4kguSHJbki0k+uvyNwpcOrCQ6AQIEtkFgfQO9+HPQi++ez1n+xuDdSZ6S5I1JXr4NL/MlCRAgMLjAegd6cAzxCRAg0CRgoJvakIUAAQIrAgbaORAgQKBUwECXFiMWAQIE9v+lbBIECBAgUCZgoMsKEYcAAQL7BfYP9OInZ1yS5D1oCBAgQKBDwEB39CAFAQIEHiBgoB0FAQIESgVWB3rxl7IfneQVSR6Z5JtJXpXkT8vsdyR5b5LFz6db/ISNxyf5c+m7xCJAgMDwAqsD/bckVyW5IsmTknwiyTeSvGj5yr3LQf7q8uOuS7L4C93+I0CAAIFNEFgd6JuSnLzyNS5KsvhhoYt/p3sx3rclWfzQ0JM2IYdPSYAAAQL3E1gd6MuXP+po/4c8L8lXkpyQ5GfLgb4yydkUCRAgQGDzBVYH+iNJ3r3yJRe/zvytJKcm+dFyoD+d5G2bH8tXIECAAIHVgb4syZtXSM5M8uUkT0/ycwPtWAgQILC1AqsD/askz1758hcmOS/JoUnuMtBbW4yvRoAAgdWB/keSjyX5fJInL/938ac49v+4/cVvEvolDjdDgACBLRLYP9CLP8/8riTHJln841SHJPlaklcnuXOZxUBvUSm+DAECBBYCfliSOyBAgECpgIEuLUYsAgQIGGg3QIAAgVIBA11ajFgECBAw0G6AAAECpQIGurQYsQgQIGCg3QABAgRKBQx0aTFiESBAwEC7AQIECJQKGOjSYsQiQICAgXYDBAgQKBUw0KXFiEWAAAED7QYIECBQKmCgS4sRiwABAgbaDRAgQKBUwECXFiMWAQIEDLQbIECAQKmAgS4tRiwCBAgYaDdAgACBUgEDXVqMWAQIEDDQboAAAQKlAga6tBixCBAgYKDdAAECBEoFDHRpMWIRIEDAQLsBAgQIlAoY6NJixCJAgICBdgMECBAoFTDQpcWIRYAAAQPtBggQIFAqYKBLixGLAAECBtoNECBAoFTAQJcWIxYBAgQMtBsgQIBAqYCBLi1GLAIECBhoN0CAAIFSAQNdWoxYBAgQMNBugAABAqUCBrq0GLEIECBgoN0AAQIESgUMdGkxYhEgQMBAuwECBAiUChjo0mLEIkCAgIF2AwQIECgVMNClxYhFgAABA+0GCBAgUCpgoEuLEYsAAQIG2g0QIECgVMBAlxYjFgECBAy0GyBAgECpgIEuLUYsAgQIGGg3QIAAgVIBA11ajFgECBAw0G6AAAECpQIGurQYsQgQIGCg3QABAgRKBQx0aTFiESBAwEC7AQIECJQKGOjSYsQiQICAgXYDBAgQKBUw0KXFiEWAAAED7QYIECBQKmCgS4sRiwABAgbaDRAgQKBUwECXFiMWAQIEDLQbIECAQKmAgS4tRiwCBAgYaDdAgACBUgEDXVqMWAQIEDDQboAAAQKlAga6tBixCBAgYKDdAAECBEoFDHRpMWIRIEDAQLsBAgQIlAoY6NJixCJAgICBdgMECBAoFTDQpcWIRYAAAQPtBggQIFAqYKBLixGLAAECBtoNECBAoFTAQJcWIxYBAgQMtBsgQIBAqYCBLi1GLAIECBhoN0CAAIFSAQNdWoxYBAgQMNBugAABAqUCBrq0GLEIECBgoN0AAQIESgUMdGkxYhEgQMBAuwECBAiUChjo0mLEIkCAgIF2AwQIECgVMNClxYhFgAABA+0GCBAgUCpgoEuLEYsAAQIG2g0QIECgVMBAlxYjFgECBAy0GyBAgECpgIEuLUYsAgQIGGg3QIAAgVIBA11ajFgECBAw0G6AAAECpQIGurQYsQgQIGCg3QABAgRKBQx0aTFiESBAwEC7AQIECJQKGOjSYsQiQICAgXYDBAgQKBUw0KXFiEWAAAED7QYIECBQKmCgS4sRiwABAgbaDRAgQKBUwECXFiMWAQIEDLQbIECAQKmAgS4tRiwCBAgYaDdAgACBUgEDXVqMWAQIEDDQboAAAQKlAga6tBixCBAgYKDdAAECBEoFDHRpMWIRIEDAQLsBAgQIlAoY6NJixCJAgICBdgMECBAoFTDQpcWIRYAAAQPtBggQIFAqYKBLixGLAAECBtoNECBAoFTAQJcWIxYBAgQMtBsgQIBAqYCBLi1GLAIECBhoN0CAAIFSAQNdWoxYBAgQMNBugAABAqUCBrq0GLEIECBgoN0AAQIESgUMdGkxYhEgQMBAuwECBAiUChjo0mLEIkCAgIF2AwQIECgVMNClxYhFgAABA+0GCBAgUCpgoEuLEYsAAQIG2g0QIECgVMBAlxYjFgECBAy0GyBAgECpgIEuLUYsAgQIGGg3QIAAgVIBA11ajFgECBAw0G6AAAECpQIGurQYsQgQIGCg3QABAgRKBQx0aTFiESBAwEC7AQIECJQKGOjSYsQiQICAgXYDBAgQKBUw0KXFiEWAAAED7QYIECBQKmCgS4sRiwABAgbaDRAgQKBUwECXFiMWAQIEDLQbIECAQKmAgS4tRiwCBAgYaDdAgACBUgEDXVqMWAQIEDDQboAAAQKlAga6tBixCBAgYKDdAAECBEoFDHRpMWIRIEDAQLsBAgQIlAoY6NJixCJAgICBdgMECBAoFTDQpcWIRYAAAQPtBggQIFAqYKBLixGLAAECBtoNECBAoFTAQJcWIxYBAgQMtBsgQIBAqYCBLi1GLAIECBhoN0CAAIFSAQNdWoxYBAgQMNBugAABAqUCBrq0GLEIECBgoN0AAQIESgUMdGkxYhEgQMBAuwECBAiUChjo0mLEIkCAgIF2AwQIECgVMNClxYhFgAABA+0GCBAgUCpgoEuLEYsAAQIG2g0QIECgVMBAlxYjFgECBAy0GyBAgECpgIEuLUYsAgQIGGg3QIAAgVIBA11ajFgECBAw0G6AAAECpQIGurQYsQgQIGCg3QABAgRKBQx0aTFiESBAwEC7AQIECJQKGOjSYsQiQICAgXYDBAgQKBUw0KXFiEWAAAED7QYIECBQKmCgS4sRiwABAgbaDRAgQKBUwECXFiMWAQIEDLQbIECAQKmAgS4tRiwCBAgYaDdAgACBUgEDXVqMWAQIEDDQboAAAQKlAga6tBixCBAgYKDdAAECBEoFDHRpMWIRIEDAQLsBAgQIlAoY6NJixCJAgICBdgMECBAoFTDQpcWIRYAAAQPtBggQIFAqYKBLixGLAAECBtoNECBAoFTAQJcWIxYBAgQMtBsgQIBAqYCBLi1GLAIECBhoN0CAAIFSAQNdWoxYBAgQMNBugAABAqUCBrq0GLEIECBgoN0AAQIESgUMdGkxYhEgQMBAuwECBAiUChjo0mLEIkCAgIF2AwQIECgVMNClxYhFgACBfwGNcxrxrjbcwQAAAABJRU5ErkJggg==')
      .end();
  }
};
