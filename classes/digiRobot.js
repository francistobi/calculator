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
module.exports = { digitalRobot };
