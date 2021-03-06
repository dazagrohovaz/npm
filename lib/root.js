module.exports = root

var npm = require("../npm")
  , output = require("./utils/output")
  , log = require("./utils/log")

root.usage = "npm root\nnpm root -g\n(just prints the root folder)"

function root (args, cb) {
  output.write(npm.dir, cb)
  var rp = require.paths.concat(module.paths)
  if (rp.indexOf(npm.dir) === -1) {
    output.write("(not in NODE_PATH env variable)"
                ,npm.config.get("logfd"))
  }
}
