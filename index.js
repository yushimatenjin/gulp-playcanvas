"use strict";
const PlayCanvas = require("playcanvas-node").default;
const through = require("through2");
const gutil = require("gulp-util");
module.exports = options =>
  through.obj(function(file, enc, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return cb(
        new gutil.PluginError("gulp-playcanvas", "Streaming not supported")
      );
    }
    const playcanvas = new PlayCanvas(options);
    playcanvas.updateAssets(
      options.remotePath,
      file.path.replace(file.base, "").replace("\\", ""),
      file.path
    );
    console.log(
      `${file.path
        .replace(file.base, "")
        .replace("\\", "")} >>> uploaded to PlayCanvas
 
      ${options.remotePath}`
    );
    return callback(null, file);
  });
