const PlayCanvas = require("playcanvas-node").default;
const through = require("through2");
const gutil = require("gulp-util");
const path = require("path");

module.exports = options =>
  through.obj( async function(file, enc, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }
    
    if (file.isStream()) {
      return cb(
        new gutil.PluginError("gulp-playcanvas", "Streaming not supported")
      );
    }
    
    const playcanvas = new PlayCanvas(options);
    await playcanvas.updateAssetsStrict(
      options.remotePath,
      path.basename(file.path),
      file.path,
      "dist"
    );
  
    return callback(null, file);
  });
