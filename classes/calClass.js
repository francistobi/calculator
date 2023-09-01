class Claculator {
  //the constructor is the first block of code that will be ran after initilization of the class
  constructor(name) {
    this.name = name;
  }
  addition(...thedata) {
    let add = thedata.reduce((a, b) => a + b, 0);
    return `(addition):${add}`;
  }
  multiply(...theproduct) {
    let multi = theproduct.reduce((a, b) => a * b, 1);
    return `(multiplication):${multi}`;
  }
  division(...thedivid) {
    let divid = thedivid.reduce((a, b) => a / b);
    return `(division):${divid}`;
  }
  substration(...thesub) {
    let subtract = thesub.reduce((a, b) => a - b);
    return `(substration):${subtract}`;
  }
  percentage(value, total) {
    return (value / 100) * total;
  }
}
module.exports = { Claculator };
let cal = new Claculator("ebuka");
