## gulp-playcanvas
指定したディレクトリにあるファイルをPlayCanvasのエディター上にアップロードをします。
アップロードされるファイルは`.js`,`.html`,`.css`,`.txt`,`.json`となります。

## Installation

```bash
npm install --save gulp-playcanvas
```

## Useage
1. dest以下のファイルをすべてアップロード

`gulpfile.babel.js`
```javascript
import { src, dest } from "gulp";
import playcanvas from "gulp-playcanvas";

function upload() {
  const options = {
    accessToken: "***",
    scenes: [***],
    projectId: ***,
    branchId: "xxx-xxx-xxx-xxx-xxx",
    projectName: "xxx",
    remotePath: "xxx"
  };
  return src("./dest/**").pipe(playcanvas(options));
}

exports.default = upload;

```


## API
playcanvas(options)

### options.accessToken
Required
Type: `string`

### options.scenes
Required
Type: `array<number>`

### options.projectId
Required
Type: `number`

### options.branchId
Required
Type: `string`

### options.projectName
Required
Type: `string`

### options.remotePath
Required
Type: `string`


### License
MIT © [yushimatenjin](https://github.com/yushimatenjin)
