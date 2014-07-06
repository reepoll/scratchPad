//declaring data for chart
var data = [4, 8, 12, 16, 24, 48];

// creating a d3 scale
var x_scale = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0, 480]);

//create bar chart
d3.select(".chart")
	.selectAll("div")
		.data(data)
	.enter().append("div")
		.style("width", function(d) {return x_scale(d) + "px";})
		.text(function(d) {return d;});

//
d3.select("p.test")
	.style("background-color", "red");
