import {getPictures} from "./data.js";
import {renderPicturesList} from "./pictures-list.js";

const pictures = getPictures(10);

console.log(pictures);
renderPicturesList(pictures);
// console.log(pictures);