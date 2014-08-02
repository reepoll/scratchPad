//console.log("This is working");

var width = 960,
    height = 500;

var projection = d3.geo.albersUsa()
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var color = d3.scale.ordinal()
    .domain(d3.range(9).reverse())
    //check out this next line of code to change colors
    .range(["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

queue()
    .defer(d3.json, "us.json")
    .defer(d3.tsv, "coastal-counties.tsv")
    .await(ready);

function ready(error, us, coastals) {
  if (error) return console.error(error);
  var counties = topojson.feature(us, us.objects.counties),
      neighbors = topojson.neighbors(us.objects.counties.geometries),
      coastals = d3.set(coastals.map(function(d) { return d.id; })),
      nexts = [],
      nexts2 = [],
      distance = 0;

  counties.features.forEach(function(county, i) {
    if (coastals.has(county.id)) nexts.push(county);
    county.distance = Infinity;
    county.neighbors = neighbors[i].map(function(j) { return counties.features[j]; });
  });

  while (nexts.length) {
    nexts.forEach(function(county) {
      if (county.distance > distance) {
        county.distance = distance;
        county.neighbors.forEach(function(neighbor) { nexts2.push(neighbor); });
      }
    });
    nexts = nexts2, nexts2 = [], ++distance;
  }

  svg.append("g")
      .attr("class", "counties")
    .selectAll("path")
      .data(counties.features)
    .enter().append("path")
      .style("fill", function(d) { return color(Math.min(9, d.distance)); })
      .attr("d", path);

  //check out thi section of code which draws the county borders
  svg.append("path")
      .attr("class", "county-borders")
      .datum(topojson.mesh(us, us.objects.counties, function(a, b) { return a !== b; }))
      .attr("d", path);
}