import AbstarctFactory from "./AbstractFactory";
import MeatFactory from "./MeatFactory";
import TastyFactory from "./TastyFactory";

export default class FactoryProducer {
    static getFactory(choice: string): AbstarctFactory {
        switch(choice) {
            case 'meat':
                return new MeatFactory();
            case 'tasty':
                return new TastyFactory();
            default:
                throw new TypeError('参数错误');
        }
    }
}