
## Installation
```bash
npm install
```

## Documentation
[yushimatenjin/gulp-playcanvas](https://github.com/yushimatenjin/gulp-playcanvas)

## Useage

1.`config.js`へ設定ファイルを追加

```javascript
//config.js
module.exports = {
  accessToken: "<ACCESS_Token>",
  scenes: ["<SCENE>"],
  projectId: "<PROJECT_ID>",
  branchId: "<BRANCH_ID>",
  projectName: "<PROJECT_NAME>",
  remotePath: "<REMOTE_PATH>"
};
```

2. gulpの実行
```bash
yarn gulp
```