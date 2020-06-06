import ITasty from './ITasty';

export default class NoSpicy implements ITasty {
    degree() {
        console.log('不辣');
    }
}