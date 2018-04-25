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

function driversByRevenue(drivers) {
  const driversCopy = drivers.slice();
  return driversCopy.sort(function (a,b) { return a.name.localeCompare(b.name); });
}

function driversByName() {

}

function totalRevenue() {

}

function averageRevenue() {

}
