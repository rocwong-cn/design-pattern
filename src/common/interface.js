// Constructor
const Interface = function(name, methods) {
    if (arguments.length !== 2) {
        throw new Error(`Interface constructor called with ${arguments.length} arguments, but expected exactly 2.`);
    }
    this.name = name;
    this.methods = [];
    for (let i = 0, len = methods.length; i < len; i ++) {
        if (typeof methods[i] !== 'string') {
            throw new Error(`Interface constructor expects method names to be passed in as a string.`)
        }
        this.methods.push(methods[i]);
    }
};

// static class method.
Interface.ensureImplements = function(object) {
    if (arguments.length < 2) {
        throw new Error(`Function Interface.ensureImplements called with ${arguments.length} arguments, but expected at least 2.`);
    }

    let interface;
    for (let i = 1, len = arguments.length; i < len; i ++) {
        interface = arguments[i];
        if (interface.constructor !== Interface) {
            throw new Error(`Function Interface.ensureImplements expects arguments two and above to be instaces of Interface.`);
        }
    }

    for (let j = 0, methodsLen = interface.methods.length; j < methodsLen; j ++){
        let method = interface.method[j];
        if (!object[method] || typeof object[method] !== 'function') {
            throw new Error(`Function Interface.ensureImplements:object does not implements the ${interface.name} interface.Method ${method} was not found.`);
        }
    }
}

module.exports = Interface;