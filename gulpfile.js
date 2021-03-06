let gulp = require('gulp');
let util = require('gulp-util');
let rename = require('gulp-rename');
let through2 = require('through2');
let yurine = require('yurine');
let babel = require('@babel/core');

let path = require('path');

function jsx(file, enc, cb) {
  util.log(path.relative(file.cwd, file.path));
  let content = file.contents.toString('utf-8');
  content = yurine.parse(content);
  content = babel.transformSync(content, {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  }).code;
  file.contents = Buffer.from(content);
  cb(null, file);
}

gulp.task('build-test', function() {
  return gulp.src(['./test/**/*.jsx'])
    .pipe(through2.obj(jsx))
    .pipe(rename({
      extname:'.js'
    }))
    .pipe(gulp.dest('./test/'));
});
