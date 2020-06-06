// 安全模式创建的工厂方法函数
const NoodlesFactory = function(type) {
    if (this instanceof NoodlesFactory) {
        return new this[type]();
    }
    return new NoodlesFactory(type);
}

// 工厂方法函数的原型中设置所有对象的构造函数
NoodlesFactory.prototype = {
    BeefNoodles: function() {
        this.name = '牛肉面';
        this.spicy = '微辣';
    },
    MuttonNoodles: function() {
        this.name = '羊肉面';
        this.spicy = '特辣';
    },
    EggNoodles: function() {
        this.name = '鸡蛋面';
        this.spicy = '不要辣';
    }
}

// 注意：以下的入参是工厂方法函数的原型中设置的构造函数，首字母大写
const beefNoodles = NoodlesFactory('BeefNoodles');
console.log('beefNoodles', beefNoodles); // { name: '牛肉面', spicy: '微辣'}
const muttonNoodles = NoodlesFactory('MuttonNoodles');
console.log('muttonNoodles', muttonNoodles); // { name: '羊肉面', spicy: '特辣' }
const eggNoodles = NoodlesFactory('EggNoodles');
console.log('eggNoodles', eggNoodles); // { name: '鸡蛋面', spicy: '不要辣'}