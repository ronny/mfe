// A webpack plugin to notify errors and warning when compiling
function notifyError(error) {
  const BELL = "\x07";
  console.error(BELL + error);
}

function notifyWarning(warning) {
  console.warn(warning);
}

export default function notifyStats(stats) {
  var json = stats.toJson();
  if (json.errors.length > 0) {
    json.errors.forEach(notifyError);
  } else if (json.warnings.length > 0) {
    json.warnings.forEach(notifyWarning);
  } else {
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));
  }
}
