const countries = [
  {
    name: "india",
    population: "10",
    growthrate: "0.68% ",
  },
  {
    name: "china",
    population: "11",
    growthrate: "0.00%",
  },
  {
    name: "brazil",
    population: "12",
    growthrate: "0.46%",
  },
  {
    name: "bahrain",
    population: "20",
    growthrate: "0.61%",
  },
];

for (var a = 0; a < countries.length; a++) {
  console.log(
    countries[a].name +
      " " +
      countries[a].population +
      " " +
      countries[a].growthrate
  );
}
countries.forEach(function (lrg) {
  console.log(lrg);
});

const myFunction =()=>  countries.filter((a1) => {
    return a1.population > 12;
});
console.log("filter", myFunction());

let map = countries.map(function (a1) {
  return a1.growthrate <= 0.5;
});
console.log(map);
