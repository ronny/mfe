import fs from "fs";
import path from "path";

const filepath = path.resolve(__dirname, "../../asset-manifest.json");

/* A webpack plugin to generate an asset manifest file from Webpack stats.
 *
 * The generated manifest file is used for server-side rendering, particularly
 * for <script> and <link> tag URLs.
 */
export default function generateAssetManifest(stats) {
  const publicPath = this.options.output.publicPath;

  const json = stats.toJson();

  // fs.writeFile(path.resolve(__dirname, "../../webpack-raw-stats.json"), JSON.stringify(json), (err) => {
  //   if (err) {
  //     console.error(`Unable to save raw.json: ${err}`);
  //   }
  // });

  const getChunks = (name, ext = "js") => {
    let chunk = json.assetsByChunkName[name];

    // a chunk could be a string or an array, so make sure it is an array
    if (!(Array.isArray(chunk))) {
      chunk = [chunk];
    }

    return chunk
        .filter(chunkName => path.extname(chunkName) === `.${ext}`)
        .map(chunkName => publicPath + chunkName);
  };

  const content = {
    script: getChunks("main", "js"),
    css: getChunks("main", "css"),
  };

  fs.writeFileSync(filepath, JSON.stringify(content));
}
