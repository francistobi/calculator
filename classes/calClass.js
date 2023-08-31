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
let digitalRobot = (num) => {
  let totalval = 0;
  if (num > 9) {
    let val = num.toString().split("");
    for (let i = 0; i < val.length; i++) {
      let chr = val[i];
      let num = parseInt(chr);
      totalval += num;
    }
    console.log(totalval);
    if (totalval > 9) {
      val = totalval.toString().split("");
      totalval = 0;
      val.forEach((item) => {
        totalval += parseInt(item);
      });
    }
    return totalval;
  } else {
    return num;
  }
};

module.exports = { Claculator, digitalRobot };
let claculator = new Claculator("ebuka");
