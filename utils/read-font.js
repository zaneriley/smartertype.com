import opentype, { FileReader } from "opentype.js";

export default function onReadFont(e) {
  console.log(e);
  let file = e.target.files[0];
  let reader = new FileReader();
  let fontFileName = null;

  reader.onload = function(file) {
    try {
      font = opentype.parse(e.target.result);

      const tags = new Set();
      const response = font.tables.gsub.features;

      response.forEach(item => {
        tags.add(item.tag);
      });

      for (let item of tags.values()) {
        console.log(item);
      }
    } catch (err) {
      console.log(err);
    }
  };

  reader.onerror = function(err) {
    console.log(err);
  };

  reader.readAsArrayBuffer(file);
}
