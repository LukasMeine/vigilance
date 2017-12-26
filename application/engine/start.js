var Updater = require("../services/updater.js");
var args = require("minimist")(process.argv.slice(2));
var fs = require("fs");
var log = require("captains-log")();

if (typeof args.path !== "undefined") {
  var command_prepend = "cd " + args.path + " && ";
  fs.readFile("./application/includes/startup.txt", function(err, file) {
    var lines = file.toString().split("\n");
    console.log("");
    for (var i = 0; i < lines.length; i++) {
      log.info(lines[i]);
    }

    log.info(" Devmind.io vigilance is running");
    log.info(" Vigilance is watching your files at " + args.path);
    log.info(" To shut down, press <CTRL> + C at any time.");
    console.log("");
  });


  if (typeof args.branch !== "undefined") {
    var branch = args.branch;
  } else {
    var branch = "master";
  }

  let update = new Updater();
  update.verify_git(command_prepend, branch);


} else {
  console.log("");
  log.warn('Please specify a path. --path /path/to/your/files')
}
