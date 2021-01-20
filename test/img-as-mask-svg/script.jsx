let o = karas.render(
  <svg width="360" height="360">
    <div style={{width:100,height:100,background:'#00F',color:'#0F0',fontSize:48}}>123</div>
    <img mask="1"
         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM1RURFN0Q1MjRDMTFFQkJBNUVBOTFFMURBMzYyODUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM1RURFN0U1MjRDMTFFQkJBNUVBOTFFMURBMzYyODUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzVFREU3QjUyNEMxMUVCQkE1RUE5MUUxREEzNjI4NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzVFREU3QzUyNEMxMUVCQkE1RUE5MUUxREEzNjI4NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgl71QoAAAF1SURBVHja7NxLbsMwDEXRmNAg7f63mnboLCFGAEukeO44H0rXj7KVQMfr+TgfSEOYAkJACCEghBAQQggI6c24+sLf//MwXd/z93OcEqJlgRBCQAghIASEEAJCCAEhhICQLoyKRV/dyq74k8HYScCn91UQNHYU8enzMosZHURUEhPdZKz6rnIJWTU52dISnWVkTEuYiFy1BBm5agoyctVm68Rtb+50rK4xyMhVq5bVuWVVSseqmiWka0IqpmNF7RLitheEELLP+jF7DBKiZYEQQkAIISCEEBBCyP3scHDNrDFIiJYFQgjZax2ZWbuEdG5ZFVMyu2YJ6b6oV0rJilqjy0Cr1KhleQ7Jn5KVtUXXgWetKbpPQLZawkTkujBGtqtz9p/qsrXNdHdZMyco4xqW8qyTu9Pi8JkkYhzPdNMV7QAzzwp9F/XuEEIICCEEhBACQggBIYSAEBBCCL7i8vb7DgfISAgIIQSEEAJCCAEhICQ9bwEGACbijtzBD8trAAAAAElFTkSuQmCC"
         style={{
           position: 'absolute',
           left: 0,
           top: 0,
         }}/>
  </svg>,
  '#test'
);
o.on(karas.Event.REFRESH, function() {
  var input = document.querySelector('#base64');
  input.value = document.querySelector('svg').innerHTML;
});
