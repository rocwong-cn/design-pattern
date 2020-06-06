const noodlesFactory = function(type) {
    function BeefNoodles() {
        this.name = '牛肉面';
        this.spicy = '微辣';
    }

    function MuttonNoodles() {
        this.name = '羊肉面';
        this.spicy = '特辣';
    }

    function EggNoodles() {
        this.name = '鸡蛋面';
        this.spicy = '不要辣';
    }

    switch (type) {
        case 'beefNoodles':
            return new BeefNoodles();
        case 'muttonNoodles':
            return new MuttonNoodles();
        case 'eggNoodles':
            return new EggNoodles();
        default:
            throw new Error('传入的参数错误，可选：beefNoodles、muttonNoodles、eggNoodles');
    }
}

const beefNoodles = noodlesFactory('beefNoodles');
console.log('beefNoodles', beefNoodles); // { name: '牛肉面', spicy: '微辣'}
const muttonNoodles = noodlesFactory('muttonNoodles');
console.log('muttonNoodles', muttonNoodles); // { name: '羊肉面', spicy: '特辣' }
const eggNoodles = noodlesFactory('eggNoodles');
console.log('eggNoodles', eggNoodles); // { name: '鸡蛋面', spicy: '不要辣'}
