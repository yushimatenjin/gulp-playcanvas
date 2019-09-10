## gulp-playcanvas
PlayCanvas gulp can upload to PlayCanvas. 
Supported files : [`.js`,`.html`,`.css`,`.txt`,`.json`]

## Installation

```bash
npm install --save gulp-playcanvas
```

## Useage

### SASS, Pug, JSの更新を受け付けてアップロードをする

1. 必要なライブラリをインストール 

```bash
npm init
```

```bash
npm install --save gulp gulp-playcanvas gulp-pug gulp-sass
```

2. コンフィグファイルを設定
```javascript
//playcanavas.json
{
  "accessToken": "",
  "scenes": [],
  "projectId": "",
  "branchId": "",
  "projectName": "",
  "remotePath": ""
}


```

3. gulpfileを設置
```javascript
//gulpfile.js
const gulp = require("gulp");
const playcanvas = require("gulp-playcanvas");
const pcOptions = require("./config");
const pug = require("gulp-pug");
const sass = require("gulp-sass");

gulp.task("pug", () => {
  return gulp
    .src(["src/**/*.pug", "!src/**/_*.pug"])
    .pipe(pug())
    .pipe(gulp.dest("dist/"))
    .pipe(playcanvas(pcOptions));
});

gulp.task("js", () => {
  return gulp
    .src(["src/**/*.js", "!src/**/_*.js"])
    .pipe(gulp.dest("dist/"))
    .pipe(playcanvas(pcOptions));
});

gulp.task("sass", () => {
  return gulp
    .src("src/**/*.+(scss|sass)")
    .pipe(sass())
    .pipe(gulp.dest("dist/"))
    .pipe(playcanvas(pcOptions));
});

gulp.task("watch", function() {
  gulp.watch(["src/**/*.pug", "!src/**/_*.pug"], gulp.task("pug"));
  gulp.watch(["src/**/*.js", "!src/**/_*.js"], gulp.task("js"));
  gulp.watch("src/**/*.+(scss|sass)", gulp.task("sass"));
});
gulp.task("default", gulp.parallel("watch"));
```



## API
### playcanvas(options)

#### options.accessToken
Required
Type: `string`

#### options.scenes
Required
Type: `array<number>`

#### options.projectId
Required
Type: `number`

#### options.branchId
Required
Type: `string`

#### options.projectName
Required
Type: `string`

#### options.remotePath
Required
Type: `string`


#### License
MIT © [yushimatenjin](https://github.com/yushimatenjin)
