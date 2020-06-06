import AbstarctFactory from "./AbstractFactory";
import IMeat from "./meat/IMeat";
import ITasty from "./tasty/ITasty";
import LittleSpicy from "./tasty/LittleSpicy";
import NoSpicy from "./tasty/NoSpicy";
import SuperSpicy from "./tasty/SuperSpicy";

export default class TastyFactory extends AbstarctFactory {
    getMeat(meatType: string): IMeat {
        console.log(meatType);
        return null;
    }

    getTasty(type: string): ITasty {
        switch(type) {
            case 'little':
                return new LittleSpicy();
            case 'none':
                return new NoSpicy();
            case 'super':
                return new SuperSpicy();
            default:
                throw new TypeError('类型错误');
        }
    }
}