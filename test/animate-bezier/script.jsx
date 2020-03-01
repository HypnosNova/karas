let o = karas.render(
  <canvas width="360" height="360">
    <span ref="t" style={{fontSize:10}}>123</span>
  </canvas>,
  '#test'
);
let t = o.ref.t;
let animation = t.animate([
  {
    easing: 'cubic-bezier(0, 1, 0, 1)',
  },
  {
    fontSize: 100,
  }
], {
  duration: 200,
  fill: 'forwards',
});
let input = document.querySelector('input');
let n = 0;
animation.on(karas.Event.KARAS_ANIMATION_FRAME, () => {
  if(n === 0) {
    input.value = t.computedStyle.fontSize;
  }
  else if(n === 1) {
    input.value += '/' + (t.computedStyle.fontSize > 50);
  }
  n++;
});
animation.on(karas.Event.KARAS_ANIMATION_FINISH, () => {
  input.value += '/' + t.computedStyle.fontSize;
});