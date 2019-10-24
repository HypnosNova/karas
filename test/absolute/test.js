var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAATsklEQVR4Xu3deazt+zkG8Ge3qHlqI0RRgpaYiV5TiKGihooYQg1JRYmxgphdQ1KtDlRSQ0wpNUaoKYaaooZQVAxJi7pFKVdMFVWXa8v33O++WU6PpLvZ+5z17uez/7k9Z6+z1vt+npVn//rbv7XWyWlyGl8ECBAgcHQCJwr66DIxEAECBK4J3FvQdye5Pcljkzw5yWMAESBAgMAtFbhW0C9K8vFJ7kzyZ0meoKBvaSgenAABAvceQT8xyW8n+Z4kD0jyOAXt2UGAAIFbLnDtCPqFSR64R3lVBX3LQzEAAQIE/s856DMOBe2JQYAAgeMQeJmrOBT0cQRjCgIECChozwECBAgcqYCCPtJgjEWAAAEF7TlAgACBIxVQ0EcajLEIECBwraB/P8mLt8XDkjw6yUfvP9+WZP3i0BcBAgQI3FyBawW9Sni9UOVGX3ckedDNncmjESBAgMDhe3HQIECAAIHjEvBudseVh2kIECBwr4CC9mQgQIDAkQoo6CMNxlgECBBYBf2rGAgQIEDg+AQcQR9fJiYiQIDANQEF7YlAgACBIxW4VtDr466ekuS7krwgyZskeVSSL0hy3yMd3FgECBC46gLXCvrLkjwpydcleWiSX0vy1Uken+QLr7qA/QgQIHCkAid3Jaevn+Sz9iepnM35Mfto+tlHOrixCBAgcNUFTu5OTv8iyf2TvN7Btuv0xjOSPP+qC9iPAAECRypww18S/neSd0nyzkmedqSDG4sAAQJXXeCGBf1FSb4tyXqXu7e66gL2I0CAwJEKvExBf0mSb0ryY0kefqRDG4sAAQINAvcW9P8k+fQkP7zPPb9/w/Z2JECAwBEL3FvQ6yqOVc4/l+TdjnhgoxEgQKBF4FpBf2+Sz9jXPyvnlujtSYDAsQucvCQ5fesk757kc24w7XsmeZVj38J8BAgQuIICJ89JTtfldP/f14uSvOEVXNxKBAgQOHYBb5Z07AmZjwCBWgEFXRu9xQkQOHYBBX3sCZmPAIFagZNn5BHPadr+wXneSx+S5760aWe7EiAwU+AkOT2dOforPPXtycnXvsL/2j8kQIDATRJQ0DcJ2sMQIEDgvALnKOgHJHlMkq8472Oc4/Z/nOTtkzwryXuf49+d66aOoM/F5cYECNwqgStQ0H+S5EP3xwu8XIwK+uViciMCBG61wBUo6PVC9a9S0Lf6meTxCRC4cIFd0HfuTx/8pST/tD829rOTfO7BA65THOvv/jXJ9yX5jyQPS/Kd+/NY1k3X/15vVro+o+XVk7zv/jjaB+77eeH+KNpnJvn3JOtF5l+c5BP3968/xfFh++9/+mCOpyf5pCT/luSJSb7m4HvfuE/DrHey/tIkv5fkriQfmGR9783WbR1BX/jTyB0SIHAZArugVxE+N8l37xd2/3qSRyf50SQfuR93FfQq3fXnT94l/GlJPjjJj+zzxquQvz3JerPSf0yy3vr/v5L85i7Kd0xyvyTfnOSNknz/LtifSPIRSc5b0PfZRfzj++MFXjPJPyR5uyTvtT/29j/3D4W/3fd/PwV9Gc8k90mAwIUL7IL+8yT3TfLmBw/wrvszvr/loKDfIsnvHNxmfR74Oor9l/3hWOuTDNcR9ivv2/x9kr/cb8W0SniV+7rs+p0O7mP9MvDVkqyj6vMW9Crk9REDP3RwimMdOX/r/vPr7sf56yQPSrJOhzxSQV/408gdEiBwGQK7oP9uf6b3r+wj0PX2/etUx0ft8lsPvY6gPyXJkw7m+Kl95PuH+z3v1icZvkOSRyX5oF2KZzdf54lXma9TGycH97GuDFlH0uvI9yIKeh29v1KSX7jOa3141/oB8QQFfRnPJPdJgMCFC5wkd53e8xb966Nin5LkIbvgHrGPqNfR6VlBr3PSq2jPvn45yQck+a0ktyVZRf0NSX52F/xD9+mM9Wamq4h/IMk633349ZWrNJOsF/ddREGvXdZR+tlR/NljrXPRn5Dk6Qr6wp9G7pAAgcsQOEmedZq8z367/vXfs691OmMV62FBf+o+r3t2m59Msor8j/Z537O/vzvJOo/95Umel2T9cvCxu7xfct0R9Oftx1inQ64v6A9Psl7oePhLwu/Y58fXLwlvdIpj/cBYP2zWufDrv14ryRsr6Mt4JrlPAgQuXOAkeebpPacj1vXEb7sfYB0Rr7fq/9j9QVhnR9APTvIbB0OcHf3+8z56XqdG3uPg++uUyTrl8IL9/fWLwN9Nss5vn32tHwJvsEv4+oJ+5D6Hvcr+7GtdSfLUfRXHWUH/4L7dus06B/20/efDo+g/TfKWSe6joC/8aeQOCRC4DIGT5M7T5E33+eXb99HwKrl1znkd1a5zuatA15/XZ6t85j5V8Pz933UVx7r0bV3utopz/YJufQTAi/ff/cG+4mMdVZ9dxbGObu+/L8t7XJJf3EV+fUE/eRfus/crDH9+X+q3HvvsCPrx+7TLuo+1x/par0ZcR9/rKpLX2D9k1nzrFYq3KejLeCa5TwIELlxg/5JwncZYpbwKeZ3DXUX7N0k+bl8TvYrzde65hDh37HPJ65zxw5OsUw7raol1WmF9f51nXpe0rduvo/CvT/I2e/B1quPz9xUb6zrqdTncOqe9TpOsr+sLep0OWZf7/cy+ymT9MFi/6FtH9utqkddO8lf7Ur917fW6omMV8br+eV1fvf6fwPqF4Xqc9RL1D1kPoqAv/GnkDgkQuAyBc7yS8DIe/pbcp4K+JewelACB8woo6POKuT0BAgRukoCCvknQHoYAAQLnFVDQ5xVzewIECNwkgVXQ73eTHutYHuaO5GS9/twXAQIEjlrg8DXXRz2o4QgQINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYAQU9JiqDEiDQJqCg2xK3LwECYwQU9JioDEqAQJuAgm5L3L4ECIwRUNBjojIoAQJtAgq6LXH7EiAwRkBBj4nKoAQItAko6LbE7UuAwBgBBT0mKoMSINAmoKDbErcvAQJjBBT0mKgMSoBAm4CCbkvcvgQIjBFQ0GOiMigBAm0CCrotcfsSIDBGQEGPicqgBAi0CSjotsTtS4DAGAEFPSYqgxIg0CagoNsSty8BAmMEFPSYqAxKgECbgIJuS9y+BAiMEVDQY6IyKAECbQIKui1x+xIgMEZAQY+JyqAECLQJKOi2xO1LgMAYgf8FoFysr5qEvfcAAAAASUVORK5CYII=')
      .end();
  }
};
