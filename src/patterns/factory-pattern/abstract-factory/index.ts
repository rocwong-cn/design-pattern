import AbstarctFactory from "./AbstractFactory";
import FactoryProducer from "./FactoryProducer";
import Beef from "./meat/Beef";
import NoSpicy from "./tasty/NoSpicy";

export default class Demo {
    test() {
        const meatFactory: AbstarctFactory = FactoryProducer.getFactory('meat');
        const beef: Beef = meatFactory.getMeat('beef');
        beef.source();

        const tastyFactory: AbstarctFactory = FactoryProducer.getFactory('tasty');
        const noSpicy: NoSpicy = tastyFactory.getTasty('little');
        noSpicy.degree();
    }
}