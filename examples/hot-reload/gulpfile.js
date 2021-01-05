const gulp = require("gulp");
const playcanvas = require("gulp-playcanvas");
const pcOptions = require("./playcanvas.json");
const pug = require("gulp-pug");
const sass = require("gulp-sass");

const paths = {
  js: {
    src: "src/**/*.js"
  },
  sass: {
    src: "src/**/*.+(scss|sass)"
  },
  pug: {
    src: "src/**/*.pug"
  }
}

const html = () => {
  return gulp
    .src(paths.pug.src)
    .pipe(pug())
    .pipe(gulp.dest("dist/"))
    .pipe(playcanvas(pcOptions))

}

const js = () => {
  return gulp
    .src(paths.js.src, {
      since: gulp.lastRun(js)
    })
    .pipe(gulp.dest("dist/"))
    .pipe(playcanvas(pcOptions))

}

const css = () => {
  return gulp
    .src(paths.sass.src)
    .pipe(sass())
    .pipe(gulp.dest("dist/"))
    .pipe(playcanvas(pcOptions))
}

gulp.task("watch", function () {
  gulp.watch(paths.pug.src, html);
  gulp.watch(paths.js.src, js);
  gulp.watch(paths.sass.src, css);
});
gulp.task("default", gulp.parallel("watch"))
