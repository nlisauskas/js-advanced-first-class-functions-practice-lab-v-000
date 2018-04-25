// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.forEach(function (el, i, arr) { console.log(el.name); });
}

function logDriversByHometown(drivers, hometown) {
  return drivers.forEach(function (el, i, arr) {
    if (el.hometown === hometown) {
      console.log(el.name);
    }
  });
}

function driversByRevenue() {

}

function driversByName() {

}

function totalRevenue() {

}

function averageRevenue() {

}
