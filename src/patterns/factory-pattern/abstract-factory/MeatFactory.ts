import AbstarctFactory from "./AbstractFactory";
import IMeat from "./meat/IMeat";
import Beef from "./meat/Beef";
import Chicken from "./meat/Chicken";
import Mutton from "./meat/Mutton";
import ITasty from "./tasty/ITasty";

export default class MeatFactory extends AbstarctFactory {
    getMeat(meatType: string): IMeat {
        switch(meatType) {
            case 'beef':
                return new Beef();
            case 'chicken':
                return new Chicken();
            case 'mutton':
                return new Mutton();
            default:
                throw new TypeError('类型错误');
        }
    }

    getTasty(type: string): ITasty {
        console.log(type);
        return null;
    }
}