import IMeat from "./IMeat";

export default class Chicken implements IMeat{
    source() {
        console.log('鸡');
    }
}