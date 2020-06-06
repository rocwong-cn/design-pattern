import IMeat from './meat/IMeat';
import ITasty from './tasty/ITasty';

export default abstract class AbstarctFactory {
    public abstract getMeat(type: string): IMeat;
    public abstract getTasty(type: string): ITasty;
}