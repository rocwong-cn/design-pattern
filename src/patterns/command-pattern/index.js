const Interface = require('../../common/interface');

const AdCommand = new Interface('AdCommand', ['execute']);


console.log(Interface.ensureImplements(AdCommand));