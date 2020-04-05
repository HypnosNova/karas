var path = require('path');
var fs = require('fs');

module.exports = {
  'init': function(browser) {
    browser
      .url('file://' + path.join(__dirname, 'index.html'))
      .waitForElementVisible('body', 1000)
      .assert.value('input', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAASxUlEQVR4Xu3dS4jl+V0F8HMVkvgIidFkoiiTjEFFjTogKAExSHxm42OTQMwExAeCMS5EXfiCQNRNFFzoRoMvnJUrdQxqghpwISKJC3UxjrowPkCz0Sjoldt1e6zp6emu6qrq/+97z6dgMIvqe8/3c4rD9XZ11S439LFPXpPka5J8YZJXJXnl8f9+xvF/f9INPfWqD/uxJM8k+fMkv7dLnlw1qFwECKwhsLvOGPvkS5K8Pcm3JnntdT72CT7W3yb5rl3y+yd4m5MIELgGgSsP9D55dZJvT/K2nA20j4sL7JP8yC756Yv/EZ9JgECLwAMP9D55SZJ3JPnBJI+1gN3QnYeR/qkbemwPS4DAUIEHGuh98niSn0/yhqF3rxb7f5O8eZc8tVoweQgQ2E7gUgO9Tw6f/84kP5PkRdvFPsln/ockr9sl/32S1zmKAIFLC1x4oPfJpyX59STfeOln8QcuKvDWXfKbF/1kn0eAwGkLXGig92ffIvcHSV5/2hybX/fkLnnL5ikEIEBgCYH7DvQ++ewkHzj8v99LJD7tEH+9S77gtE90HQECFxW450Dvk5cm+ZBXzhflvPLnfWyXvPzKj+IBCBA4CYEXHOjjXwi+P8mbTuLSIUfszv4i1gcBAgReeAz2Z9+X+0OMHq6AgX643p6NwMoCd321tk++Kclvrxz8VLMZ6FNt1l0ELi/wvIHeJ5+T5CNJXnb5h/MnripgoK8q6M8TOB2Buw30+5I8cTonzrrEQM/qS1oCNynwnIHeJ288fkvdTT6nx76HgIH25UGAwG2BOwf6g0m+Gs92AgZ6O3vPTGA1gWcH2qvnNaox0Gv0IAWBFQTOD7RXzws0YqAXKEEEAosI3Bro46+nejr+kcTmtRjozSsQgMAyArcH+ieS/PgyqYqDGOji8p1O4A6B2wPt7Y1FvjQM9CJFiEFgAYHdPnlxkn/P2a+w8rGxgIHeuABPT2AhgcNA+97nlQrx9wALtSEKgW0FDgP9w0nes20Mz35bwCtoXwsECDy7B/vEP+1e6OvBQC9UhigENhY4vIL+0yRfsXEOT38UMNC+FAgQOP8K+pkkjyJZQ8BAr9GDFARWEDi8gv5okkdWCCPDrb8h9BtVfCEQIHBL4DDQH8/Zt9r5WEDAQC9QgggEFhE4DPR+kSxinP1be6+gfSUQIPDsK2gDvdAXg4FeqAxRCGws4BX0xgXc+fQGerFCxCGwoYCB3hD/bk9toBcrRBwCGwoY6A3xDfRi+OIQWEzAQK9WiL8kXKwRcQhsJ2Cgt7O/6zN7i2OxQsQhsKGAgd4Q31sci+GLQ2AxAQO9WiHe4lisEXEIbCdgoLez9xbHYvbiEFhNwEAv1oj3oBcrRBwCGwoY6A3xvQe9GL44BBYTMNCrFeI96MUaEYfAdgIGejt770EvZi8OgdUEDPRijXgPerFCxCGwoYCB3hDfe9CL4YtDYDEBA71aId6DXqwRcQhsJ2Cgt7P3HvRi9uIQWE3AQC/WiPegFytEHAIbChjoDfG9B70YvjgEFhMw0KsV4j3oxRoRh8B2AgZ6O3vvQS9mLw6B1QQM9GKNeA96sULEIbChgIHeEN970Ivhi0NgMQEDvVoh3oNerBFxCGwnYKC3s/ce9GL24hBYTcBAL9aI96AXK0QcAhsKGOgN8b0HvRi+OAQWEzDQqxXiPejFGhGHwHYCBno7e+9BL2YvDoHVBA4D/fEkL14tWGse70G3Nu9uAs8XOAz0R5M8AmcNAQO9Rg9SEFhB4DDQzyR5dIUwMtx6A3rHgQABAgeBw0D/VZLPx7GGgIFeowcpCKwgcBjop5J8/QphZPAK2tcAAQL/L3AY6J9N8v1Q1hDwCnqNHqQgsILAYaDfleS9K4SRwStoXwMECDz3FfQ3JPldKGsIeAW9Rg9SEFhB4PAK+hVJ/iXJJ6wQqD2DgW7/CnA/gXOvoA//c5/8RZIvBbO9gIHevgMJCKwicOt7bv1F4Sp1eA96nSYkIbC9wO2B/uYkv7V9HAm8gvY1QIDAbYHbA/3JSf45yaeg2VbAQG/r79kJrCTw7D8r3ifvS/LESuEasxjoxtbdTODuAucH+o1JPgBqWwEDva2/ZyewksBzfjDPPnk6yWtXCtiWxUC3Ne5eAi8scOdAvyPJLwPbTsBAb2fvmQmsJnDnQH9ikr9P8lmrBW3JY6BbmnYngfsLPO9nD/vZHPdHu8nPMNA3qeuxCcwSuNtAvyjJh/2M6G2KNNDbuHtWAisK3PW3d+wT39GxTVv/tUtess1Te1YCBFYTeMFfr+T7ojep6p92yas3eWZPSoDAcgL3GuhX5eyHKH3mcqlPN9Bf7pLXn+55LiNA4DIC9/wFpfvka5O8/zIP6HOvJPDkLnnLlR7BHyZA4GQE7vsbpPfJLyT57pO5eO1DfmB39ivIfBAgQCAXGejDD1D64ySP87pxgcd3Z28r+SBAgMD9B/pgdPytK3+U5IuY3ZjA4R8IPbZL/ufGnsEDEyAwSuC+r6BvX7M/+9eFH0rymlEXzgn77l3yo3PiSkqAwE0LXHigj6+kX5fkqSSfe9PByh7/Pw+mu+Qfy+52LgEC9xC41EAfR/qVSX4nyZeTvTaBn9sl77q2R/NABAichMClB/o40offwPJrSb7lJBS2PeLfknzeLvnXbWN4dgIEVhN4oIE+9770Tyb5sdWOGpbn7bvkV4dlFpcAgYcgcKWBPr6a/rYkv5Lk8Krax+UEfmmXfMfl/ojPJkCgReDKA30c6S9O8otJ3tACdw13/sku+apreBwPQYDAiQpcy0Cfe8vjbTn7l3CffqJe13XWnyX5ul1yeP/ZBwECBO4qcK0DfXw1/Yok70zyPUke4f48gd9I8p275D/YECBA4F4C1z7Q559snzxxHOqvVEP+Lsn37s6+RdEHAQIE7itwowN97q2Pw4/Q/L4kb03yqfdNdXqf8O4k7/Gq+fSKdRGBmxR4KAN9bqhfmuTNSd50/O/Rmzxu48f+m+OPan3vLnl64yyengCBgQIPdaDv9NknjyX5suPP9zj8jI/Df4ffKPKyJC9PcvilAVM+Dm9hfPD43x/uzn47ug8CBAg8sMCmA/3Aqf1BAgQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAgZ6Zm9SEyBQIGCgC0p2IgECMwUM9MzepCZAoEDAQBeU7EQCBGYKGOiZvUlNgECBgIEuKNmJBAjMFDDQM3uTmgCBAgEDXVCyEwkQmClgoGf2JjUBAgUCBrqgZCcSIDBTwEDP7E1qAgQKBAx0QclOJEBgpoCBntmb1AQIFAgY6IKSnUiAwEwBAz2zN6kJECgQMNAFJTuRAIGZAv8HvGj6aQIOtKwAAAAASUVORK5CYII=')
      .end();
  }
};
