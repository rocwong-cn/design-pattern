class DesignPattern {
 
    name: string;
 
    constructor (name: string) {
        this.name = name;
    };
 
    shoutout() {
        return ">>> Hello " + this.name;
    }
}
 
var dp = new DesignPattern("Design Pattern");
console.log(dp.shoutout());
