const countries = [
  {
    name: "india",
    population: "10",
    growthrate: "3 ",
  },
  {
    name: "china",
    population: "11",
    growthrate: "8",
  },
  {
    name: "brazil",
    population: "12",
    growthrate: "4",
  },
  {
    name: "bahrain",
    population: "20",
    growthrate: "2",
  },
];

for (var a = countries.length; a >= 0; a--) {
  countries.sort();
  console.log(countries[a]);
}

for (var a=countries.length; a<=0; a++) {
  countries.reverse();
  console.log(countries);
}


const abc = countries.filter((ab) => {
  return ab.population >= 10;
});
console.log("filter", abc);

abc.sort((a, b) => (a.name > b.name ? 1 : -1));
console.log("sort", abc);

const xyz = countries.filter((ab) => {
  return ab.growthrate >=2;
});
console.log("filter", xyz);

xyz.sort((e, f) => (e.growthrate < f.growthrate ? 1 : -1));
console.log("sort", xyz); 

alert("I am dveloper");
console.log(alert("good evening"))


var txt
 if (confirm("Press a button!")) {
   txt = "You pressed OK!";
 } else {
   txt = "You pressed Cancel!";
 }
 console.log(txt)

 let z = prompt("what is your age"); 
 console.log (z)
  