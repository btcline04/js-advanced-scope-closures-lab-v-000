function produceDrivingRange(blockRange) {
  return function(start, end) {
    let distance = Math.abs(parseInt(start) - parseInt(end));
    if (distance > blockRange) {
      return `${Math.abs(distance - blockRange)} blocks out of range`;
    } else {
      return `within range by ${Math.abs(distance - blockRange)}`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  }
}

function createDriver(driver) {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}