let o = karas.render(
  <canvas width="360" height="360" cache={true}>
    <div style={{background:'#F00',padding:10,height:50}}>
      <span ref="span" style={{rotate:45,padding:10,display:'none'}}>123</span>
    </div>
  </canvas>,
  '#test'
);
o.ref.span.updateStyle({
  display: 'inline',
}, function() {
  let canvas = document.querySelector('canvas');
  let input = document.querySelector('#base64');
  input.value = canvas.toDataURL();
});
