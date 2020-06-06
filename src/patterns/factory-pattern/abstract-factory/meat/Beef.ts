import IMeat from "./IMeat";

export default class Beef implements IMeat{
    source() {
        console.log('牛');
    }
}